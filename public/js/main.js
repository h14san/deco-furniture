(function () {
  "use strict";
  const S = window.SITE;
  const CATS = window.CATEGORIES;
  const PRODUCTS = window.PRODUCTS;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const page = document.body.dataset.page;
  const home = page === "home" ? "" : "index.html";

  // ── Icons (one stroke family, 1.5px on a 24 grid) ─────────────
  const svg = (d, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"${extra}>${d}</svg>`;
  const ICON = {
    chat: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.3-.4.8-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3z"/></svg>',
    chev: svg('<path d="M9 6l6 6-6 6"/>', ' class="chev"'),
    arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    caret: svg('<path d="M6 9l6 6 6-6"/>'),
    phone: svg('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>'),
    mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'),
    menu: svg('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    close: svg('<path d="M6 6l12 12M18 6L6 18"/>'),
  };
  // The mark: three stacked rails, a bench seen end-on.
  const MARK = '<svg viewBox="0 0 34 22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M2 3h30M2 9h30M5 15h24M7 15v6M27 15v6"/></svg>';
  const fillIcons = (root = document) => $$("[data-icon]", root).forEach((el) => { el.outerHTML = ICON[el.dataset.icon] || ""; });

  // ── WhatsApp ──────────────────────────────────────────────────
  const waLink = (msg, contact = S.contacts[0]) => `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`;
  const productMsg = (p) => `Hello ${S.storeName}, I'm interested in the ${p.name} (ref ${p.id}). Could you share the price and availability?`;
  const generalMsg = `Hello ${S.storeName}, I found you online and I'd like to ask about your furniture.`;
  const telHref = (phone) => `tel:${phone.replace(/[^\d+]/g, "")}`;
  const catOf = (p) => CATS.find((c) => c.id === p.category);

  // ── Opening hours, in Kigali time ─────────────────────────────
  const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const toMin = (hm) => { const [h, m] = hm.split(":").map(Number); return h * 60 + m; };
  const fmt = (hm) => hm.replace(/^0/, "");
  function kigaliNow() {
    const parts = new Intl.DateTimeFormat("en-US", { timeZone: "Africa/Kigali", weekday: "long", hour: "2-digit", minute: "2-digit", hour12: false })
      .formatToParts(new Date()).reduce((o, p) => ((o[p.type] = p.value), o), {});
    return { day: DAYS.indexOf(parts.weekday), min: (Number(parts.hour) % 24) * 60 + Number(parts.minute) };
  }
  function openState() {
    const now = kigaliNow();
    const today = S.hours.find((h) => h.on && h.on.includes(now.day));
    if (today && now.min >= toMin(today.open) && now.min < toMin(today.close)) return { open: true, text: `Open now · until ${fmt(today.close)}`, today };
    for (let k = 0; k < 8; k++) {
      const d = (now.day + k) % 7, h = S.hours.find((x) => x.on && x.on.includes(d));
      if (!h || (k === 0 && now.min >= toMin(h.open))) continue;
      const when = k === 0 ? "today" : k === 1 ? "tomorrow" : DAYS[d];
      return { open: false, text: `Closed now · opens ${when} at ${fmt(h.open)}`, today };
    }
    return { open: false, text: "See opening hours", today };
  }

  // ── Shared chrome ─────────────────────────────────────────────
  const header = $("#site-header");
  if (header) {
    const catLinks = CATS.map((c) => {
      const n = PRODUCTS.filter((p) => p.category === c.id).length;
      return `<li><a href="category.html?c=${c.id}">${esc(c.name)}<small>${n} pieces</small></a></li>`;
    }).join("");
    header.className = "bar";
    header.innerHTML = `
      <div class="rail bar-inner">
        <a class="mark" href="index.html">${MARK}<span>${esc(S.storeName)}</span></a>
        <nav class="nav" aria-label="Main">
          <div class="menu">
            <button type="button" aria-expanded="false" aria-controls="shop-menu">Shop${ICON.caret}</button>
            <ul class="menu-list" id="shop-menu" hidden>${catLinks}<li><a href="category.html">Everything<small>${PRODUCTS.length} pieces</small></a></li></ul>
          </div>
          <a href="${home}#business">For business</a>
          <a href="${home}#showroom">Showroom</a>
        </nav>
        <a class="btn btn-primary btn-sm bar-cta" href="${waLink(generalMsg)}" target="_blank" rel="noopener">${ICON.chat}WhatsApp us${ICON.chev}</a>
        <a class="btn btn-primary bar-wa" href="${waLink(generalMsg)}" target="_blank" rel="noopener" aria-label="WhatsApp us">${ICON.chat}</a>
        <button class="burger" type="button" aria-expanded="false" aria-controls="drawer" aria-label="Open menu">${ICON.menu}</button>
      </div>
      <div class="drawer" id="drawer" hidden>
        <nav class="rail" aria-label="Mobile">
          ${CATS.map((c) => `<a href="category.html?c=${c.id}">${esc(c.name)}<small>${PRODUCTS.filter((p) => p.category === c.id).length} pieces</small></a>`).join("")}
          <a href="${home}#business">For business</a>
          <a href="${home}#showroom">Showroom &amp; hours</a>
        </nav>
      </div>`;

    const menuBtn = $(".menu button", header), menuList = $("#shop-menu");
    const setMenu = (open) => { menuBtn.setAttribute("aria-expanded", open); menuList.hidden = !open; };
    menuBtn.addEventListener("click", () => setMenu(menuList.hidden));
    document.addEventListener("click", (e) => { if (!e.target.closest(".menu")) setMenu(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !menuList.hidden) { setMenu(false); menuBtn.focus(); } });

    const burger = $(".burger", header), drawer = $("#drawer");
    burger.addEventListener("click", () => {
      const open = drawer.hidden;
      drawer.hidden = !open;
      burger.setAttribute("aria-expanded", open);
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      burger.innerHTML = open ? ICON.close : ICON.menu;
    });
    $$("a", drawer).forEach((a) => a.addEventListener("click", () => { drawer.hidden = true; burger.setAttribute("aria-expanded", "false"); burger.innerHTML = ICON.menu; }));

    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  }

  const footer = $("#site-footer");
  if (footer) {
    const credits = PRODUCTS.filter((p) => p.credit).map((p) =>
      `<li>${esc(p.name)}: <a href="${esc(p.credit.url)}" target="_blank" rel="noopener">${esc(p.credit.by)} on Unsplash</a></li>`).join("");
    footer.className = "foot";
    footer.innerHTML = `
      <div class="rail">
        <div class="foot-grid">
          <div>
            <a class="mark" href="index.html">${MARK}<span>${esc(S.storeName)}</span></a>
            <p style="margin-top:16px;max-width:30em">${esc(S.tagline)}. ${esc(S.address.line1)}, ${esc(S.address.line2)}, ${esc(S.address.city)}.</p>
          </div>
          <div><h4>Shop</h4><ul>${CATS.map((c) => `<li><a href="category.html?c=${c.id}">${esc(c.name)}</a></li>`).join("")}</ul></div>
          <div><h4>Visit</h4><ul>${S.hours.map((h) => `<li>${esc(h.days)}<br>${esc(h.time)}</li>`).join("")}<li><a href="${home}#showroom">Directions</a></li></ul></div>
          <div><h4>Contact</h4><ul>
            ${S.contacts.map((c) => `<li><a href="${telHref(c.phone)}">${esc(c.phone)}</a><br>${esc(c.name)}</li>`).join("")}
            <li><a href="mailto:${esc(S.email)}">${esc(S.email)}</a></li>
          </ul></div>
        </div>
        <div class="foot-note">
          <p>© ${new Date().getFullYear()} ${esc(S.storeName)}. Demo website: product photos are samples, not our stock.</p>
          <details><summary>Sample photo credits</summary><ul>${credits}</ul></details>
        </div>
      </div>`;
  }

  // Simple text bindings: <span data-bind="address.line1"></span>
  $$("[data-bind]").forEach((el) => {
    const v = el.dataset.bind.split(".").reduce((o, k) => (o ? o[k] : undefined), S);
    if (v != null) el.textContent = v;
  });
  document.title = document.title.replace("{store}", S.storeName);
  $$("[data-wa='general']").forEach((a) => (a.href = waLink(generalMsg)));

  // ── Building blocks ───────────────────────────────────────────
  const shot = (p, { eager = false } = {}) => `
    <div class="shot">
      <img src="${p.photo || p.image}" alt="${esc(p.name)}" width="1200" height="900" style="object-position:${p.focus || "50% 50%"}"${eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"'}>
      ${p.credit ? '<span class="shot-label">Sample photo</span>' : ""}
    </div>`;

  const facts = (p) => `
    <dl class="facts">
      <div class="fact"><dt>Ref</dt><dd>${p.id}</dd></div>
      <div class="fact"><dt>Collection</dt><dd>${esc(catOf(p).name)}</dd></div>
      <div class="fact"><dt>Price</dt><dd><i class="status-dot"></i>On request</dd></div>
    </dl>`;

  const row = (p) => `
    <li><a class="row" href="product.html?id=${p.id}">
      <span class="thumb"><img src="${p.photo ? p.photo.replace("photos/", "photos/thumbs/") : p.image}" alt="" width="240" height="240" decoding="async" style="object-position:${p.focus || "50% 50%"}"></span>
      <span><span class="row-name">${esc(p.name)}</span>${facts(p)}</span>
      <span class="go" aria-hidden="true">${ICON.arrow}</span>
    </a></li>`;

  const item = (p) => `
    <article class="item">
      ${shot(p)}
      <div class="item-body">
        <h3 class="item-name"><a href="product.html?id=${p.id}">${esc(p.name)}</a></h3>
        <p>${esc(p.desc)}</p>
        <div class="item-foot">
          <dl class="facts">
            <div class="fact"><dt>Ref</dt><dd>${p.id}</dd></div>
            <div class="fact"><dt>Price</dt><dd>On request</dd></div>
          </dl>
          <a class="btn btn-primary btn-sm" href="${waLink(productMsg(p))}" target="_blank" rel="noopener" aria-label="Ask about ${esc(p.name)} on WhatsApp">${ICON.chat}Ask</a>
        </div>
      </div>
    </article>`;

  // Engraved collection seals: ring text + a line drawing.
  const SEAL_ART = {
    chairs: '<path d="M44 34h16v18H44zM40 52h24v6H40zM42 58v12M62 58v12"/>',
    "office-desks": '<path d="M30 46h44v4H30zM33 50v20M71 50v20M56 50h15v11H56zM59 55.5h9M38 46v-8h14v8"/>',
    couches: '<path d="M36 48v-6a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v6M32 50a4 4 0 0 1 4 4v6h32v-6a4 4 0 0 1 8 0v10H28V54a4 4 0 0 1 4-4zM31 64v5M73 64v5"/>',
    "office-sets": '<path d="M32 52h40M36 52v16M68 52v16M40 38h7v14M57 38h7v14M38 45h11M55 45h11"/>',
  };
  const seal = (c) => {
    const n = PRODUCTS.filter((p) => p.category === c.id).length;
    const ring = `${c.name.toUpperCase()} · ${S.storeName.toUpperCase()} · KIGALI · `;
    return `<li><a class="seal" href="category.html?c=${c.id}">
      <svg viewBox="0 0 104 104" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <defs><path id="ring-${c.id}" d="M52 52m-41 0a41 41 0 1 1 82 0a41 41 0 1 1-82 0"/></defs>
        <circle cx="52" cy="52" r="50"/><circle cx="52" cy="52" r="34"/>
        <text font-size="7.2" letter-spacing="1.6" fill="currentColor" stroke="none" font-family="Figtree, sans-serif"><textPath href="#ring-${c.id}" textLength="250">${esc(ring)}</textPath></text>
        ${SEAL_ART[c.id] || ""}
      </svg>
      <span>${esc(c.name)}</span><small>${n} pieces</small>
    </a></li>`;
  };

  // Panels rise 24px once as they enter.
  function rise() {
    const els = $$(".rise");
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); e.target.classList.remove("pending"); io.unobserve(e.target); }
    }), { rootMargin: "0px 0px -10% 0px" });
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) return; // already in view: never hide it
      el.classList.add("pending"); io.observe(el);
    });
  }

  function hoursUI() {
    const st = openState();
    $$("[data-open-dot]").forEach((d) => d.classList.toggle("is-open", st.open));
    $$("[data-open-text]").forEach((t) => (t.textContent = st.text));
    const list = $("#hours");
    if (list) list.innerHTML = S.hours.map((h) =>
      `<li class="${h === st.today ? "is-today" : ""}"><span>${esc(h.days)}</span><span>${esc(h.time)}</span></li>`).join("");
  }

  // ── Homepage ─────────────────────────────────────────────────
  if (page === "home") {
    $("#seal-row").innerHTML = CATS.map(seal).join("");

    // Featured console with collection tabs
    const tabs = [{ id: "featured", name: "Featured" }, ...CATS];
    const tabBar = $("#featured-tabs"), list = $("#featured");
    const show = (id) => {
      const items = id === "featured" ? PRODUCTS.filter((p) => p.featured) : PRODUCTS.filter((p) => p.category === id);
      list.innerHTML = items.map(row).join("");
      $$(".tab", tabBar).forEach((b) => b.setAttribute("aria-selected", b.dataset.tab === id));
      list.setAttribute("aria-labelledby", `tab-${id}`);
    };
    tabBar.innerHTML = tabs.map((t) => `<button class="tab" type="button" role="tab" id="tab-${t.id}" data-tab="${t.id}" aria-controls="featured">${esc(t.name)}</button>`).join("");
    tabBar.addEventListener("click", (e) => { const b = e.target.closest("[data-tab]"); if (b) show(b.dataset.tab); });
    tabBar.addEventListener("keydown", (e) => {
      if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
      const btns = $$(".tab", tabBar), i = btns.indexOf(document.activeElement);
      const next = btns[(i + (e.key === "ArrowRight" ? 1 : btns.length - 1)) % btns.length];
      next.focus(); show(next.dataset.tab);
    });
    show("featured");

    // Business quote composer → WhatsApp
    const form = $("#quote"), people = $("#q-people"), err = $("#q-people-err"), preview = $("#q-preview");
    const compose = () => {
      const d = new FormData(form);
      const needs = d.getAll("need");
      const lines = [
        `Hello ${S.storeName}, I'd like a quote for furnishing a space.`,
        d.get("org") ? `• Organisation: ${d.get("org").trim()}` : null,
        `• Type of space: ${d.get("type")}`,
        `• People to seat: ${d.get("people") || "—"}`,
        `• Needs: ${needs.length ? needs.join(", ") : "not sure yet, please advise"}`,
        `• Timing: ${d.get("when")}`,
      ].filter(Boolean);
      return lines.join("\n");
    };
    const refresh = () => { preview.innerHTML = `<b>Your message</b>${esc(compose())}`; };
    form.addEventListener("input", () => {
      refresh();
      if (people.getAttribute("aria-invalid") === "true" && people.checkValidity() && people.value) { people.removeAttribute("aria-invalid"); err.textContent = ""; }
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const n = Number(people.value);
      if (!people.value || !Number.isInteger(n) || n < 1 || n > 5000) {
        people.setAttribute("aria-invalid", "true");
        err.textContent = "Enter how many people need seating, as a whole number such as 12.";
        people.focus();
        return;
      }
      window.open(waLink(compose()), "_blank", "noopener");
    });
    refresh();

    // Showroom
    $("#address").innerHTML = `${esc(S.address.line1)}<br>${esc(S.address.line2)}<br>${esc(S.address.city)}`;
    $("#contacts").innerHTML = S.contacts.map((c) => `
      <div class="contact">
        <div><strong>${esc(c.name)}</strong><small>${esc(c.role)} · ${esc(c.phone)}</small></div>
        <div class="contact-actions">
          <a class="icon-btn" href="${telHref(c.phone)}" aria-label="Call ${esc(c.name)}">${ICON.phone}</a>
          <a class="icon-btn is-primary" href="${waLink(generalMsg, c)}" target="_blank" rel="noopener" aria-label="WhatsApp ${esc(c.name)}">${ICON.chat}</a>
        </div>
      </div>`).join("") + `
      <div class="contact">
        <div><strong>Email</strong><small>${esc(S.email)}</small></div>
        <div class="contact-actions"><a class="icon-btn" href="mailto:${esc(S.email)}" aria-label="Email ${esc(S.storeName)}">${ICON.mail}</a></div>
      </div>`;
    // Map: a light static card first; the Google map loads only when asked for
    // (saves ~1 MB on mobile data and never shows a blank box).
    const q = encodeURIComponent(S.mapQuery);
    const dir = `https://www.google.com/maps/dir/?api=1&destination=${q}`;
    const map = $("#map");
    map.innerHTML = `
      <div class="map-card">
        <svg class="map-plan" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
          <g fill="none" stroke="currentColor" stroke-linecap="round">
            <path d="M-20 300C120 270 210 230 320 200S520 120 660 90" stroke-width="26" opacity=".9"/>
            <path d="M120 -20C150 90 170 170 210 230S260 360 250 420" stroke-width="12" opacity=".7"/>
            <path d="M430 -20c-10 70 0 120 30 160s60 120 40 280" stroke-width="12" opacity=".7"/>
            <path d="M-20 120c90 10 170 40 250 30M330 420c40-80 120-120 330-140" stroke-width="8" opacity=".5"/>
          </g>
          <text x="560" y="112" font-size="15" fill="#8c90a6" font-family="Figtree, sans-serif" transform="rotate(-14 560 112)">KG 12 Ave</text>
        </svg>
        <div class="map-pin" aria-hidden="true"><span></span></div>
        <div class="map-info">
          <strong>${esc(S.address.line1)}</strong>
          <span>${esc(S.address.line2)}, ${esc(S.address.city)}</span>
          <div class="actions" style="margin-top:16px">
            <a class="btn btn-primary btn-sm" href="${dir}" target="_blank" rel="noopener">Get directions${ICON.chev}</a>
            <button class="btn btn-secondary btn-sm" type="button" id="map-load">Show the map here</button>
          </div>
          <small>Simplified sketch, not to scale.</small>
        </div>
      </div>`;
    $("#map-load").addEventListener("click", () => {
      map.innerHTML = `<iframe title="Map: ${esc(S.storeName)} showroom" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${q}&output=embed"></iframe>`;
    });
    $("#directions").href = dir;
  }

  // ── Category page ────────────────────────────────────────────
  if (page === "category") {
    const render = (id) => {
      const cat = CATS.find((c) => c.id === id);
      const items = cat ? PRODUCTS.filter((p) => p.category === cat.id) : PRODUCTS;
      $("#cat-title").textContent = cat ? cat.name : "Everything";
      $("#cat-blurb").textContent = cat ? cat.blurb : "Chairs, office desks, couches and office sets for homes, offices and businesses.";
      $("#crumb-current").textContent = cat ? cat.name : "Everything";
      $("#result-count").textContent = `${items.length} pieces · prices on request`;
      $("#chips").innerHTML = [{ id: "", name: "Everything" }, ...CATS].map((c) =>
        `<a class="tab" href="category.html${c.id ? `?c=${c.id}` : ""}" data-cat="${c.id}"${(cat ? cat.id : "") === c.id ? ' aria-current="page"' : ""}>${esc(c.name)}</a>`).join("");
      $("#product-grid").innerHTML = items.map(item).join("");
      document.title = `${cat ? cat.name : "Shop"} — ${S.storeName}`;
    };
    $("#chips").addEventListener("click", (e) => {
      const a = e.target.closest("[data-cat]");
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      history.pushState(null, "", a.getAttribute("href"));
      render(a.dataset.cat);
    });
    window.addEventListener("popstate", () => render(new URLSearchParams(location.search).get("c") || ""));
    $("#cta-wa").href = waLink(generalMsg);
    render(new URLSearchParams(location.search).get("c") || "");
  }

  // ── Product page ─────────────────────────────────────────────
  if (page === "product") {
    const root = $("#product-root");
    const id = (new URLSearchParams(location.search).get("id") || "").toUpperCase();
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) {
      root.insertAdjacentHTML("beforeend", `
        <div class="not-found">
          <h1 style="font-size:clamp(2rem,4vw,3rem)">We couldn't find that piece.</h1>
          <p class="deck">The link may be old, or the reference mistyped. Browse the full collection, or ask us on WhatsApp.</p>
          <div class="actions"><a class="btn btn-primary" href="category.html">Browse the collection${ICON.chev}</a>
          <a class="btn btn-secondary" href="${waLink(generalMsg)}" target="_blank" rel="noopener">${ICON.chat}Ask on WhatsApp</a></div>
        </div>`);
    } else {
      const cat = catOf(p);
      const more = PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id);
      $(".crumbs", root).insertAdjacentHTML("beforeend",
        `<span aria-hidden="true">/</span><a href="category.html?c=${cat.id}">${esc(cat.name)}</a><span aria-hidden="true">/</span><span aria-current="page">${esc(p.name)}</span>`);
      root.insertAdjacentHTML("beforeend", `
        <article class="product">
          <figure style="margin:0">
            ${shot(p, { eager: true })}
            ${p.credit ? `<figcaption style="margin-top:12px;color:var(--quiet);font-size:.8125rem">Sample photo by <a href="${esc(p.credit.url)}" target="_blank" rel="noopener">${esc(p.credit.by)} on Unsplash</a>. Ask us for photos of the piece in the showroom.</figcaption>` : ""}
          </figure>
          <div class="product-info">
            <h1>${esc(p.name)}</h1>
            <p class="deck">${esc(p.desc)}</p>
            <div class="ask" id="ask">
              ${S.contacts.map((c, i) => `<a class="btn ${i ? "btn-secondary" : "btn-primary"} btn-block" href="${waLink(productMsg(p), c)}" target="_blank" rel="noopener">${ICON.chat}Ask ${esc(c.name)} on WhatsApp</a>`).join("")}
              <p class="ask-note">Your message will mention ref ${p.id}. Or see it in person: ${esc(S.address.line1)}, Nyarutarama. <span data-open-text></span></p>
            </div>
            <dl class="spec">
              <div><dt>Reference</dt><dd>${p.id}</dd></div>
              <div><dt>Collection</dt><dd><a class="link" href="category.html?c=${cat.id}">${esc(cat.name)}</a></dd></div>
              <div><dt>Features</dt><dd>${p.specs.map(esc).join(" · ")}</dd></div>
              <div><dt>Price</dt><dd>On request. Our team replies on WhatsApp.</dd></div>
            </dl>
          </div>
        </article>
        ${more.length ? `
        <section class="band" aria-labelledby="more-title" style="padding-top:72px">
          <div class="split">
            <div class="split-copy"><h2 id="more-title">More ${esc(cat.name.toLowerCase())}</h2><p class="deck">All on the showroom floor.</p></div>
            <div class="panel"><ul class="ledger">${more.map(row).join("")}</ul></div>
          </div>
        </section>` : ""}`);
      document.title = `${p.name} (${p.id}) — ${S.storeName}`;

      const bar = $("#ask-bar");
      bar.innerHTML = `<a class="btn btn-primary btn-block" href="${waLink(productMsg(p))}" target="_blank" rel="noopener">${ICON.chat}Ask about ${p.id} on WhatsApp</a>`;
      if ("IntersectionObserver" in window) {
        new IntersectionObserver(([e]) => bar.classList.toggle("is-shown", !e.isIntersecting && e.boundingClientRect.top < 0))
          .observe($("#ask"));
      }
    }
  }

  fillIcons();
  hoursUI();
  rise();
})();
