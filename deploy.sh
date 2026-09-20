#!/bin/sh
set -e

BRANCH="pages"
DEPLOY_DIR=$(mktemp -d)
REMOTE_SHA=""

cleanup() {
  cd "$(git rev-parse --show-toplevel)"
  git worktree remove --force "$DEPLOY_DIR" 2>/dev/null || true
  rm -rf "$DEPLOY_DIR"
}
trap cleanup EXIT

echo "🔨  Building site..."
npm run build

echo "🌿  Preparing '$BRANCH' branch..."

# Inspect the remote directly: a fresh clone may not have origin/pages in its
# local remote-tracking refs yet.
REMOTE_SHA=$(git ls-remote --heads origin "$BRANCH" | awk 'NR == 1 { print $1 }')
if [ -n "$REMOTE_SHA" ]; then
  git fetch --no-tags origin "refs/heads/$BRANCH:refs/remotes/origin/$BRANCH"
  git worktree add --detach "$DEPLOY_DIR" "origin/$BRANCH"
elif git show-ref --verify --quiet "refs/heads/$BRANCH"; then
  git worktree add --detach "$DEPLOY_DIR" "$BRANCH"
else
  # First deploy — create a fresh orphan branch (requires Git >= 2.36).
  echo "  No '$BRANCH' branch found, creating orphan..."
  git worktree add --orphan -b "$BRANCH" "$DEPLOY_DIR"
fi

echo "📦  Copying dist/ to deploy worktree..."
# Wipe everything except the .git reference file that worktree needs.
find "$DEPLOY_DIR" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -r dist/. "$DEPLOY_DIR/"

cd "$DEPLOY_DIR"
git add -A

if git diff --cached --quiet; then
  echo "✅  Nothing new to deploy — already up to date."
else
  git commit -m "deploy: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
  echo "🚀  Pushing to origin/$BRANCH..."
  # Refuse to overwrite a branch changed by another deploy after the fetch.
  if [ -n "$REMOTE_SHA" ]; then
    git push --force-with-lease="refs/heads/$BRANCH:$REMOTE_SHA" origin "HEAD:$BRANCH"
  else
    git push --force-with-lease="refs/heads/$BRANCH:" origin "HEAD:$BRANCH"
  fi
  echo "✅  Deployed! Your site is live on the '$BRANCH' branch."
fi
