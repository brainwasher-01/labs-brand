/* ═══════════════════════════════════════════════════════════════════════════
   Labs OS — kit commun de la suite Labs (dépôt labs-brand, dossier kit/).
   NE PAS MODIFIER DANS UNE APPLI : recopié par la propagation.

   Ajoute à n'importe quelle appli de la suite :
   - la barre de recherche du haut (résultats au fil de la frappe, rangés par catégorie)
     et la palette de commandes (Ctrl K ou Cmd K), qui partagent les mêmes résultats ;
   - le menu commun (classes lo-side, lo-nav…) et son tiroir sur téléphone ;
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
  var KIT_VERSION = '2.6.0';
  var APPS = [
    { id: 'backup',  name: 'Backup .labs',  color: '#7ee2a8', d: 'M26 20v24 M26 20h6a5.5 5.5 0 0 1 0 11h-6 M26 31h7a6.5 6.5 0 0 1 0 13h-7' },
    { id: 'projet',  name: 'Projet .labs',  color: '#b49cff', d: 'M26 44V20h6.5a6.5 6.5 0 0 1 0 13H26' },
    { id: 'torrent', name: 'Torrent .labs', color: '#ff9b6a', d: 'M24 20h16 M32 20v24' },
    { id: 'finance', name: 'Finance .labs', color: '#6cc7f0', d: 'M27 44V20h11 M27 31h9' },
    // 2.6.0 : Plex Labs devient Cover Labs (nom affiché) ; l'identifiant reste 'plex' jusqu'au déploiement de l'appli renommée
    { id: 'plex',    name: 'Cover .labs',   color: '#f2b84b', d: 'M26 44V20h6.5a6.5 6.5 0 0 1 0 13H26' },
    { id: 'mixer',   name: 'Mixer .labs',   color: '#8ef26a', d: 'M25 44V20l7 12 7-12v24' },
    // 2.4.0 : Crate entre dans la suite hors du schéma « … Labs » : nom seul, logo C vinyle (apps/crate/logo/crate.svg)
    { id: 'crate',   name: 'Crate',         color: '#d9701f', host: 'crate', svg: '<svg viewBox="0 0 512 512" aria-hidden="true"><defs><mask id="lo-crate-c"><rect width="512" height="512" fill="#000"/><circle cx="256" cy="256" r="196" fill="#fff"/><circle cx="256" cy="256" r="104" fill="#000"/><path d="M256 256L512 196V316Z" fill="#000"/></mask></defs><rect width="512" height="512" rx="112" fill="#18181b"/><g mask="url(#lo-crate-c)" fill="none" stroke="#f0f0f2" stroke-width="9"><circle cx="256" cy="256" r="190"/><circle cx="256" cy="256" r="166"/><circle cx="256" cy="256" r="142"/><circle cx="256" cy="256" r="118"/></g><circle cx="256" cy="256" r="22" fill="#d9701f"/></svg>' },
    // 2.5.0 : Digger entre dans la suite hors du schéma « … Labs » : nom seul, logo propre (logos/digger.svg) ;
    // 2.6.0 : logo de la proposition d'origine (trois disques dans un bac, le dernier tiré vers le haut)
    { id: 'digger',  name: 'Digger',        color: '#e45bd0', host: 'digger', svg: '<svg viewBox="0 0 512 512" aria-hidden="true"><rect width="512" height="512" rx="112" fill="#18181b"/><g fill="none" stroke="#f0f0f2" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"><path d="M112 236v152h288V236"/><path d="M176 380V250M240 380V232"/><path d="M318 380l26-196"/></g><circle cx="352" cy="134" r="34" fill="#e45bd0"/></svg>' }
  ];
  var ICONS = {
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',
    link: '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
    file: '<path d="M6 3h8l4 4v14H6zM14 3v4h4M9 13h6M9 17h4"/>',
    play: '<path d="M7 4l13 8-13 8z"/>',
    gear: '<path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z"/><circle cx="12" cy="12" r="3"/>',
    side: '<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M9 4v16M15.5 10l-2 2 2 2"/>',
    sideOpen: '<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M9 4v16M13.5 10l2 2-2 2"/>',
    box: '<path d="M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10"/>',
    down: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
    restore: '<path d="M4 12a8 8 0 108-8M4 4v5h5"/>',
    home: '<path d="M3 11l9-8 9 8M5 10v10h14V10"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    wallet: '<path d="M3 7h16a2 2 0 012 2v9H5a2 2 0 01-2-2zM3 7l12-3v3M16 13h3"/>',
    activity: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
    logout: '<path d="M14 4h5v16h-5M10 8l-4 4 4 4M6 12h11"/>',
    moon: '<path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z"/>',
    auto: '<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 010 16z" fill="currentColor"/>',
    tag: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="7.5" r="1.2"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    film: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
    tv: '<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/>',
    folder: '<path d="M3 6h6l2 2h10v11H3z"/>'
  };
  var root = document.documentElement;
  var opts = {}, started = false, els = {}, shown = [], sel = 0, inputMode = null, searchSeq = 0, top = { el: null, input: null, drop: null, shown: [], sel: -1, seq: 0, timer: 0 };

  /* ── Stockage prudent ── */
  function load(k, d) { try { var v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function svgIcon(n) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[n] || ICONS.arrow) + '</svg>'; }
  function logo(a) {
    if (a.svg) return a.svg;   // logo propre (Crate, Digger)
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
    save(MODE_KEY, order[(order.indexOf(cur) + 1) % 3]); applyMode(); renderStatus(); renderFoot();
  }
  var MODE_LABEL = { auto: 'Mode automatique', dark: 'Mode sombre', light: 'Mode clair' };

  /* ── Pied du menu commun : lignes d'état, version (lien vers les notes), outils, bouton de mode ── */
  var foot = { el: null, spec: null };
  function renderFoot() {
    var el = foot.el, s = foot.spec; if (!el || !s) return;
    var h = '<div class="lo-foot-st">';
    (s.rows || []).forEach(function (r, i) {
      if (!r || r.hidden) return;
      var tag = r.href ? 'a' : r.run ? 'button' : 'div';   // 2.3.0 : une ligne peut lancer une action (run)
      h += '<' + tag + ' class="lo-foot-row"' + (r.href ? ' href="' + esc(r.href) + '"' : '') + (!r.href && r.run ? ' type="button" data-lo-row="' + i + '"' : '') + (r.title ? ' title="' + esc(r.title) + '"' : '') + '>' +
        (r.icon ? svgIcon(r.icon) : '<span class="lo-dot' + (r.tone ? ' lo-' + esc(r.tone) : '') + '"></span>') + '<span class="lo-t">' + esc(r.label) + '</span></' + tag + '>';
    });
    if (s.version) h += '<a class="lo-foot-row lo-foot-ver" href="' + esc(s.version.href || '#') + '" title="' + esc(s.version.title || 'Notes de version') + '">' + svgIcon('tag') + '<span class="lo-t">' + esc(s.version.label) + '</span></a>';
    h += '</div><div class="lo-foot-tools">';
    var m = wantedMode(), modeBtn = s.mode === false ? '' : '<button type="button" class="lo-tool" data-lo-tool="mode" title="' + MODE_LABEL[m] + ' (changer)" aria-label="' + MODE_LABEL[m] + ', changer">' + svgIcon(m === 'auto' ? 'auto' : m === 'dark' ? 'moon' : 'sun') + '</button>';
    var tools = s.tools || [];
    if (tools.indexOf('mode') < 0) h += modeBtn;   // 2.2.0 : le mode ouvre la rangée (mode, outils… | déconnexion)
    tools.forEach(function (t, i) {
      if (t === 'mode') { h += modeBtn; return; }
      if (t === '-') { h += '<span class="lo-sp"></span>'; return; }
      if (!t || t.hidden) return;
      var cur = t.href && location.hash && t.href === location.hash.split('?')[0] ? ' aria-current="page"' : '';
      h += t.href ? '<a class="lo-tool" href="' + esc(t.href) + '"' + cur : '<button type="button" class="lo-tool" data-lo-tool="' + i + '"';
      h += ' title="' + esc(t.label) + '" aria-label="' + esc(t.label) + '">' + svgIcon(t.icon) + (t.href ? '</a>' : '</button>');
    });
    el.innerHTML = h + '</div>';
    sideTitles();
  }
  function setFoot(target, spec) {
    var el = typeof target === 'string' ? document.querySelector(target) : target; if (!el) return;
    if (foot.el !== el) {
      el.classList.add('lo-foot');
      el.addEventListener('click', function (e) {
        var row = e.target.closest('[data-lo-row]');
        if (row) { var r = (foot.spec.rows || [])[+row.getAttribute('data-lo-row')]; if (r && r.run) r.run(e); return; }
        var b = e.target.closest('[data-lo-tool]'); if (!b) return;
        var k = b.getAttribute('data-lo-tool');
        if (k === 'mode') { cycleMode(); return; }
        var t = (foot.spec.tools || [])[+k]; if (t && t.run) t.run(e);
      });
      window.addEventListener('hashchange', renderFoot);
    }
    foot.el = el; foot.spec = spec || {}; renderFoot();
  }
  if (mq && mq.addEventListener) mq.addEventListener('change', function () { if (wantedMode() === 'auto') applyMode(); });
  applyMode();

  /* ── Menu réductible (2.2.0) ──
     Sur ordinateur, un bouton en tête du menu le réduit à ses icônes (html.lo-side-mini) ; le choix est mémorisé
     dans ce navigateur (labs.side) pour toute la suite. Réduit, chaque lien garde son nom en info-bulle.
     Sur téléphone, le tiroir reste entier. Raccourci : [ (hors saisie). Option sideToggle: false pour s'en passer. */
  var SIDE_KEY = 'labs.side';
  function sideMini() { return root.classList.contains('lo-side-mini'); }
  if (load(SIDE_KEY, '') === 'mini') root.classList.add('lo-side-mini');
  /* 2.3.0 : un texte nu dans une entrée du menu (ex. Svelte : <a><svg/>Sauvegardes</a>) est enveloppé dans .lo-t,
     pour que le mode réduit le masque comme les autres. */
  function wrapNavText() {
    document.querySelectorAll('.lo-side .lo-nav a, .lo-side .lo-nav .lo-nav-it').forEach(function (a) {
      for (var n = a.firstChild; n; n = n.nextSibling) {
        if (n.nodeType === 3 && n.nodeValue.trim()) { var sp = document.createElement('span'); sp.className = 'lo-t'; a.insertBefore(sp, n); sp.appendChild(n); n = sp; }
      }
    });
  }
  function sideTitles() {
    var mini = sideMini();
    wrapNavText();
    document.querySelectorAll('.lo-side .lo-nav a, .lo-side .lo-nav .lo-nav-it, .lo-side .lo-foot-row').forEach(function (a) {
      var t = a.querySelector('.lo-t, .grow') || a;
      var label = (a.getAttribute('aria-label') || t.textContent || '').trim(); if (!label) return;
      if (mini) { if (!a.hasAttribute('title')) { a.setAttribute('title', label); a.setAttribute('data-lo-tip', '1'); } }
      else if (a.getAttribute('data-lo-tip')) { a.removeAttribute('title'); a.removeAttribute('data-lo-tip'); }
    });
    var b = document.querySelector('.lo-side-toggle');
    if (b) {
      var l = mini ? 'Déplier le menu' : 'Réduire le menu';
      b.setAttribute('aria-label', l); b.setAttribute('title', l + ' ( [ )'); b.setAttribute('aria-expanded', mini ? 'false' : 'true');
      b.innerHTML = svgIcon(mini ? 'sideOpen' : 'side');
    }
  }
  function setSide(mini) {
    root.classList.toggle('lo-side-mini', !!mini); save(SIDE_KEY, mini ? 'mini' : 'full'); sideTitles();
    if (opts.onSide) { try { opts.onSide(!!mini); } catch (e) {} }
  }
  function buildSideToggle() {
    if (opts.sideToggle === false) { root.classList.remove('lo-side-mini'); return; }
    var head = document.querySelector('.lo-side .lo-side-head'); if (!head || head.querySelector('.lo-side-toggle')) return;
    var b = document.createElement('button'); b.type = 'button'; b.className = 'lo-side-toggle';
    b.addEventListener('click', function () { setSide(!sideMini()); });
    head.appendChild(b); sideTitles();
  }

  /* ── Adresses des autres applis ──
     1. options de l'appli (suite: {backup: 'https://…'}) ; 2. réglage mémorisé dans ce navigateur ;
     3. déduite du nom d'hôte : projet-labs.mondomaine.fr → backup-labs.mondomaine.fr. */
  function savedUrls() { try { return JSON.parse(load('labs.suite', '{}')) || {}; } catch (e) { return {}; } }
  function urlFor(id) {
    if (opts.suite && opts.suite[id]) return opts.suite[id];
    var s = savedUrls(); if (s[id]) return s[id];
    var m = location.hostname.match(/^(?:(?:backup|projet|torrent|finance|plex|cover|mixer|asset)-labs|crate|digger)(\..+)$/);
    var app = APPS.filter(function (x) { return x.id === id; })[0];
    if (m) return location.protocol + '//' + (app && app.host ? app.host : id + '-labs') + m[1] + (location.port ? ':' + location.port : '') + '/';
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

    if (opts.statusBar !== false) { var st = document.createElement('footer'); st.className = 'lo-status'; document.body.appendChild(st); els.status = st;
      st.addEventListener('click', function (e) { var b = e.target.closest('[data-lo-act]'); if (!b) return; b.getAttribute('data-lo-act') === 'mode' ? cycleMode() : openPalette(); });
      renderStatus(); setInterval(renderStatus, 1000); refreshStatus(); setInterval(refreshStatus, opts.statusEvery || 15000); }

    var scrim = document.createElement('div'); scrim.className = 'lo-scrim';
    scrim.innerHTML = '<div class="lo-palette" role="dialog" aria-modal="true" aria-label="Palette de commandes"><div class="lo-palette-in"><span class="lo-b">[</span><input type="text" autocomplete="off" spellcheck="false" aria-label="Commande" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-controls="lo-pal-list"><span class="lo-b">]</span></div><ul id="lo-pal-list" role="listbox" aria-label="Résultats"></ul>' +
      '<div class="lo-palette-foot"><span><kbd>↑</kbd> <kbd>↓</kbd> naviguer</span><span><kbd>Entrée</kbd> ouvrir</span><span><kbd>1</kbd>–<kbd>8</kbd> changer d\'appli</span><span><kbd>Échap</kbd> fermer</span></div></div>';
    document.body.appendChild(scrim); els.scrim = scrim; els.input = scrim.querySelector('input'); els.list = scrim.querySelector('ul');
    scrim.addEventListener('click', function (e) { if (e.target === scrim) closePalette(); var it = e.target.closest('.lo-it'); if (it) runItem(+it.getAttribute('data-i')); });
    els.input.addEventListener('input', function () { sel = 0; drawPalette(); });

    if (opts.top) buildTop(opts.top);
    buildDrawer();
    buildSideToggle();
    buildSkip();
    decorate();
    if (window.MutationObserver) { var t = null; new MutationObserver(function () { clearTimeout(t); t = setTimeout(decorate, 60); }).observe(document.body, { childList: true, subtree: true }); }
  }

  /* Titres entre crochets, coins en crochet sur les cartes */
  function decorate() {
    if (document.querySelector('.lo-side .lo-nav')) sideTitles();
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
  /* Commandes locales (palette et barre du haut). Depuis 1.3.0 : plus d'entrées « Ouvrir une autre appli »
     ni « Régler l'adresse » dans les résultats ; on change d'appli avec les touches 1 à 6. Le Journal, les
     Réglages et les notes de version (pied du menu) restent trouvables ici, puisqu'ils ne sont plus dans le menu. */
  function baseCommands() {
    var list = [], seen = {};
    function add(c) { var k = norm(c.label); if (seen[k]) return; seen[k] = 1; list.push(c); }
    (opts.commands || []).forEach(add);
    if (opts.nav) {
      document.querySelectorAll(opts.nav).forEach(function (l) {
        var label = (l.getAttribute('aria-label') || l.textContent || '').replace(/\s+/g, ' ').trim(), href = l.getAttribute('href');
        if (!label || !href) return;
        add({ group: 'Aller à', label: label, icon: 'arrow', run: function () { l.click(); } });
      });
    }
    var fs = foot.spec || {};
    (fs.tools || []).forEach(function (t) { if (t && t !== '-' && t.href && !t.hidden) add({ group: 'Aller à', label: t.label, icon: t.icon, href: t.href }); });
    if (fs.version && fs.version.href) add({ group: 'Aller à', label: 'Notes de version', hint: fs.version.label, icon: 'tag', keywords: 'versions mises à jour changelog', href: fs.version.href });
    add({ group: 'Réglages', label: 'Basculer clair / sombre / automatique', hint: 'mode', icon: 'sun', run: cycleMode });
    return list;
  }
  /* Résultats d'une requête : recherche de l'appli d'abord (ses catégories), puis pages et commandes.
     cb(items) est rappelé une seconde fois quand la recherche asynchrone répond. */
  function collect(q, cb, isLive) {
    var nq = norm(q), words = nq.split(/\s+/).filter(Boolean);
    var local = baseCommands().filter(function (c) {
      if (!words.length) return true;
      var hay = norm(c.label + ' ' + (c.hint || '') + ' ' + (c.group || '') + ' ' + (c.keywords || ''));
      return words.every(function (w) { return hay.indexOf(w) >= 0; });
    });
    cb(local, !!(opts.search && q.length >= 2));
    if (!opts.search || q.length < 2) return;
    Promise.resolve(opts.search(q)).then(function (res) {
      if (!isLive()) return;
      res = (res || []).filter(Boolean);
      res.forEach(function (r) { r.group = r.group || 'Résultats'; });
      // Garder les catégories groupées (une catégorie n'apparaît qu'une fois, dans l'ordre de première apparition).
      var order = [], by = {};
      res.forEach(function (r) { if (!by[r.group]) { by[r.group] = []; order.push(r.group); } by[r.group].push(r); });
      var sorted = []; order.forEach(function (g) { sorted = sorted.concat(by[g]); });
      cb(sorted.concat(local), false);
    }).catch(function () { if (isLive()) cb(local, false); });
  }
  function itemHtml(c, i, selected, pre) {
    var lead = c.thumb ? '<img class="lo-thumb" src="' + esc(c.thumb) + '" alt="" loading="lazy">' : c.logo ? logo(c.logo) : '<span class="lo-ic">' + svgIcon(c.icon) + '</span>';
    return '<li class="lo-it" role="option" id="' + (pre || 'lo-opt-') + i + '" data-i="' + i + '" aria-selected="' + selected + '">' + lead +
      '<span class="lo-l">' + esc(c.label) + (c.sub ? '<small>' + esc(c.sub) + '</small>' : '') + '</span>' + (c.hint ? '<span class="lo-h">' + esc(c.hint) + '</span>' : '') + '</li>';
  }
  function listHtml(items, cur, empty, pre) {
    var g = null, html = '';
    items.forEach(function (c, i) {
      if (c.group !== g) { g = c.group; html += '<li class="lo-grp" role="presentation">' + esc(g) + '</li>'; }
      html += itemHtml(c, i, i === cur, pre);
    });
    if (empty) html += '<li class="lo-empty" role="presentation">' + esc(empty) + '</li>';
    return html;
  }
  function runCmd(c, q) {
    if (!c) return;
    if (c.href) { location.href = c.href; return; }
    if (c.run) c.run(q);
  }
  function openPalette(o) {
    o = o || {};
    if (!started) return;
    closeTop();
    inputMode = o.input || null; sel = 0;
    els.scrim.classList.add('lo-open'); els.input.setAttribute('aria-expanded', 'true');
    els.input.value = o.query || '';
    els.input.placeholder = inputMode ? inputMode.prompt : (opts.placeholder || 'Aller, lancer, chercher…');
    drawPalette(); els.input.focus();
  }
  function closePalette() { els.scrim.classList.remove('lo-open'); els.input.setAttribute('aria-expanded', 'false'); els.input.removeAttribute('aria-activedescendant'); inputMode = null; }
  function drawPalette() {
    var q = els.input.value.trim();
    if (inputMode) {
      shown = q ? [{ label: 'Enregistrer : ' + q, icon: 'link', group: 'Adresse', run: function () { setUrl(inputMode.id, q); var id = inputMode.id; closePalette(); location.href = urlFor(id); } }] : [];
      paint(q ? '' : 'Collez l\'adresse complète de l\'appli, puis Entrée. Elle est mémorisée dans ce navigateur.');
      return;
    }
    var seq = ++searchSeq;
    collect(q, function (items, pending) { shown = items; paint(items.length ? '' : pending ? 'Recherche…' : 'Rien ne correspond.'); },
      function () { return seq === searchSeq && els.scrim.classList.contains('lo-open'); });
  }
  function paint(empty) {
    sel = Math.min(sel, Math.max(0, shown.length - 1));
    els.list.innerHTML = listHtml(shown, sel, empty, 'lo-pal-');
    if (shown.length) els.input.setAttribute('aria-activedescendant', 'lo-pal-' + sel); else els.input.removeAttribute('aria-activedescendant');
    var cur = els.list.querySelector('[aria-selected="true"]'); if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: 'nearest' });
  }
  function runItem(i) {
    var c = shown[i]; if (!c) return;
    if (!c.keepOpen) closePalette();
    runCmd(c, els.input.value.trim());
  }

  /* ── Barre de recherche du haut (1.3.0) ──
     Montée dans l'élément donné par l'appli (option top). Résultats au fil de la frappe, rangés par catégorie,
     mêmes données que la palette. Sur téléphone, le bouton menu ouvre le tiroir .lo-side. */
  function buildTop(target) {
    var el = typeof target === 'string' ? document.querySelector(target) : target;
    if (!el || el.querySelector('.lo-q')) return;
    el.classList.add('lo-top');
    var start = [].filter.call(el.children, function (c) { return c.classList.contains('lo-top-start'); });
    var burger = document.createElement('button');
    burger.type = 'button'; burger.className = 'lo-burger'; burger.setAttribute('aria-label', 'Ouvrir le menu'); burger.setAttribute('aria-expanded', 'false');
    burger.innerHTML = svgIcon('menu');
    burger.addEventListener('click', function () { setDrawer(!root.classList.contains('lo-drawer')); });
    var box = document.createElement('div');
    box.className = 'lo-q'; box.setAttribute('role', 'search');
    box.innerHTML = '<span class="lo-b" aria-hidden="true">[</span><input type="search" autocomplete="off" spellcheck="false" enterkeyhint="search" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-controls="lo-drop" aria-label="Rechercher">' +
      '<span class="lo-b" aria-hidden="true">]</span><kbd class="lo-q-k" aria-hidden="true">/</kbd><ul class="lo-drop" id="lo-drop" role="listbox" hidden></ul>';
    el.insertBefore(box, el.firstChild);
    start.forEach(function (c) { el.insertBefore(c, box); });
    el.insertBefore(burger, el.firstChild);
    if (opts.searchInputId) box.querySelector('input').id = opts.searchInputId;
    top.el = el; top.input = box.querySelector('input'); top.drop = box.querySelector('.lo-drop'); top.box = box;
    var narrow = window.matchMedia ? window.matchMedia('(max-width: 52rem)') : null;
    var setPh = function () { top.input.placeholder = (narrow && narrow.matches && opts.searchPlaceholderShort) || opts.searchPlaceholder || opts.placeholder || 'Rechercher…'; };
    setPh(); if (narrow && narrow.addEventListener) narrow.addEventListener('change', setPh);
    top.input.addEventListener('input', function () { clearTimeout(top.timer); top.timer = setTimeout(drawTop, 120); });
    top.input.addEventListener('focus', function () { if (top.input.value.trim()) drawTop(); });
    top.input.addEventListener('keydown', function (e) {
      var n = top.shown.length;
      if (e.key === 'ArrowDown') { e.preventDefault(); if (n) { top.sel = (top.sel + 1) % n; paintTop(); } }
      else if (e.key === 'ArrowUp') { e.preventDefault(); if (n) { top.sel = (top.sel - 1 + n) % n; paintTop(); } }
      else if (e.key === 'Escape') { if (!top.drop.hidden) { e.preventDefault(); e.stopPropagation(); closeTop(); } else top.input.blur(); }
      else if (e.key === 'Enter') {
        e.preventDefault();
        var q = top.input.value.trim(); if (!q) return;
        clearTimeout(top.timer);
        var c = top.shown[top.sel >= 0 ? top.sel : 0];
        if (opts.submit && (top.sel < 0 || !c)) { closeTop(); opts.submit(q); return; }
        if (c) { closeTop(); top.input.blur(); runCmd(c, q); }
        else if (opts.submit) { closeTop(); opts.submit(q); }
      }
    });
    top.drop.addEventListener('mousedown', function (e) { e.preventDefault(); });
    top.drop.addEventListener('click', function (e) {
      var it = e.target.closest('.lo-it'); if (!it) return;
      var c = top.shown[+it.getAttribute('data-i')], q = top.input.value.trim();
      closeTop(); top.input.blur(); runCmd(c, q);
    });
    document.addEventListener('mousedown', function (e) { if (top.box && !top.box.contains(e.target)) closeTop(); });
  }
  function drawTop() {
    var q = top.input.value.trim();
    if (!q) { closeTop(); return; }
    var seq = ++top.seq;
    collect(q, function (items, pending) {
      // Sans recherche de l'appli, Entrée choisit le premier résultat ; avec opts.submit, rien n'est présélectionné.
      top.shown = items; top.sel = opts.submit ? -1 : (items.length ? 0 : -1);
      top.empty = items.length ? '' : pending ? 'Recherche…' : 'Rien ne correspond.';
      paintTop();
    }, function () { return seq === top.seq && document.activeElement === top.input; });
  }
  function paintTop() {
    top.drop.innerHTML = listHtml(top.shown, top.sel, top.empty);
    top.drop.hidden = false; top.input.setAttribute('aria-expanded', 'true');
    if (top.sel >= 0) top.input.setAttribute('aria-activedescendant', 'lo-opt-' + top.sel); else top.input.removeAttribute('aria-activedescendant');
    var cur = top.drop.querySelector('[aria-selected="true"]'); if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: 'nearest' });
  }
  function closeTop() {
    if (!top.drop) return;
    top.seq++; top.drop.hidden = true; top.shown = []; top.sel = -1;
    top.input.setAttribute('aria-expanded', 'false'); top.input.removeAttribute('aria-activedescendant');
  }
  /* Tiroir du menu sur téléphone : html.lo-drawer ouvre .lo-side ; un lien du menu le referme. */
  function setDrawer(on) {
    var was = root.classList.contains('lo-drawer');
    root.classList.toggle('lo-drawer', !!on);
    var b = top.el && top.el.querySelector('.lo-burger');
    if (b) { b.setAttribute('aria-expanded', on ? 'true' : 'false'); b.setAttribute('aria-label', on ? 'Fermer le menu' : 'Ouvrir le menu'); }
    // 1.7.0 : tiroir ouvert = contenu de la page inerte (ni clic ni Tab derrière), menu ramené en haut, focus dedans.
    var m = mainEl(), side = document.querySelector('.lo-side');
    if (m && side && !side.contains(m)) { if (on) m.setAttribute('inert', ''); else m.removeAttribute('inert'); }
    if (on && !was && side) {
      var sc = side.querySelector('.lo-nav') || side; if (sc.scrollTop) sc.scrollTop = 0; if (side.scrollTop) side.scrollTop = 0;
      var f = side.querySelector('a[href], button:not([disabled])'); if (f) setTimeout(function () { f.focus({ preventScroll: true }); }, 30);
    } else if (!on && was && b) b.focus({ preventScroll: true });
    if (opts.onDrawer) { try { opts.onDrawer(!!on); } catch (e) {} }
  }
  /* Zone principale de la page : option main (sélecteur), sinon main, .lo-page ou [role=main]. */
  function mainEl() {
    return (opts.main && document.querySelector(opts.main)) || document.querySelector('main, .lo-page, [role="main"]');
  }
  /* Lien « Aller au contenu » (1.7.0) : premier arrêt de Tab, saute le menu et la barre du haut. */
  function buildSkip() {
    if (opts.skip === false || document.querySelector('.lo-skip')) return;
    var a = document.createElement('a'); a.className = 'lo-skip'; a.href = '#'; a.textContent = 'Aller au contenu';
    a.addEventListener('click', function (e) {
      e.preventDefault(); var m = mainEl(); if (!m) return;
      if (!m.hasAttribute('tabindex')) m.setAttribute('tabindex', '-1');
      m.focus({ preventScroll: false }); if (m.scrollIntoView) m.scrollIntoView({ block: 'start' });
    });
    document.body.insertBefore(a, document.body.firstChild);
  }
  function buildDrawer() {
    var sc = document.createElement('div'); sc.className = 'lo-side-scrim'; sc.setAttribute('aria-hidden', 'true');
    sc.addEventListener('click', function () { setDrawer(false); });
    document.body.appendChild(sc);
    document.addEventListener('click', function (e) {
      if (!root.classList.contains('lo-drawer')) return;
      var a = e.target.closest('.lo-side a[href]'); if (a) setDrawer(false);
    });
  }

  /* ── Fenêtre de confirmation commune (1.7.0) ──
     LabsOS.confirm({ title, text, ok, cancel, danger, type }) → Promise<boolean>.
     danger : bouton rouge, cadre rouge. type : texte à retaper (nom, identifiant) pour une action qui ne s'annule pas ;
     le bouton reste grisé tant que la saisie ne correspond pas. Échap, clic hors de la fenêtre ou Annuler = false.
     Le focus reste dans la fenêtre (Tab boucle) et revient ensuite sur l'élément d'origine. */
  function confirmBox(o) {
    o = o || {};
    return new Promise(function (resolve) {
      var back = document.activeElement, id = 'lo-cf-' + Date.now().toString(36);
      var sc = document.createElement('div'); sc.className = 'lo-cf-scrim';
      sc.innerHTML = '<div class="lo-cf' + (o.danger ? ' lo-cf-danger' : '') + '" role="alertdialog" aria-modal="true" aria-labelledby="' + id + '-t"' + (o.text ? ' aria-describedby="' + id + '-d"' : '') + '>' +
        '<h2 id="' + id + '-t">' + esc(o.title || 'Confirmer') + '</h2>' +
        (o.text ? '<p id="' + id + '-d">' + esc(o.text) + '</p>' : '') +
        (o.type ? '<label><span>Pour confirmer, tape <code>' + esc(o.type) + '</code></span><input type="text" autocomplete="off" spellcheck="false" autocapitalize="off"></label>' : '') +
        '<div class="lo-cf-row"><button type="button" class="lo-cf-no">' + esc(o.cancel || 'Annuler') + '</button>' +
        '<button type="button" class="lo-cf-ok"' + (o.type ? ' disabled' : '') + '>' + esc(o.ok || 'Confirmer') + '</button></div></div>';
      document.body.appendChild(sc);
      var box = sc.firstChild, ok = box.querySelector('.lo-cf-ok'), no = box.querySelector('.lo-cf-no'), inp = box.querySelector('input');
      var matches = function () { return !o.type || (inp && inp.value.trim() === String(o.type)); };
      var done = function (v) { document.removeEventListener('keydown', onKey, true); sc.remove(); if (back && back.focus) back.focus({ preventScroll: true }); resolve(v); };
      var onKey = function (e) {
        if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); done(false); return; }
        if (e.key === 'Enter' && e.target === inp) { e.preventDefault(); if (matches()) done(true); return; }
        if (e.key === 'Tab') {
          var f = [].filter.call(box.querySelectorAll('input, button'), function (x) { return !x.disabled; });
          var i = f.indexOf(document.activeElement);
          if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
          else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
          else if (i < 0) { e.preventDefault(); f[0].focus(); }
        }
      };
      document.addEventListener('keydown', onKey, true);
      if (inp) inp.addEventListener('input', function () { ok.disabled = !matches(); });
      ok.addEventListener('click', function () { if (matches()) done(true); });
      no.addEventListener('click', function () { done(false); });
      sc.addEventListener('mousedown', function (e) { if (e.target === sc) done(false); });
      setTimeout(function () { (inp || (o.danger ? no : ok)).focus(); }, 0);
    });
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
    if (e.key === 'Escape' && root.classList.contains('lo-drawer')) { setDrawer(false); return; }
    var t = document.activeElement, typing = t && (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable);
    if (typing || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === '/' && top.input && !modalOpen()) { e.preventDefault(); top.input.focus(); top.input.select(); return; }
    if (e.key === '[' && opts.sideToggle !== false && !modalOpen() && document.querySelector('.lo-side-toggle')) { e.preventDefault(); setSide(!sideMini()); return; }
    if (opts.appKeys === false) return;
    if (/^[1-9]$/.test(e.key) && +e.key <= APPS.length && !modalOpen()) { var a = APPS[+e.key - 1]; if (a.id !== opts.app) { e.preventDefault(); goApp(a.id); } }
  }, true);

  /* ── API publique ── */
  window.LabsOS = {
    version: KIT_VERSION,
    apps: APPS.map(function (a) { return { id: a.id, name: a.name, color: a.color }; }),
    init: function (o) {
      opts = o || {};
      if (opts.app === 'asset' || opts.app === 'cover') opts.app = 'plex';   // Cover Labs (ex-Plex Labs, ex-Asset Labs) : identifiant 'plex' jusqu'au déploiement du renommage
      if (opts.app) root.setAttribute('data-lo-app', opts.app);
      applyMode();
      // Barre du haut montée tout de suite si son conteneur existe déjà : les scripts « defer » de l'appli la trouvent.
      if (opts.top && typeof opts.top === 'string' && document.querySelector(opts.top)) buildTop(opts.top);
      var go = function () { if (started) return; started = true; build(); };
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
    },
    open: function (query) { openPalette({ query: query }); },
    close: closePalette,
    refresh: function () { refreshStatus(); decorate(); },
    update: function (o) { Object.keys(o || {}).forEach(function (k) { opts[k] = o[k]; }); if (started) { renderStatus(); decorate(); } },
    setStatus: function (items) { statusItems = items || []; renderStatus(); },
    mode: function () { return root.getAttribute('data-lo-mode'); },
    setMode: function (m) { save(MODE_KEY, m); applyMode(); renderStatus(); renderFoot(); },
    cycleMode: cycleMode,
    foot: setFoot,
    top: function (target) { if (started) buildTop(target); else opts.top = target; },
    focusSearch: function (q) { if (!top.input) return; if (q != null) top.input.value = q; top.input.focus(); if (q) drawTop(); },
    drawer: setDrawer,
    side: function (mini) { if (mini == null) return sideMini(); setSide(mini); },
    confirm: confirmBox,
    url: urlFor
  };
})();
