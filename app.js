/* =============================================================================
   RCAI — application logic (routing, rendering, filtering, search)
   You should not need to edit this file to update venues — edit data.js.
   ============================================================================= */
(function () {
  "use strict";
  const { CATEGORIES, CONFERENCES, JOURNALS, SPECIAL_CALLS } = window.RCAI_DATA;
  const PUBLICATIONS = window.RCAI_DATA.PUBLICATIONS || [];
  const BLOG_POSTS = window.RCAI_DATA.BLOG_POSTS || [];
  const TEMPLATES = window.RCAI_DATA.TEMPLATES || [];
  const FACULTY = window.RCAI_DATA.FACULTY || [];

  // tag each record with its type so one renderer can handle all
  CONFERENCES.forEach(c => c._type = "conference");
  JOURNALS.forEach(j => j._type = "journal");
  SPECIAL_CALLS.forEach(s => s._type = "call");

  const catById = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));

  /* --------- line-art icon library (stroke icons, education/tech) --------- */
  const ICON_PATHS = {
    chip: '<rect x="7" y="7" width="10" height="10" rx="2"/><circle cx="12" cy="12" r="1.7"/><path d="M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3"/>',
    layers: '<path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="M3 12l9 5 9-5"/><path d="M3 16l9 5 9-5"/>',
    chat: '<path d="M4 5h16v10H9l-4 4V5Z"/><path d="M8 9h8M8 12h5"/>',
    eye: '<path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="2.6"/>',
    spark: '<path d="M12 3l1.7 4.9L18.5 9l-4.8 1.6L12 15l-1.7-4.4L5.5 9l4.8-1.1L12 3Z"/><path d="M18.5 14l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z"/>',
    database: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>',
    bars: '<path d="M3 3v18h18"/><rect x="7" y="11" width="3" height="7" rx="1"/><rect x="12" y="7" width="3" height="11" rx="1"/><rect x="17" y="13" width="3" height="5" rx="1"/>',
    trend: '<path d="M3 3v18h18"/><path d="M6 15l3.5-3.5 3 3L18 7"/><path d="M14.5 7H18v3.5"/>',
    shield: '<path d="M12 3l7 3v5c0 4.4-3 8.1-7 10-4-1.9-7-5.6-7-10V6l7-3Z"/><path d="M9 12l2 2 4-4"/>',
    atom: '<circle cx="12" cy="12" r="1.4"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',
    target: '<circle cx="12" cy="12" r="8.2"/><circle cx="12" cy="12" r="4.6"/><circle cx="12" cy="12" r="1.2"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0"/><path d="M12 17v4M9 21h6"/>',
    health: '<path d="M12 20S4 15 4 9.2A4.2 4.2 0 0 1 12 6.5 4.2 4.2 0 0 1 20 9.2C20 15 12 20 12 20Z"/><path d="M7.5 11.6h2l1-1.7 1.5 3.2 1-1.5h2.5"/>',
    robot: '<rect x="5" y="8" width="14" height="11" rx="2.5"/><path d="M12 8V4.5"/><circle cx="12" cy="3.4" r="1.2"/><circle cx="9.6" cy="13" r="1.2"/><circle cx="14.4" cy="13" r="1.2"/><path d="M9.5 16.5h5M2.5 12v3M21.5 12v3"/>',
    book: '<path d="M4 5.5A2 2 0 0 1 6 4h13v14H6a2 2 0 0 0-2 2V5.5Z"/><path d="M4 18.5A2 2 0 0 0 6 20h13"/>',
    pen: '<path d="M4 20h4L18.5 9.5a2 2 0 0 0 0-3l-1-1a2 2 0 0 0-3 0L4 16v4Z"/><path d="M13.5 7.5l3 3"/>'
  };
  function catIcon(key) {
    const p = ICON_PATHS[key] || ICON_PATHS.book;
    return `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  }
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, m => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));

  /* ---------------------------- deadline helpers --------------------------- */
  const MS_DAY = 86400000;
  function daysUntil(iso) {
    if (!iso) return null;
    const d = new Date(iso + "T23:59:59");
    const now = new Date();
    return Math.ceil((d - now) / MS_DAY);
  }
  function fmtDate(iso) {
    if (!iso) return "Rolling";
    if (/^\d{4}$/.test(iso)) return iso;              // year-only (publications)
    return new Date(iso + "T00:00:00").toLocaleDateString("en-GB",
      { day: "numeric", month: "short", year: "numeric" });
  }
  function deadlineState(iso) {
    if (!iso) return { cls: "badge-rolling", label: "Rolling submission", days: null, cd: "" };
    const d = daysUntil(iso);
    if (d < 0) return { cls: "badge-closed", label: "Closed", days: d, cd: "Deadline passed" };
    if (d <= 30) return { cls: "badge-soon", label: "Closing soon", days: d, cd: d + " day" + (d === 1 ? "" : "s") + " left" };
    return { cls: "badge-open", label: "Open", days: d, cd: d + " days left" };
  }

  /* ------------------------------- templates ------------------------------ */
  function catTags(ids, limit = 3) {
    const shown = ids.slice(0, limit).map(id =>
      `<span class="chip">${esc(catById[id] ? catById[id].name : id)}</span>`).join("");
    const extra = ids.length > limit ? `<span class="chip">+${ids.length - limit}</span>` : "";
    return shown + extra;
  }
  function scopeChip(scope) {
    return scope === "national"
      ? `<span class="chip chip-scope-natl">◆ National</span>`
      : `<span class="chip chip-scope-intl">◇ International</span>`;
  }

  function venueCard(it) {
    const st = deadlineState(it.deadline);
    const isJournal = it._type === "journal";
    const rows = [];
    if (isJournal) {
      rows.push(["Publisher", it.publisher]);
      rows.push(["Country", it.country]);
      rows.push(["Indexing", it.indexing]);
      if (it.impact) rows.push(["Impact factor", it.impact]);
      rows.push(["Venue", it.venue]);
    } else {
      rows.push(["Location", [it.city, it.country].filter(Boolean).join(", ")]);
      rows.push(["Host", it.host]);
      rows.push(["Publication", it.venue]);
      if (it.dates) rows.push(["Event", it.dates]);
    }
    const metaRows = rows.filter(r => r[1]).map(r =>
      `<div class="row"><span class="k">${esc(r[0])}</span><span class="v">${esc(r[1])}</span></div>`).join("");

    const rank = it.rank ? `<span class="chip chip-rank">${esc(it.rank)}</span>` : "";
    const foot = (it._type === "call" && !it.deadline)
      ? `<div class="deadline-box"><span class="dl-date">See page</span>
           <span class="dl-label">Deadlines</span></div>
         <span class="badge badge-open">Open call</span>`
      : isJournal && !it.deadline
      ? `<div class="deadline-box"><span class="dl-date">Accepts year-round</span>
           <span class="dl-label">Submission</span></div>
         <span class="badge ${st.cls}">${st.label}</span>`
      : `<div class="deadline-box"><span class="dl-date">${fmtDate(it.deadline)}</span>
           <span class="dl-label">Paper deadline</span></div>
         <div style="text-align:right"><span class="badge ${st.cls}">${st.label}</span>
           <div class="countdown" style="color:var(--${st.cls === 'badge-closed' ? 'closed' : st.cls === 'badge-soon' ? 'soon' : 'open'})">${esc(st.cd)}</div></div>`;

    return `<article class="vcard" data-id="${esc(it.id)}" data-type="${esc(it._type)}" tabindex="0" role="button">
      <div class="vcard-top">
        <div><div class="vcard-acr">${esc(it.acronym || "")}</div>
          <h3>${esc(it.name)}</h3></div>
      </div>
      <div class="vcard-tags">${scopeChip(it.scope)}${rank}</div>
      <div class="meta">${metaRows}</div>
      <div class="vcard-tags">${catTags(it.categories)}</div>
      <div class="vcard-foot">${foot}</div>
    </article>`;
  }

  /* --------------------------------- modal -------------------------------- */
  function openModal(it) {
    const st = deadlineState(it.deadline);
    const isJournal = it._type === "journal";
    const fields = [];
    if (isJournal) {
      fields.push(["Publisher", it.publisher], ["Publisher country", it.country],
        ["Indexing / Quartile", it.indexing], ["Impact factor", it.impact], ["Publication venue", it.venue],
        ["Scope", it.scope === "national" ? "National" : "International"],
        ["Submission", it.deadline ? "Special issue — " + fmtDate(it.deadline) : "Rolling (year-round)"]);
    } else {
      fields.push(["Country", it.country], ["City", it.city], ["Host / Organiser", it.host],
        ["Publication venue", it.venue], ["Event dates", it.dates],
        ["Ranking", it.rank], ["Scope", it.scope === "national" ? "National" : "International"]);
      if (it.abstractDeadline) fields.push(["Abstract deadline", fmtDate(it.abstractDeadline)]);
      fields.push(["Paper deadline", fmtDate(it.deadline)]);
    }
    const grid = fields.filter(f => f[1]).map(f =>
      `<div class="d"><span class="k">${esc(f[0])}</span><span class="v">${esc(f[1])}</span></div>`).join("");
    const tags = it.categories.map(id =>
      `<span class="chip" style="background:rgba(255,255,255,.12);color:#cfe8f7;border-color:rgba(255,255,255,.2)">${esc(catById[id] ? catById[id].name : id)}</span>`).join("");

    $("#modal .modal-hd .m-acr").textContent = it.acronym || (isJournal ? "Journal" : "Conference");
    $("#modal .modal-hd h2").textContent = it.name;
    $("#modal .modal-hd .m-tags").innerHTML =
      `<span class="badge ${st.cls}">${st.label}${st.days != null && st.days >= 0 ? " · " + st.cd : ""}</span>` + tags;
    $("#modal .modal-body").innerHTML =
      `<div class="detail-grid">${grid}</div>` +
      (it.aims ? `<div class="pub-abstract-full"><span class="k mono" style="display:block;font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;color:var(--faint);margin-bottom:6px">Aims &amp; Scope</span>${esc(it.aims)}</div>` : "") +
      (it.notes ? `<div class="detail-note">${esc(it.notes)}</div>` : "") +
      `<a class="btn btn-primary" href="${esc(it.link)}" target="_blank" rel="noopener">
         Visit official page ↗</a>`;
    $("#modal-overlay").classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    $("#modal-overlay").classList.remove("open");
    document.body.style.overflow = "";
  }

  /* ------------------------------ publications ---------------------------- */
  function pubTypeChip(t) {
    return t === "journal"
      ? `<span class="chip chip-scope-intl">Journal Article</span>`
      : `<span class="chip chip-scope-natl">Conference Paper</span>`;
  }
  function pubCard(p) {
    return `<article class="pubcard" data-id="${esc(p.id)}" tabindex="0" role="button">
      <div class="pub-main">
        <div class="pub-tags">${pubTypeChip(p.type)}<span class="chip">${esc(p.venue)}</span></div>
        <h3>${esc(p.title)}</h3>
        ${p.authors ? `<div class="pub-authors">${esc(p.authors)}</div>` : ""}
        <p class="pub-abstract">${esc(p.abstract)}</p>
      </div>
      <div class="pub-side">
        <div class="pub-date"><span class="mono">${fmtDate(p.date)}</span>
          <span class="dl-label">Published</span></div>
        <a class="btn btn-outline btn-sm" href="${esc(p.link)}" target="_blank" rel="noopener"
           onclick="event.stopPropagation()">Read paper ↗</a>
      </div>
    </article>`;
  }
  function openPubModal(p) {
    $("#modal .modal-hd .m-acr").textContent =
      (p.type === "journal" ? "Journal Article" : "Conference Paper") + " · " + p.venue;
    $("#modal .modal-hd h2").textContent = p.title;
    $("#modal .modal-hd .m-tags").innerHTML = pubTypeChip(p.type) +
      `<span class="chip" style="background:rgba(255,255,255,.12);color:#cfe8f7;border-color:rgba(255,255,255,.2)">${esc(fmtDate(p.date))}</span>`;
    const fields = [["Venue", p.venue], ["Type", p.type === "journal" ? "Journal Article" : "Conference Paper"],
      ["Published", fmtDate(p.date)], ["Authors", p.authors]];
    const grid = fields.filter(f => f[1]).map(f =>
      `<div class="d"><span class="k">${esc(f[0])}</span><span class="v">${esc(f[1])}</span></div>`).join("");
    $("#modal .modal-body").innerHTML =
      `<div class="detail-grid">${grid}</div>` +
      `<div class="pub-abstract-full"><span class="k mono" style="display:block;font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;color:var(--faint);margin-bottom:6px">Abstract</span>${esc(p.abstract)}</div>` +
      `<a class="btn btn-primary" href="${esc(p.link)}" target="_blank" rel="noopener" style="margin-top:20px">View original publication ↗</a>`;
    $("#modal-overlay").classList.add("open");
    document.body.style.overflow = "hidden";
  }

  /* -------------------------- filtering + sorting ------------------------- */
  function applyFilters(list, f) {
    let out = list.slice();
    if (f.q) {
      const q = f.q.toLowerCase();
      out = out.filter(it => (it.name + " " + (it.acronym || "") + " " + (it.country || "") +
        " " + (it.host || "") + " " + (it.publisher || "") + " " +
        it.categories.map(id => catById[id] ? catById[id].name : "").join(" ")).toLowerCase().includes(q));
    }
    if (f.scope && f.scope !== "all") out = out.filter(it => it.scope === f.scope);
    if (f.cat && f.cat !== "all") out = out.filter(it => it.categories.includes(f.cat));
    if (f.quartile && f.quartile !== "all") out = out.filter(it => (it.rank || "").indexOf(f.quartile) !== -1);
    if (f.status && f.status !== "all") {
      out = out.filter(it => {
        const s = deadlineState(it.deadline);
        if (f.status === "open") return s.cls === "badge-open" || s.cls === "badge-rolling";
        if (f.status === "soon") return s.cls === "badge-soon";
        if (f.status === "closed") return s.cls === "badge-closed";
        return true;
      });
    }
    const sort = f.sort || "deadline";
    out.sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      const da = daysUntil(a.deadline), db = daysUntil(b.deadline);
      // rolling (null) after dated; past deadlines to the bottom
      const rank = d => d == null ? 100000 : (d < 0 ? 50000 - d : d);
      return rank(da) - rank(db);
    });
    return out;
  }

  /* -------------------------- toolbar (reusable) -------------------------- */
  function toolbarHTML(opts) {
    const cats = CATEGORIES.map(c => `<option value="${c.id}">${esc(c.name)}</option>`).join("");
    return `<div class="toolbar">
      <div class="search-box"><span class="s-ico">⌕</span>
        <input type="search" placeholder="Search ${opts.noun} by name, country, host…" data-role="q"></div>
      ${opts.showScope !== false ? `<select class="select" data-role="scope">
        <option value="all">All regions</option><option value="international">International</option>
        <option value="national">National</option></select>` : ""}
      <select class="select" data-role="cat"><option value="all">All sub-fields</option>${cats}</select>
      ${opts.showQuartile ? `<select class="select" data-role="quartile"><option value="all">All quartiles</option>
        <option value="Q1">Q1</option><option value="Q2">Q2</option><option value="Q3">Q3</option></select>` : ""}
      ${opts.showStatus === false ? "" : `<select class="select" data-role="status"><option value="all">Any status</option>
        <option value="open">Open</option><option value="soon">Closing soon</option>
        <option value="closed">Closed</option></select>`}
      <select class="select" data-role="sort"><option value="deadline">Sort: deadline</option>
        <option value="name">Sort: name</option></select>
    </div>
    <div class="result-count" data-role="count"></div>
    <div class="grid-venues" data-role="grid"></div>
    <div class="pager" data-role="pager"></div>`;
  }

  // shared pagination control
  function pagerHTML(cur, pages) {
    if (pages <= 1) return "";
    const btn = (p, label, dis, act) =>
      `<button class="pg-btn${act ? " active" : ""}" ${dis ? "disabled" : ""} data-pg="${p}">${label}</button>`;
    let out = btn(cur - 1, "‹ Prev", cur === 1);
    const win = []; const add = p => { if (p >= 1 && p <= pages && !win.includes(p)) win.push(p); };
    add(1); add(2);
    for (let p = cur - 1; p <= cur + 1; p++) add(p);
    add(pages - 1); add(pages);
    win.sort((a, b) => a - b);
    let prev = 0;
    win.forEach(p => { if (p - prev > 1) out += `<span class="pg-gap">…</span>`; out += btn(p, p, false, p === cur); prev = p; });
    out += btn(cur + 1, "Next ›", cur === pages);
    return out;
  }

  const PER_PAGE = 12; // cards per page on the grid listings

  function wireToolbar(root, source, noun) {
    const f = { q: "", scope: "all", cat: "all", status: "all", quartile: "all", sort: "deadline", page: 1 };
    const grid = $('[data-role="grid"]', root);
    const count = $('[data-role="count"]', root);
    const pager = $('[data-role="pager"]', root);
    function run() {
      const res = applyFilters(source(), f);
      const pages = Math.max(1, Math.ceil(res.length / PER_PAGE));
      if (f.page > pages) f.page = pages;
      const start = (f.page - 1) * PER_PAGE, slice = res.slice(start, start + PER_PAGE);
      count.textContent = res.length + " " + noun + (res.length === 1 ? "" : "s")
        + (res.length > PER_PAGE ? " · showing " + (start + 1) + "–" + (start + slice.length) : "");
      grid.innerHTML = slice.length ? slice.map(venueCard).join("")
        : `<div class="empty" style="grid-column:1/-1"><div class="big">🔍</div>
           <p>No ${noun}s match these filters. Try clearing the search or region.</p></div>`;
      if (pager) pager.innerHTML = pagerHTML(f.page, pages);
    }
    $('[data-role="q"]', root).addEventListener("input", e => { f.q = e.target.value; f.page = 1; run(); });
    ["scope", "cat", "status", "quartile", "sort"].forEach(k => {
      const el = $(`[data-role="${k}"]`, root);
      if (el) el.addEventListener("change", e => { f[k] = e.target.value; f.page = 1; run(); });
    });
    if (pager) pager.addEventListener("click", e => {
      const b = e.target.closest(".pg-btn"); if (!b || b.disabled) return;
      f.page = parseInt(b.dataset.pg, 10); run();
      root.scrollIntoView({ block: "start", behavior: "instant" in window ? "instant" : "auto" });
    });
    run();
    return { setCat: c => { const el = $('[data-role="cat"]', root); if (el) { el.value = c; f.cat = c; f.page = 1; run(); } } };
  }

  /* ------------------------------- renderers ------------------------------ */
  function potmMarkup(p) {
    return `<span class="potm-badge">★ Paper of the Month</span>
      <div class="potm-tags">
        <span class="chip potm-chip">${p.type === "journal" ? "Journal Article" : "Conference Paper"}</span>
        <span class="chip potm-chip">${esc(p.venue)}</span></div>
      <h3>${esc(p.title)}</h3>
      ${p.authors ? `<div class="potm-authors">${esc(p.authors)}</div>` : ""}
      <p class="potm-abstract">${esc(p.abstract)}</p>
      <div class="potm-foot">
        <span class="potm-date mono">${fmtDate(p.date)}</span>
        <a class="btn btn-sm potm-btn" href="${esc(p.link)}" target="_blank" rel="noopener"
           onclick="event.stopPropagation()">Read paper ↗</a>
      </div>`;
  }

  function renderHome() {
    // paper of the month (flagged potm:true, else newest)
    const potmEl = $("#home-potm");
    if (potmEl && PUBLICATIONS.length) {
      const potm = PUBLICATIONS.find(p => p.potm) ||
        PUBLICATIONS.slice().sort((a, b) => a.date > b.date ? -1 : 1)[0];
      potmEl.dataset.potmId = potm.id;
      potmEl.setAttribute("role", "button");
      potmEl.setAttribute("tabindex", "0");
      potmEl.innerHTML = potmMarkup(potm);
    }

    // upcoming conferences: future/soon, soonest first, top 6
    const upc = applyFilters(CONFERENCES, { status: "open", sort: "deadline" })
      .concat(applyFilters(CONFERENCES, { status: "soon", sort: "deadline" }))
      .sort((a, b) => daysUntil(a.deadline) - daysUntil(b.deadline)).slice(0, 6);
    $("#home-conferences").innerHTML = upc.map(venueCard).join("");

    // upcoming CFP: conferences + special calls with future deadline
    const calls = CONFERENCES.concat(SPECIAL_CALLS)
      .filter(it => it.deadline && daysUntil(it.deadline) >= 0)
      .sort((a, b) => daysUntil(a.deadline) - daysUntil(b.deadline)).slice(0, 6);
    $("#home-cfp").innerHTML = calls.map(venueCard).join("");

    // latest publications teaser (newest 3)
    const homePubEl = $("#home-publications");
    if (homePubEl) {
      const latest = PUBLICATIONS.slice().sort((a, b) => a.date > b.date ? -1 : 1).slice(0, 3);
      homePubEl.innerHTML = latest.map(pubCard).join("");
    }

    // category grid
    $("#home-categories").innerHTML = CATEGORIES.map(c => {
      const n = CONFERENCES.concat(JOURNALS).filter(it => it.categories.includes(c.id)).length;
      return `<a class="cat-card" href="#/category/${c.id}">
        <div class="cat-ico">${catIcon(c.icon)}</div><h3>${esc(c.name)}</h3>
        <p>${esc(c.blurb)}</p>
        <div class="cat-count">${n} venue${n === 1 ? "" : "s"} →</div></a>`;
    }).join("");
  }

  function renderConferences() {
    const root = $("#view-conferences .list-mount");
    root.innerHTML = toolbarHTML({ noun: "conference" });
    wireToolbar(root, () => CONFERENCES, "conference");
  }
  function renderCFP() {
    const root = $("#view-cfp .list-mount");
    root.innerHTML = `<div class="source-panel">
      <div class="source-panel-txt"><b>Browse the full live listings</b>
        <span>New calls are posted continually — these open the publishers' complete, up-to-date lists.</span></div>
      <div class="source-panel-btns">
        <a class="btn btn-outline btn-sm" href="https://www.sciencedirect.com/browse/calls-for-papers?subject=computer-science" target="_blank" rel="noopener">ScienceDirect CS calls ↗</a>
        <a class="btn btn-outline btn-sm" href="https://link.springer.com/search?query=&content-type=call+for+papers" target="_blank" rel="noopener">Springer calls ↗</a>
        <a class="btn btn-outline btn-sm" href="https://www.computer.org/publications/author-resources/calls-for-papers" target="_blank" rel="noopener">IEEE CS calls ↗</a>
      </div></div>` + toolbarHTML({ noun: "call" });
    const source = () => CONFERENCES.concat(SPECIAL_CALLS);
    wireToolbar(root, source, "call");
  }
  function renderPublications() {
    const root = $("#view-publications .list-mount");
    const years = Array.from(new Set(PUBLICATIONS.map(p => (p.date || "").slice(0, 4)).filter(Boolean)))
      .sort().reverse().map(y => `<option value="${y}">${y}</option>`).join("");
    root.innerHTML = `<div class="toolbar">
      <div class="search-box"><span class="s-ico">⌕</span>
        <input type="search" placeholder="Search by title, author or venue…" data-role="q"></div>
      <select class="select" data-role="type"><option value="all">All types</option>
        <option value="journal">Journal articles</option><option value="conference">Conference papers</option></select>
      <select class="select" data-role="year"><option value="all">All years</option>${years}</select>
      <select class="select" data-role="sort"><option value="new">Sort: newest</option>
        <option value="old">Sort: oldest</option><option value="title">Sort: title</option></select>
    </div>
    <div class="result-count" data-role="count"></div>
    <div class="pub-list" data-role="grid"></div>
    <div class="pager" data-role="pager"></div>`;

    const f = { q: "", type: "all", year: "all", sort: "new", page: 1 };
    const grid = $('[data-role="grid"]', root), count = $('[data-role="count"]', root),
      pager = $('[data-role="pager"]', root);
    function run() {
      let res = PUBLICATIONS.slice();
      if (f.q) { const q = f.q.toLowerCase();
        res = res.filter(p => (p.title + " " + (p.authors || "") + " " + p.venue).toLowerCase().includes(q)); }
      if (f.type !== "all") res = res.filter(p => p.type === f.type);
      if (f.year !== "all") res = res.filter(p => (p.date || "").slice(0, 4) === f.year);
      res.sort((a, b) => f.sort === "title" ? a.title.localeCompare(b.title)
        : f.sort === "old" ? (a.date < b.date ? -1 : 1) : (a.date > b.date ? -1 : 1));
      const pages = Math.max(1, Math.ceil(res.length / PER_PAGE));
      if (f.page > pages) f.page = pages;
      const start = (f.page - 1) * PER_PAGE, slice = res.slice(start, start + PER_PAGE);
      count.textContent = res.length + " publication" + (res.length === 1 ? "" : "s")
        + (res.length > PER_PAGE ? " · showing " + (start + 1) + "–" + (start + slice.length) : "");
      grid.innerHTML = slice.length ? slice.map(pubCard).join("")
        : `<div class="empty"><div class="big">🔍</div><p>No publications match these filters.</p></div>`;
      pager.innerHTML = pagerHTML(f.page, pages);
    }
    $('[data-role="q"]', root).addEventListener("input", e => { f.q = e.target.value; f.page = 1; run(); });
    ["type", "year", "sort"].forEach(k => $(`[data-role="${k}"]`, root)
      .addEventListener("change", e => { f[k] = e.target.value; f.page = 1; run(); }));
    pager.addEventListener("click", e => {
      const b = e.target.closest(".pg-btn"); if (!b || b.disabled) return;
      f.page = parseInt(b.dataset.pg, 10); run();
      root.scrollIntoView({ block: "start", behavior: "instant" in window ? "instant" : "auto" });
    });
    run();
  }

  /* --------------------------------- blog -------------------------------- */
  const BLOG_GRADS = [
    ["#0b3a63", "#0091d5"], ["#0a2f56", "#1f9bb8"], ["#123a6b", "#5b8def"],
    ["#0e3b57", "#12b0a0"], ["#1a2c62", "#7a5cf0"], ["#0b4a5e", "#0bc0c8"],
    ["#123152", "#3f7fd6"]
  ];
  function blogIndex(id) { return Math.max(0, BLOG_POSTS.findIndex(p => p.id === id)); }
  function readTime(post) {
    const words = (post.body || []).join(" ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  }
  function coverArt(post, kind) {
    const i = blogIndex(post.id);
    const g = BLOG_GRADS[i % BLOG_GRADS.length];
    if (post.image) {
      return `<div class="blog-cover ${kind}" style="background-image:linear-gradient(135deg,${g[0]}cc,${g[1]}cc),url('${esc(post.image)}');background-size:cover;background-position:center">
        <span class="cover-cat">${esc(post.category)}</span></div>`;
    }
    return `<div class="blog-cover ${kind}" style="background-image:radial-gradient(120% 120% at 100% 0%,${g[1]},${g[0]})">
      <span class="cover-ico">${catIcon(post.icon || "book")}</span>
      <span class="cover-cat">${esc(post.category)}</span></div>`;
  }
  function blogBody(lines) {
    let html = "", inList = false;
    (lines || []).forEach(line => {
      if (line.startsWith("## ")) {
        if (inList) { html += "</ul>"; inList = false; }
        html += `<h2>${esc(line.slice(3))}</h2>`;
      } else if (line.startsWith("- ")) {
        if (!inList) { html += "<ul>"; inList = true; }
        html += `<li>${esc(line.slice(2))}</li>`;
      } else {
        if (inList) { html += "</ul>"; inList = false; }
        html += `<p>${esc(line)}</p>`;
      }
    });
    if (inList) html += "</ul>";
    return html;
  }
  function blogListCard(post) {
    return `<a class="blog-card" href="#/blog/${esc(post.id)}">
      ${coverArt(post, "thumb")}
      <div class="blog-card-body">
        <div class="blog-meta"><span class="mono">${fmtDate(post.date)}</span>
          ${post.author ? `<span>· ${esc(post.author)}</span>` : ""}
          <span>· ${readTime(post)} min read</span></div>
        <h3>${esc(post.title)}</h3>
        <p class="blog-excerpt">${esc(post.excerpt)}</p>
        <span class="blog-more">Read Details →</span>
      </div></a>`;
  }
  function renderBlog() {
    const root = $("#view-blog .list-mount");
    const cats = Array.from(new Set(BLOG_POSTS.map(p => p.category))).sort()
      .map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join("");
    root.innerHTML = `<div class="toolbar">
      <div class="search-box"><span class="s-ico">⌕</span>
        <input type="search" placeholder="Search articles…" data-role="q"></div>
      <select class="select" data-role="cat"><option value="all">All topics</option>${cats}</select>
      <select class="select" data-role="sort"><option value="new">Sort: newest</option>
        <option value="old">Sort: oldest</option></select>
    </div>
    <div class="result-count" data-role="count"></div>
    <div class="blog-list" data-role="grid"></div>`;
    const f = { q: "", cat: "all", sort: "new" };
    const grid = $('[data-role="grid"]', root), count = $('[data-role="count"]', root);
    function run() {
      let res = BLOG_POSTS.slice();
      if (f.q) { const q = f.q.toLowerCase();
        res = res.filter(p => (p.title + " " + p.excerpt + " " + p.category).toLowerCase().includes(q)); }
      if (f.cat !== "all") res = res.filter(p => p.category === f.cat);
      res.sort((a, b) => f.sort === "old" ? (a.date < b.date ? -1 : 1) : (a.date > b.date ? -1 : 1));
      count.textContent = res.length + " article" + (res.length === 1 ? "" : "s");
      grid.innerHTML = res.length ? res.map(blogListCard).join("")
        : `<div class="empty"><div class="big">🔍</div><p>No articles match your search.</p></div>`;
    }
    $('[data-role="q"]', root).addEventListener("input", e => { f.q = e.target.value; run(); });
    ["cat", "sort"].forEach(k => $(`[data-role="${k}"]`, root)
      .addEventListener("change", e => { f[k] = e.target.value; run(); }));
    run();
  }
  function renderBlogPost(id) {
    const post = BLOG_POSTS.find(p => p.id === id);
    const v = $("#view-blogpost");
    if (!post) { v.innerHTML = `<div class="wrap section"><div class="empty"><div class="big">📄</div>
      <p>Article not found.</p><a class="btn btn-outline" href="#/blog">← Back to blog</a></div></div>`; return; }
    const others = BLOG_POSTS.filter(p => p.id !== id).slice(0, 3);
    v.innerHTML = `
      <div class="post-hero">${coverArt(post, "hero")}</div>
      <article class="wrap post-wrap">
        <div class="breadcrumb"><a href="#/">Home</a> / <a href="#/blog">Blog</a> / ${esc(post.category)}</div>
        <span class="chip chip-scope-intl" style="margin-bottom:4px">${esc(post.category)}</span>
        <h1 class="post-title">${esc(post.title)}</h1>
        <div class="post-meta"><span class="mono">${fmtDate(post.date)}</span>
          ${post.author ? `<span>· ${esc(post.author)}</span>` : ""}
          <span>· ${readTime(post)} min read</span></div>
        <div class="post-body">${blogBody(post.body)}</div>
        <div class="post-foot">
          <a class="btn btn-outline" href="#/blog">← Back to all articles</a>
        </div>
      </article>
      ${others.length ? `<div class="wrap"><div class="section-head" style="margin-top:20px"><h2>More articles</h2></div>
        <div class="blog-list">${others.map(blogListCard).join("")}</div></div>` : ""}
      <div style="height:40px"></div>`;
  }

  /* ------------------------------- faculty ------------------------------- */
  function initials(name) {
    return name.replace(/\(example\)/i, "").replace(/^Dr\.?\s*/i, "").trim()
      .split(/\s+/).slice(0, 2).map(w => w[0] || "").join("").toUpperCase();
  }
  function facultyCard(m) {
    const chips = (m.cats || []).map(id =>
      `<span class="chip">${esc(catById[id] ? catById[id].name : id)}</span>`).join("");
    const pubs = (m.publications || []).map(t => `<li>${esc(t)}</li>`).join("");
    const profile = m.link ||
      ("https://scholar.google.com/scholar?q=" + encodeURIComponent(m.name.replace(/\(example\)/i, "").trim()));
    return `<article class="fac-card">
      <div class="fac-main">
        <div class="fac-head">
          <span class="fac-avatar">${esc(initials(m.name))}</span>
          <div class="fac-id">
            <h3>${esc(m.name)}</h3>
            <div class="fac-pos">${esc(m.position || "")}</div>
            <div class="fac-aff">${esc(m.affiliation || "")}</div>
          </div>
        </div>
        ${m.areas ? `<div class="fac-block"><span class="k">Research areas</span>
          <p class="fac-areas">${esc(m.areas)}</p>
          ${chips ? `<div class="fac-chips">${chips}</div>` : ""}</div>` : ""}
        ${pubs ? `<div class="fac-block"><span class="k">Recent publications</span>
          <ul class="fac-pubs">${pubs}</ul></div>` : ""}
      </div>
      <div class="fac-side">
        <a class="btn btn-primary btn-sm" href="${esc(profile)}" target="_blank" rel="noopener">View profile ↗</a>
      </div>
    </article>`;
  }
  function renderFaculty() {
    const root = $("#view-faculty .list-mount");
    const subs = CATEGORIES.map(c => `<option value="${c.id}">${esc(c.name)}</option>`).join("");
    root.innerHTML = `<div class="toolbar">
      <div class="search-box"><span class="s-ico">⌕</span>
        <input type="search" placeholder="Search by name, position or research area…" data-role="q"></div>
      <select class="select" data-role="cat"><option value="all">All sub-fields</option>${subs}</select>
    </div>
    <div class="result-count" data-role="count"></div>
    <div class="fac-list" data-role="grid"></div>`;
    const f = { q: "", cat: "all" };
    const grid = $('[data-role="grid"]', root), count = $('[data-role="count"]', root);
    function run() {
      let res = FACULTY.slice();
      if (f.q) { const q = f.q.toLowerCase();
        res = res.filter(m => (m.name + " " + (m.position || "") + " " + (m.areas || "") + " " +
          (m.cats || []).map(id => catById[id] ? catById[id].name : "").join(" ")).toLowerCase().includes(q)); }
      if (f.cat !== "all") res = res.filter(m => (m.cats || []).includes(f.cat));
      count.textContent = res.length + " faculty member" + (res.length === 1 ? "" : "s");
      grid.innerHTML = res.length ? res.map(facultyCard).join("")
        : `<div class="empty" style="grid-column:1/-1"><div class="big">🔍</div><p>No faculty match these filters.</p></div>`;
    }
    $('[data-role="q"]', root).addEventListener("input", e => { f.q = e.target.value; run(); });
    $('[data-role="cat"]', root).addEventListener("change", e => { f.cat = e.target.value; run(); });
    run();
  }

  /* ------------------------------ downloads ------------------------------ */
  function tmplCard(t) {
    const chips = (t.cats || []).slice(0, 3).map(id =>
      `<span class="chip">${esc(catById[id] ? catById[id].name : id)}</span>`).join("");
    return `<article class="tmpl-card">
      <div class="tmpl-top">
        <span class="chip ${t.kind === "Journal" ? "chip-scope-intl" : "chip-scope-natl"}">${esc(t.kind)}</span>
        <span class="chip chip-rank">${esc(t.publisher)}</span>
      </div>
      <h3>${esc(t.name)}</h3>
      <p class="tmpl-desc">${esc(t.desc || "")}</p>
      ${chips ? `<div class="vcard-tags">${chips}</div>` : ""}
      <a class="btn btn-overleaf btn-sm" href="${esc(t.link)}" target="_blank" rel="noopener">Open in Overleaf ↗</a>
    </article>`;
  }
  function renderDownloads() {
    const root = $("#view-downloads .list-mount");
    const pubs = Array.from(new Set(TEMPLATES.map(t => t.publisher))).sort()
      .map(p => `<option value="${esc(p)}">${esc(p)}</option>`).join("");
    const subs = CATEGORIES.map(c => `<option value="${c.id}">${esc(c.name)}</option>`).join("");
    root.innerHTML = `<div class="source-panel">
      <div class="source-panel-txt"><b>Browse more on Overleaf</b>
        <span>Publishers keep official template galleries with the latest versions.</span></div>
      <div class="source-panel-btns">
        <a class="btn btn-outline btn-sm" href="https://www.overleaf.com/gallery/tagged/ieee-official" target="_blank" rel="noopener">IEEE gallery ↗</a>
        <a class="btn btn-outline btn-sm" href="https://www.overleaf.com/latex/templates/tagged/springer" target="_blank" rel="noopener">Springer gallery ↗</a>
        <a class="btn btn-outline btn-sm" href="https://www.overleaf.com/latex/templates/tagged/academic-journal" target="_blank" rel="noopener">All journal templates ↗</a>
        <a class="btn btn-outline btn-sm" href="https://www.overleaf.com/latex/templates/tagged/conf2026" target="_blank" rel="noopener">2026 conference templates ↗</a>
      </div></div>
    <div class="toolbar">
      <div class="search-box"><span class="s-ico">⌕</span>
        <input type="search" placeholder="Search templates by name or publisher…" data-role="q"></div>
      <select class="select" data-role="kind"><option value="all">All types</option>
        <option value="Conference">Conference</option><option value="Journal">Journal</option>
        <option value="Book / Chapter">Book / Chapter</option></select>
      <select class="select" data-role="pub"><option value="all">All publishers</option>${pubs}</select>
      <select class="select" data-role="cat"><option value="all">All sub-fields</option>${subs}</select>
    </div>
    <div class="result-count" data-role="count"></div>
    <div class="grid-venues" data-role="grid"></div>
    <div class="pager" data-role="pager"></div>`;
    const f = { q: "", kind: "all", pub: "all", cat: "all", page: 1 };
    const grid = $('[data-role="grid"]', root), count = $('[data-role="count"]', root), pager = $('[data-role="pager"]', root);
    function run() {
      let res = TEMPLATES.slice();
      if (f.q) { const q = f.q.toLowerCase(); res = res.filter(t => (t.name + " " + t.publisher + " " + (t.desc || "")).toLowerCase().includes(q)); }
      if (f.kind !== "all") res = res.filter(t => t.kind === f.kind);
      if (f.pub !== "all") res = res.filter(t => t.publisher === f.pub);
      if (f.cat !== "all") res = res.filter(t => (t.cats || []).includes(f.cat));
      const pages = Math.max(1, Math.ceil(res.length / PER_PAGE));
      if (f.page > pages) f.page = pages;
      const start = (f.page - 1) * PER_PAGE, slice = res.slice(start, start + PER_PAGE);
      count.textContent = res.length + " template" + (res.length === 1 ? "" : "s")
        + (res.length > PER_PAGE ? " · showing " + (start + 1) + "–" + (start + slice.length) : "");
      grid.innerHTML = slice.length ? slice.map(tmplCard).join("")
        : `<div class="empty" style="grid-column:1/-1"><div class="big">🔍</div><p>No templates match these filters.</p></div>`;
      pager.innerHTML = pagerHTML(f.page, pages);
    }
    $('[data-role="q"]', root).addEventListener("input", e => { f.q = e.target.value; f.page = 1; run(); });
    ["kind", "pub", "cat"].forEach(k => $(`[data-role="${k}"]`, root).addEventListener("change", e => { f[k] = e.target.value; f.page = 1; run(); }));
    pager.addEventListener("click", e => { const b = e.target.closest(".pg-btn"); if (!b || b.disabled) return; f.page = parseInt(b.dataset.pg, 10); run(); root.scrollIntoView({ block: "start" }); });
    run();
  }

  function renderCategoriesIndex() {
    $("#categories-grid").innerHTML = CATEGORIES.map(c => {
      const nc = CONFERENCES.filter(it => it.categories.includes(c.id)).length;
      const nj = JOURNALS.filter(it => it.categories.includes(c.id)).length;
      return `<a class="cat-card" href="#/category/${c.id}">
        <div class="cat-ico">${catIcon(c.icon)}</div><h3>${esc(c.name)}</h3>
        <p>${esc(c.blurb)}</p>
        <div class="cat-count">${nc} conf · ${nj} journals →</div></a>`;
    }).join("");
  }
  function renderCategory(id) {
    const c = catById[id];
    const v = $("#view-category");
    if (!c) { v.querySelector(".list-mount").innerHTML = `<div class="empty"><div class="big">🤔</div><p>Unknown category.</p></div>`; return; }
    $("#cat-title").innerHTML = `<span class="cat-title-ico">${catIcon(c.icon)}</span>${esc(c.name)}`;
    $("#cat-blurb").textContent = c.blurb;
    const crumb = $("#cat-crumb"); if (crumb) crumb.textContent = c.name;
    const root = v.querySelector(".list-mount");
    const confs = CONFERENCES.filter(it => it.categories.includes(id));
    const jours = JOURNALS.filter(it => it.categories.includes(id));
    root.innerHTML = `
      <div class="section-head" style="margin-top:8px"><h2>Conferences <span class="mono" style="color:var(--muted);font-size:.7em">(${confs.length})</span></h2></div>
      <div class="grid-venues">${confs.length ? applyFilters(confs, {}).map(venueCard).join("") : emptyMini("conferences")}</div>
      <div class="section-head" style="margin-top:44px"><h2>Journals <span class="mono" style="color:var(--muted);font-size:.7em">(${jours.length})</span></h2></div>
      <div class="grid-venues">${jours.length ? applyFilters(jours, {}).map(venueCard).join("") : emptyMini("journals")}</div>`;
  }
  const emptyMini = n => `<div class="empty" style="grid-column:1/-1"><p>No ${n} listed for this sub-field yet.</p></div>`;

  /* --------------------------------- router ------------------------------- */
  const views = {
    "": "view-home", "home": "view-home",
    "conferences": "view-conferences",
    "cfp": "view-cfp", "categories": "view-categories",
    "category": "view-category", "publications": "view-publications",
    "blog": "view-blog", "downloads": "view-downloads",
    "faculty": "view-faculty", "about": "view-about"
  };
  function route() {
    const hash = location.hash.replace(/^#\/?/, "");
    const parts = hash.split("/");
    const key = parts[0] || "";
    let viewId = views[key] || "view-home";
    if (key === "blog" && parts[1]) viewId = "view-blogpost";

    $$(".view").forEach(v => v.classList.remove("active"));
    const view = document.getElementById(viewId) || $("#view-home");
    view.classList.add("active");

    // nav active state
    $$(".nav-links a").forEach(a => a.classList.toggle("active",
      a.getAttribute("href") === "#/" + key || (key === "" && a.getAttribute("href") === "#/")));

    if (viewId === "view-home") renderHome();
    else if (viewId === "view-conferences") renderConferences();
    else if (viewId === "view-cfp") renderCFP();
    else if (viewId === "view-categories") renderCategoriesIndex();
    else if (viewId === "view-category") renderCategory(parts[1]);
    else if (viewId === "view-publications") renderPublications();
    else if (viewId === "view-downloads") renderDownloads();
    else if (viewId === "view-faculty") renderFaculty();
    else if (viewId === "view-blog") renderBlog();
    else if (viewId === "view-blogpost") renderBlogPost(parts[1]);

    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    $("#nav-links").classList.remove("open");
  }

  /* ------------------------------- listeners ------------------------------ */
  document.addEventListener("click", e => {
    const potmEl = e.target.closest("#home-potm");
    if (potmEl && potmEl.dataset.potmId) {
      const p = PUBLICATIONS.find(x => x.id === potmEl.dataset.potmId);
      if (p) openPubModal(p);
      return;
    }
    const pub = e.target.closest(".pubcard");
    if (pub) {
      const p = PUBLICATIONS.find(x => x.id === pub.dataset.id);
      if (p) openPubModal(p);
      return;
    }
    const card = e.target.closest(".vcard");
    if (card) {
      const list = card.dataset.type === "journal" ? JOURNALS
        : card.dataset.type === "call" ? SPECIAL_CALLS : CONFERENCES;
      const it = list.find(x => x.id === card.dataset.id);
      if (it) openModal(it);
      return;
    }
    if (e.target.closest(".modal-close") || e.target.id === "modal-overlay") closeModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
    if (e.key === "Enter" && document.activeElement &&
      (document.activeElement.classList.contains("vcard") ||
        document.activeElement.classList.contains("pubcard") ||
        document.activeElement.id === "home-potm"))
      document.activeElement.click();
  });
  $("#menu-btn").addEventListener("click", () => $("#nav-links").classList.toggle("open"));

  // theme toggle
  const THEME_KEY = "rcai-theme";
  function setTheme(t) {
    if (t) document.documentElement.setAttribute("data-theme", t);
    else document.documentElement.removeAttribute("data-theme");
    try { t ? localStorage.setItem(THEME_KEY, t) : localStorage.removeItem(THEME_KEY); } catch (e) {}
    const dark = t === "dark" || (!t && matchMedia("(prefers-color-scheme:dark)").matches);
    $("#theme-btn").textContent = dark ? "☀" : "☾";
  }
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) setTheme(saved); else setTheme(null);
  } catch (e) { setTheme(null); }
  $("#theme-btn").addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    const dark = cur === "dark" || (!cur && matchMedia("(prefers-color-scheme:dark)").matches);
    setTheme(dark ? "light" : "dark");
  });

  window.addEventListener("hashchange", route);
  route();
})();
