import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const text = async (path) => readFile(new URL(path, root), 'utf8');

const CMS_ASSET_URL = 'https://unpkg.com/@sveltia/cms@0.188.0/dist/sveltia-cms.js';
// SHA-384 digest of the exact pinned Sveltia CMS 0.188.0 asset bytes. Keeping the
// digest locally makes this check deterministic and independent of the network.
const CMS_SHA384_DIGEST_HEX =
  'e1146a643bcb68e496be681e931810fa3b3b026539b31361f53ef8b78c65e8262a0f918743b24b18fb86fd990893784d';
const expectedCmsIntegrity = `sha384-${Buffer.from(CMS_SHA384_DIGEST_HEX, 'hex').toString('base64')}`;
assert.match(CMS_SHA384_DIGEST_HEX, /^[0-9a-f]{96}$/);
assert.equal(Buffer.from(CMS_SHA384_DIGEST_HEX, 'hex').byteLength, 48);

const [eventRoute, blogRoute, calendar, eventRoll, writingIndex, cms, cmsIndex, workflow, deploy] = await Promise.all([
  text('src/pages/events/[...slug].astro'),
  text('src/pages/writing/[...slug].astro'),
  text('src/components/Calendar.astro'),
  text('src/components/EventRoll.astro'),
  text('src/pages/writing/index.astro'),
  text('public/admin/config.yml'),
  text('public/admin/index.html'),
  text('.github/workflows/deploy.yml'),
  text('deploy.sh'),
]);

assert.match(eventRoute, /getCollection\('events', \(\{ data \}\) => !data\.draft\)/);
assert.match(blogRoute, /getCollection\('blog', \(\{ data \}\) => !data\.draft\)/);
assert.match(calendar, /function escapeHtml\(value: string\)/);
assert.match(calendar, /escapeHtml\(ev\.title\)/);
assert.doesNotMatch(calendar, /\$\{ev\.title\}/);
assert.match(eventRoll, /event\.data\.image\.startsWith\('\/'\)/);
assert.match(writingIndex, /post\.data\.heroImage\.startsWith\('\/'\)/);
assert.match(cms, /name: taglineEn/);
assert.match(cms, /name: description/);
assert.match(cms, /name: swish/);
assert.match(cms, /name: note/);
assert.doesNotMatch(cms, /name: phone/);
const cmsScript = cmsIndex.match(
  /<script\s+src="([^"]+)"\s+integrity="([^"]+)"\s+crossorigin="anonymous"\s*><\/script>/s,
);
assert.ok(cmsScript, 'pinned CMS script must include crossorigin and SRI attributes');
assert.equal(cmsScript[1], CMS_ASSET_URL);
assert.equal(cmsScript[2], expectedCmsIntegrity);
assert.match(workflow, /concurrency:\n  group: pages-deploy\n  cancel-in-progress: true/);
assert.match(workflow, /actions\/checkout@[0-9a-f]{40}/);
assert.match(workflow, /actions\/setup-node@[0-9a-f]{40}/);
assert.match(workflow, /peaceiris\/actions-gh-pages@[0-9a-f]{40}/);
assert.match(deploy, /git ls-remote --heads origin/);
assert.match(deploy, /--force-with-lease=/);

console.log('Remediation checks passed.');
