// Test d'accessibilité de la palette de commandes du kit (Ctrl K) sur kit/demo.html.
// Usage (depuis un dossier où playwright et axe-core sont installés) :
//   node /chemin/labs-brand/kit/tests/palette-a11y.mjs
// Réussite : 0 violation axe (wcag2a/aa/21aa/22aa) dans la palette ouverte,
// champ en combobox relié à la liste, aria-activedescendant qui suit ↓ et ↑.
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const require = createRequire(path.join(process.cwd(), 'noop.js'));
const { chromium } = require('playwright');
const axeSource = require('fs').readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const demo = pathToFileURL(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../demo.html')).href;

let failed = 0;
const check = (ok, msg) => { console.log((ok ? 'ok   ' : 'ÉCHEC ') + msg); if (!ok) failed++; };

const browser = await chromium.launch();
for (const vp of [{ name: 'ordinateur', width: 1280, height: 800 }, { name: 'téléphone', width: 390, height: 844 }, { name: 'petit écran (liste qui défile)', width: 390, height: 300 }]) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  await page.goto(demo);
  const input = page.locator('.lo-palette input');

  check(await input.getAttribute('aria-expanded') === 'false', `[${vp.name}] palette fermée : aria-expanded="false"`);
  await page.keyboard.press('Control+k');
  await page.waitForSelector('.lo-scrim.lo-open');
  await input.fill('note');
  await page.waitForSelector('.lo-palette .lo-it');

  const a = await page.evaluate(() => {
    const i = document.querySelector('.lo-palette input'), ul = document.querySelector('.lo-palette ul');
    return { role: i.getAttribute('role'), exp: i.getAttribute('aria-expanded'), ctl: i.getAttribute('aria-controls'),
      ulId: ul.id, ulName: ul.getAttribute('aria-label') || ul.getAttribute('aria-labelledby'), ad: i.getAttribute('aria-activedescendant') };
  });
  check(a.role === 'combobox', `[${vp.name}] champ role="combobox"`);
  check(a.exp === 'true', `[${vp.name}] palette ouverte : aria-expanded="true"`);
  check(!!a.ulId && a.ctl === a.ulId, `[${vp.name}] aria-controls pointe sur la liste (${a.ctl})`);
  check(!!a.ulName, `[${vp.name}] la liste a un nom accessible`);

  const ad0 = a.ad;
  await page.keyboard.press('ArrowDown');
  const ad1 = await input.getAttribute('aria-activedescendant');
  const sel1 = await page.evaluate(id => { const el = document.getElementById(id); return !!el && el.getAttribute('aria-selected') === 'true' && !!el.closest('.lo-palette'); }, ad1);
  check(!!ad0 && !!ad1 && ad0 !== ad1, `[${vp.name}] ↓ change aria-activedescendant (${ad0} → ${ad1})`);
  check(sel1, `[${vp.name}] aria-activedescendant désigne l'option sélectionnée de la palette`);
  await page.keyboard.press('ArrowUp');
  check(await input.getAttribute('aria-activedescendant') === ad0, `[${vp.name}] ↑ revient à l'option précédente`);
  const ids = await page.evaluate(() => { const all = [...document.querySelectorAll('[id]')].map(e => e.id); return all.length - new Set(all).size; });
  check(ids === 0, `[${vp.name}] aucun id en double dans la page`);

  await page.addScriptTag({ content: axeSource });
  const res = await page.evaluate(() => window.axe.run('.lo-palette', { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'] } }));
  for (const v of res.violations) console.log('  axe :', v.id, '—', v.nodes.length, 'élément(s)');
  check(res.violations.length === 0, `[${vp.name}] axe : 0 violation dans la palette ouverte`);
  check(!res.violations.some(v => ['aria-input-field-name', 'scrollable-region-focusable'].includes(v.id)), `[${vp.name}] ni aria-input-field-name ni scrollable-region-focusable`);

  if (process.env.SHOTS) await page.screenshot({ path: path.join(process.env.SHOTS, `palette-${vp.width}x${vp.height}.png`) });
  await page.keyboard.press('Escape');
  check(await input.getAttribute('aria-expanded') === 'false', `[${vp.name}] Échap : aria-expanded="false"`);
  await page.close();
}
await browser.close();
console.log(failed ? `\n${failed} échec(s)` : '\nTout est vert');
process.exit(failed ? 1 : 0);
