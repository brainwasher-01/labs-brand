/* ═══════════════════════════════════════════════════════════════════════════
   Labs OS — kit commun de la suite Labs (dépôt labs-brand, dossier kit/).
   NE PAS MODIFIER DANS UNE APPLI : recopié par la propagation.

   Ajoute à n'importe quelle appli de la suite :
   - le dock des 5 applis (logos officiels), qui passe en barre du bas sur mobile ;
   - la palette de commandes (Ctrl K ou Cmd K), avec les commandes de l'appli,
     ses liens de navigation et, si elle le fournit, sa recherche ;
   - la barre d'état (version, état fourni par l'appli, heure) ;
   - les crochets : titres de page entre [ ] et coins en crochet sur les cartes ;
   - le mode clair / sombre / automatique, appliqué avant l'affichage.

   Utilisation (dans <head>, sans defer, pour éviter un flash de couleurs) :
     <link rel="stylesheet" href="/labs-os/labs-os.css">
     <script src="/labs-os/labs-os.js"></script>
     <script>LabsOS.init({ app: 'projet', version: '1.2.0', title: 'h1', cards: '.card' })</script>
   Options : voir docs/labs-os.md dans labs-brand. Aucun appel réseau.
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var KIT_VERSION = '1.0.1';
  var APPS = [
    { id: 'backup',  name: 'Backup Labs',  color: '#7ee2a8', d: 'M26 20v24 M26 20h6a5.5 5.5 0 0 1 0 11h-6 M26 31h7a6.5 6.5 0 0 1 0 13h-7' },
    { id: 'projet',  name: 'Projet Labs',  color: '#b49cff', d: 'M26 44V20h6.5a6.5 6.5 0 0 1 0 13H26' },
    { id: 'torrent', name: 'Torrent Labs', color: '#ff9b6a', d: 'M24 20h16 M32 20v24' },
    { id: 'finance', name: 'Finance Labs', color: '#6cc7f0', d: 'M27 44V20h11 M27 31h9' },
    { id: 'asset',   name: 'Asset Labs',   color: '#f2b84b', d: 'M24.5 44 32 20l7.5 24 M27 36h10' }
  ];
  var ICONS = {
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',
    link: '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
    file: '<path d="M6 3h8l4 4v14H6zM14 3v4h4M9 13h6M9 17h4"/>',
    play: '<path d="M7 4l13 8-13 8z"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
    box: '<path d="M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10"/>',
    down: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
    restore: '<path d="M4 12a8 8 0 108-8M4 4v5h5"/>',
    home: '<path d="M3 11l9-8 9 8M5 10v10h14V10"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    wallet: '<path d="M3 7h16a2 2 0 012 2v9H5a2 2 0 01-2-2zM3 7l12-3v3M16 13h3"/>'
  };
  var root = document.documentElement;
  var opts = {}, started = false, els = {}, cmds = [], shown = [], sel = 0, inputMode = null, searchSeq = 0;

  /* ── Stockage prudent ── */
  function load(k, d) { try { var v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function svgIcon(n) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[n] || ICONS.arrow) + '</svg>'; }
  function logo(a) {
    return '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="2" y="2" width="60" height="60" rx="12" fill="#0b1015" stroke="' + a.color + '" stroke-width="2.5"/>' +
      '<path d="M20 17h-6v30h6M44 17h6v30h-6" fill="none" stroke="' + a.color + '" stroke-width="4" stroke-linecap="square"/>' +
      '<path d="' + a.d + '" fill="none" stroke="' + a.color + '" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  /* ── Mode clair / sombre : appliqué tout de suite (avant l'affichage) ── */
  var MODE_KEY = 'labs.mode';
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
  function wantedMode() { return load(MODE_KEY, 'auto'); }
  function resolved(m) { return m === 'light' || m === 'dark' ? m : (mq && mq.matches ? 'light' : 'dark'); }
  function applyMode() {
    var r = resolved(wantedMode());
    root.setAttribute('data-lo-mode', r);
    if (opts.onMode) { try { opts.onMode(r, wantedMode()); } catch (e) {} }
  }
  function cycleMode() {
    var order = ['auto', 'dark', 'light'], cur = wantedMode();
    save(MODE_KEY, order[(order.indexOf(cur) + 1) % 3]); applyMode(); renderStatus();
  }
  if (mq && mq.addEventListener) mq.addEventListener('change', function () { if (wantedMode() === 'auto') applyMode(); });
  applyMode();

  /* ── Adresses des autres applis ──
     1. options de l'appli (suite: {backup: 'https://…'}) ; 2. réglage mémorisé dans ce navigateur ;
     3. déduite du nom d'hôte : projet-labs.mondomaine.fr → backup-labs.mondomaine.fr. */
  function savedUrls() { try { return JSON.parse(load('labs.suite', '{}')) || {}; } catch (e) { return {}; } }
  function urlFor(id) {
    if (opts.suite && opts.suite[id]) return opts.suite[id];
    var s = savedUrls(); if (s[id]) return s[id];
    var m = location.hostname.match(/^(backup|projet|torrent|finance|asset)-labs(\..+)$/);
    if (m) return location.protocol + '//' + id + '-labs' + m[2] + (location.port ? ':' + location.port : '') + '/';
    return null;
  }
  function setUrl(id, url) {
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
    var s = savedUrls(); s[id] = url.replace(/\s+/g, ''); save('labs.suite', JSON.stringify(s));
  }
  function goApp(id) {
    if (id === opts.app) return;
    var u = urlFor(id);
    if (u) { location.href = u; return; }
    var a = APPS.filter(function (x) { return x.id === id; })[0];
    openPalette({ input: { id: id, prompt: 'Adresse de ' + a.name + ' (ex. https://' + id + '-labs.mondomaine.fr)' } });
  }

  /* ── Construction de la coque ── */
  function build() {
    root.classList.add('lo-on');
    if (opts.statusBar === false) root.classList.add('lo-no-status');
    if (opts.aurora !== false) { var au = document.createElement('div'); au.className = 'lo-aurora'; au.setAttribute('aria-hidden', 'true'); document.body.prepend(au); }

    var dock = document.createElement('nav'); dock.className = 'lo-dock'; dock.setAttribute('aria-label', 'Applis de la suite Labs');
    dock.innerHTML = APPS.map(function (a, i) {
      var cur = a.id === opts.app, u = cur ? null : urlFor(a.id);
      return '<a class="lo-dock-btn" href="' + (u ? esc(u) : '#') + '" data-lo-app="' + a.id + '"' + (cur ? ' aria-current="page"' : '') + (!cur && !u ? ' data-unknown=""' : '') + ' aria-label="' + a.name + '">' + logo(a) +
        '<span class="lo-tip">' + a.name + (cur ? '' : u ? '<kbd>' + (i + 1) + '</kbd>' : '<kbd>à régler</kbd>') + '</span></a>';
    }).join('') + '<div class="lo-dock-foot"><button class="lo-icon-btn" type="button" data-lo-act="mode" aria-label="Clair, sombre ou automatique">' + svgIcon('sun') + '</button>' +
      '<button class="lo-icon-btn" type="button" data-lo-act="palette" aria-label="Palette de commandes (Ctrl K)">' + svgIcon('search') + '</button></div>';
    document.body.appendChild(dock); els.dock = dock;
    dock.addEventListener('click', function (e) {
      var b = e.target.closest('.lo-dock-btn');
      if (b) { var u = b.getAttribute('href'); if (b.getAttribute('aria-current') || !u || u === '#') { e.preventDefault(); goApp(b.getAttribute('data-lo-app')); } return; }
      var act = e.target.closest('[data-lo-act]'); if (!act) return;
      if (act.getAttribute('data-lo-act') === 'mode') cycleMode(); else openPalette();
    });

    if (opts.statusBar !== false) { var st = document.createElement('footer'); st.className = 'lo-status'; document.body.appendChild(st); els.status = st;
      st.addEventListener('click', function (e) { var b = e.target.closest('[data-lo-act]'); if (!b) return; b.getAttribute('data-lo-act') === 'mode' ? cycleMode() : openPalette(); });
      renderStatus(); setInterval(renderStatus, 1000); refreshStatus(); setInterval(refreshStatus, opts.statusEvery || 15000); }

    var scrim = document.createElement('div'); scrim.className = 'lo-scrim';
    scrim.innerHTML = '<div class="lo-palette" role="dialog" aria-modal="true" aria-label="Palette de commandes"><div class="lo-palette-in"><span class="lo-b">[</span><input type="text" autocomplete="off" spellcheck="false" aria-label="Commande"><span class="lo-b">]</span></div><ul role="listbox"></ul>' +
      '<div class="lo-palette-foot"><span><kbd>↑</kbd> <kbd>↓</kbd> naviguer</span><span><kbd>Entrée</kbd> ouvrir</span><span><kbd>1</kbd>–<kbd>5</kbd> changer d\'appli</span><span><kbd>Échap</kbd> fermer</span></div></div>';
    document.body.appendChild(scrim); els.scrim = scrim; els.input = scrim.querySelector('input'); els.list = scrim.querySelector('ul');
    scrim.addEventListener('click', function (e) { if (e.target === scrim) closePalette(); var it = e.target.closest('.lo-it'); if (it) runItem(+it.getAttribute('data-i')); });
    els.input.addEventListener('input', function () { sel = 0; drawPalette(); });

    decorate();
    if (window.MutationObserver) { var t = null; new MutationObserver(function () { clearTimeout(t); t = setTimeout(decorate, 60); }).observe(document.body, { childList: true, subtree: true }); }
  }

  /* Titres entre crochets, coins en crochet sur les cartes */
  function decorate() {
    if (opts.title) document.querySelectorAll(opts.title).forEach(function (h) { if (!h.closest('.lo-palette')) h.classList.add('lo-br'); });
    if (opts.cards) document.querySelectorAll(opts.cards).forEach(function (c) {
      if (c.classList.contains('lo-card')) return;
      c.classList.add('lo-card'); if (getComputedStyle(c).position === 'static') c.style.position = 'relative';
    });
    if (opts.star) document.querySelectorAll(opts.star).forEach(function (c) { c.classList.add('lo-star'); });
  }

  /* ── Barre d'état ── */
  var statusItems = [];
  function refreshStatus() {
    if (!opts.status) return;
    Promise.resolve().then(opts.status).then(function (items) { statusItems = items || []; renderStatus(); }).catch(function () {});
  }
  function renderStatus() {
    if (!els.status) return;
    var a = APPS.filter(function (x) { return x.id === opts.app; })[0] || { id: opts.app };
    var m = wantedMode(), ml = m === 'auto' ? 'auto' : m === 'dark' ? 'sombre' : 'clair';
    els.status.innerHTML = '<span class="lo-live">● ' + esc(opts.host || location.hostname) + '</span><span>' + esc(a.id) + '.labs <b>' + esc(opts.version ? 'v' + String(opts.version).replace(/^v/, '') : '') + '</b></span>' +
      statusItems.map(function (it) { return '<span' + (it.tone ? ' class="lo-' + esc(it.tone) + '"' : '') + '>' + esc(it.label) + (it.value != null ? ' <b>' + esc(it.value) + '</b>' : '') + '</span>'; }).join('') +
      '<span class="lo-end"><button type="button" data-lo-act="palette">Ctrl K</button></span><span><button type="button" data-lo-act="mode">◐ ' + ml + '</button></span><span>' + new Date().toLocaleTimeString('fr-FR') + '</span>';
  }

  /* ── Palette ── */
  function baseCommands() {
    var list = [];
    APPS.forEach(function (a, i) {
      if (a.id === opts.app) return;
      list.push({ group: 'Applis de la suite', label: 'Ouvrir ' + a.name, hint: urlFor(a.id) ? String(i + 1) : 'à régler', logo: a, run: function () { goApp(a.id); } });
    });
    (opts.commands || []).forEach(function (c) { list.push(c); });
    if (opts.nav) {
      var seen = {};
      document.querySelectorAll(opts.nav).forEach(function (l) {
        var label = (l.getAttribute('aria-label') || l.textContent || '').replace(/\s+/g, ' ').trim(), href = l.getAttribute('href');
        if (!label || !href || seen[label]) return; seen[label] = 1;
        list.push({ group: 'Aller à', label: label, icon: 'arrow', run: function () { l.click(); } });
      });
    }
    list.push({ group: 'Réglages', label: 'Basculer clair / sombre / automatique', hint: 'mode', icon: 'sun', run: cycleMode });
    APPS.forEach(function (a) {
      if (a.id === opts.app) return;
      list.push({ group: 'Réglages', label: 'Régler l\'adresse de ' + a.name, hint: urlFor(a.id) ? 'modifier' : 'à régler', icon: 'link', keywords: 'url adresse lien',
        run: function () { openPalette({ input: { id: a.id, prompt: 'Adresse de ' + a.name + ' (ex. https://' + a.id + '-labs.mondomaine.fr)' } }); } });
    });
    return list;
  }
  function openPalette(o) {
    o = o || {};
    if (!started) return;
    inputMode = o.input || null;
    cmds = baseCommands(); sel = 0;
    els.scrim.classList.add('lo-open');
    els.input.value = o.query || '';
    els.input.placeholder = inputMode ? inputMode.prompt : (opts.placeholder || 'Aller, lancer, chercher…');
    drawPalette(); els.input.focus();
  }
  function closePalette() { els.scrim.classList.remove('lo-open'); inputMode = null; }
  function drawPalette() {
    var q = els.input.value.trim();
    if (inputMode) {
      shown = q ? [{ label: 'Enregistrer : ' + q, icon: 'link', group: 'Adresse', run: function () { setUrl(inputMode.id, q); var id = inputMode.id; closePalette(); location.href = urlFor(id); } }] : [];
      paint(q ? '' : 'Collez l\'adresse complète de l\'appli, puis Entrée. Elle est mémorisée dans ce navigateur.');
      return;
    }
    var nq = norm(q), words = nq.split(/\s+/).filter(Boolean);
    shown = cmds.filter(function (c) { var hay = norm(c.label + ' ' + (c.hint || '') + ' ' + (c.group || '') + ' ' + (c.keywords || '')); return words.every(function (w) { return hay.indexOf(w) >= 0; }); });
    paint(shown.length ? '' : 'Rien ne correspond.');
    if (opts.search && q.length >= 2) {
      var seq = ++searchSeq;
      Promise.resolve(opts.search(q)).then(function (res) {
        if (seq !== searchSeq || !els.scrim.classList.contains('lo-open')) return;
        (res || []).forEach(function (r) { r.group = r.group || 'Résultats'; });
        shown = shown.concat(res || []); paint(shown.length ? '' : 'Rien ne correspond.');
      }).catch(function () {});
    }
  }
  function paint(empty) {
    sel = Math.min(sel, Math.max(0, shown.length - 1));
    var g = null, html = '';
    shown.forEach(function (c, i) {
      if (c.group !== g) { g = c.group; html += '<li class="lo-grp" role="presentation">' + esc(g) + '</li>'; }
      html += '<li class="lo-it" role="option" data-i="' + i + '" aria-selected="' + (i === sel) + '">' + (c.logo ? logo(c.logo) : '<span class="lo-ic">' + svgIcon(c.icon) + '</span>') +
        '<span class="lo-l">' + esc(c.label) + '</span>' + (c.hint ? '<span class="lo-h">' + esc(c.hint) + '</span>' : '') + '</li>';
    });
    if (empty) html += '<li class="lo-grp" style="padding:1rem .75rem">' + esc(empty) + '</li>';
    els.list.innerHTML = html;
    var cur = els.list.querySelector('[aria-selected="true"]'); if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: 'nearest' });
  }
  function runItem(i) {
    var c = shown[i]; if (!c) return;
    var keep = !!c.keepOpen; if (!keep) closePalette();
    if (c.href) { location.href = c.href; return; }
    if (c.run) c.run(els.input.value.trim());
  }

  /* Une fenêtre de l'appli est-elle ouverte (et visible) ? */
  function modalOpen() {
    return [].some.call(document.querySelectorAll('dialog[open], [aria-modal="true"], [role="dialog"]'), function (m) { return !m.closest('.lo-scrim') && m.getClientRects().length > 0; });
  }

  /* ── Clavier ── */
  document.addEventListener('keydown', function (e) {
    if (!started) return;
    var open = els.scrim.classList.contains('lo-open');
    if ((e.ctrlKey || e.metaKey) && !e.altKey && (e.key === 'k' || e.key === 'K') && opts.paletteKey !== false) { e.preventDefault(); e.stopPropagation(); open ? closePalette() : openPalette(); return; }
    if (open) {
      if (e.key === 'Escape') { e.preventDefault(); closePalette(); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); sel = (sel + 1) % Math.max(1, shown.length); paint(''); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); sel = (sel - 1 + shown.length) % Math.max(1, shown.length); paint(''); }
      else if (e.key === 'Enter') { e.preventDefault(); runItem(sel); }
      return;
    }
    var t = document.activeElement, typing = t && (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable);
    if (typing || e.ctrlKey || e.metaKey || e.altKey || opts.appKeys === false) return;
    if (/^[1-5]$/.test(e.key) && !modalOpen()) { var a = APPS[+e.key - 1]; if (a.id !== opts.app) { e.preventDefault(); goApp(a.id); } }
  }, true);

  /* ── API publique ── */
  window.LabsOS = {
    version: KIT_VERSION,
    apps: APPS.map(function (a) { return { id: a.id, name: a.name, color: a.color }; }),
    init: function (o) {
      opts = o || {};
      if (opts.app) root.setAttribute('data-lo-app', opts.app);
      applyMode();
      var go = function () { if (started) return; started = true; build(); };
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
    },
    open: function (query) { openPalette({ query: query }); },
    close: closePalette,
    refresh: function () { refreshStatus(); decorate(); },
    update: function (o) { Object.keys(o || {}).forEach(function (k) { opts[k] = o[k]; }); if (started) { renderStatus(); decorate(); } },
    setStatus: function (items) { statusItems = items || []; renderStatus(); },
    mode: function () { return root.getAttribute('data-lo-mode'); },
    setMode: function (m) { save(MODE_KEY, m); applyMode(); renderStatus(); },
    url: urlFor
  };
})();
