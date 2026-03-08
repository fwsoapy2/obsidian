(() => {
  const body = document.body;
  const root = body.dataset.root || "";
  const currentNav = body.dataset.nav || "";

  const safeRoot = root === "." ? "" : root;
  const withRoot = (path) => `${safeRoot}${path}`;

  const routes = {
    home: withRoot("index.html").replace("/index.html", "/"),
    fw: withRoot("fw/"),
    woof: withRoot("woof/"),
    cheese: withRoot("cheese/")
  };

  const logo = `<svg viewBox="0 0 128 128" aria-hidden="true" role="img">
  <defs>
    <linearGradient id="obsidianGradient" x1="10%" y1="10%" x2="90%" y2="90%">
      <stop offset="0%" stop-color="#9de3ff"></stop>
      <stop offset="50%" stop-color="#53bbff"></stop>
      <stop offset="100%" stop-color="#1f6bff"></stop>
    </linearGradient>
  </defs>
  <path d="M92 18 112 40 104 78 80 108 44 110 18 86 16 50 36 24 66 14Z" fill="none" stroke="url(#obsidianGradient)" stroke-width="8" stroke-linejoin="round" opacity=".9"></path>
  <circle cx="64" cy="64" r="28" fill="none" stroke="url(#obsidianGradient)" stroke-width="10"></circle>
  <circle cx="64" cy="64" r="14" fill="#05070b"></circle>
  <circle cx="64" cy="64" r="6" fill="#8ddcff" opacity=".8"></circle>
</svg>`;

  const navLinks = [
    { key: "home", label: "Home", href: routes.home },
    { key: "fw", label: "FW", href: routes.fw },
    { key: "woof", label: "WOOF", href: routes.woof },
    { key: "cheese", label: "CHEESE", href: routes.cheese }
  ];

  const header = document.querySelector(".site-header");
  const footer = document.querySelector(".site-footer");

  if (header) {
    header.innerHTML = `
      <div class="site-header-inner">
        <a class="brand" href="${routes.home}" aria-label="Obsidian home">
          <span class="brand-mark">${logo}</span>
          <span class="brand-copy">
            <span class="brand-kicker">Premium storefront</span>
            <span class="brand-name">Obsidian</span>
          </span>
        </a>

        <button class="nav-toggle" type="button" aria-expanded="false" aria-label="Open navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="nav-panel">
          <div class="nav-panel-inner">
            <nav aria-label="Primary">
              <ul class="nav-links">
                ${navLinks.map(link => `
                  <li>
                    <a href="${link.href}" class="${currentNav === link.key ? "is-active" : ""}">
                      ${link.label}
                    </a>
                  </li>
                `).join("")}
              </ul>
            </nav>

            <div class="nav-actions">
              <a class="nav-cta" href="${routes.home}#pricing-overview">View pricing</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <div class="footer-wrap">
        <div class="container">
          <div class="footer-panel reveal">
            <div class="footer-grid">
              <div class="footer-brand">
                <div class="brand">
                  <span class="brand-mark">${logo}</span>
                  <span class="brand-copy">
                    <span class="brand-kicker">Luxury digital catalog</span>
                    <span class="brand-name">Obsidian</span>
                  </span>
                </div>
                <p>
                  Obsidian is a polished static storefront, built for deep category navigation, premium visual presentation, and smooth GitHub Pages deployment with no backend and no build step.
                </p>
                <div class="badge-row">
                  <span class="badge">Static routing</span>
                  <span class="badge">Glass UI system</span>
                  <span class="badge">Motion rich pages</span>
                </div>
              </div>

              <div class="footer-links">
                <div>
                  <h4>Explore</h4>
                  <ul>
                    <li><a href="${routes.home}">Home</a></li>
                    <li><a href="${routes.fw}">FW</a></li>
                    <li><a href="${routes.woof}">WOOF</a></li>
                    <li><a href="${routes.cheese}">CHEESE</a></li>
                  </ul>
                </div>
                <div>
                  <h4>Deep links</h4>
                  <ul>
                    <li><a href="${withRoot("fw/eb/")}">FW / EB</a></li>
                    <li><a href="${withRoot("fw/ebv/")}">FW / EBV</a></li>
                    <li><a href="${withRoot("fw/sebv/")}">FW / SEBV</a></li>
                    <li><a href="${withRoot("woof/t/")}">WOOF / T</a></li>
                    <li><a href="${withRoot("woof/p/")}">WOOF / P</a></li>
                    <li><a href="${withRoot("cheese/r/")}">CHEESE / R</a></li>
                    <li><a href="${withRoot("cheese/f/")}">CHEESE / F</a></li>
                    <li><a href="${withRoot("cheese/v/")}">CHEESE / V</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="footer-bottom">
              <span>© 2026 Obsidian. Premium static storefront.</span>
              <span>Ready for GitHub Pages uploads.</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  const headerEl = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navPanel = document.querySelector(".nav-panel");

  if (navToggle && navPanel) {
    navPanel.insertAdjacentHTML("beforeend", "");
    navToggle.addEventListener("click", () => {
      const open = navPanel.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", String(open));
    });

    document.addEventListener("click", (event) => {
      if (!navPanel.classList.contains("is-open")) return;
      if (event.target.closest(".site-header-inner")) return;
      navPanel.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  }

  const setHeaderState = () => {
    if (!headerEl) return;
    headerEl.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  const loader = document.querySelector(".page-loader");
  const transition = document.querySelector(".page-transition");
  window.addEventListener("load", () => {
    window.setTimeout(() => {
      loader?.classList.add("is-hidden");
    }, 180);
  });

  const internalLinks = [...document.querySelectorAll("a[href]")].filter((anchor) => {
    const href = anchor.getAttribute("href");
    if (!href) return false;
    if (href.startsWith("#")) return false;
    if (href.startsWith("mailto:") || href.startsWith("tel:")) return false;
    if (anchor.target === "_blank") return false;
    try {
      const url = new URL(anchor.href, window.location.href);
      return url.origin === window.location.origin;
    } catch {
      return false;
    }
  });

  internalLinks.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.pathname === window.location.pathname && url.hash) return;
      event.preventDefault();
      transition?.classList.add("is-active");
      window.setTimeout(() => {
        window.location.href = anchor.href;
      }, 210);
    });
  });

  const revealNodes = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealNodes.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.16,
      rootMargin: "0px 0px -6% 0px"
    });

    revealNodes.forEach((node) => observer.observe(node));
  } else {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
  }

  const tiltNodes = document.querySelectorAll(".tilt-card");
  tiltNodes.forEach((card) => {
    const clamp = 10;
    const handleMove = (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rx = ((y / rect.height) - 0.5) * -clamp;
      const ry = ((x / rect.width) - 0.5) * clamp;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      card.style.setProperty("--pointer-x", `${(x / rect.width) * 100}%`);
      card.style.setProperty("--pointer-y", `${(y / rect.height) * 100}%`);
    };

    const handleLeave = () => {
      card.style.transform = "";
      card.style.removeProperty("--pointer-x");
      card.style.removeProperty("--pointer-y");
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", handleLeave);
  });

  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item, index) => {
    const trigger = item.querySelector(".faq-trigger");
    const body = item.querySelector(".faq-body");
    if (!trigger || !body) return;

    if (index === 0) {
      item.classList.add("is-open");
      body.style.maxHeight = `${body.scrollHeight}px`;
    }

    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      faqItems.forEach((other) => {
        if (other === item) return;
        other.classList.remove("is-open");
        const otherBody = other.querySelector(".faq-body");
        if (otherBody) otherBody.style.maxHeight = "0px";
      });

      item.classList.toggle("is-open", !isOpen);
      body.style.maxHeight = !isOpen ? `${body.scrollHeight}px` : "0px";
    });
  });

  const canvas = document.querySelector(".fx-canvas");
  const motionOkay = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (canvas && motionOkay) {
    const context = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let points = [];

    const createPoints = () => {
      const count = Math.max(20, Math.min(52, Math.floor((width * height) / 42000)));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.26,
        vy: (Math.random() - 0.5) * 0.26,
        r: Math.random() * 1.8 + 0.6
      }));
    };

    const resize = () => {
      width = canvas.width = window.innerWidth * Math.min(2, window.devicePixelRatio || 1);
      height = canvas.height = window.innerHeight * Math.min(2, window.devicePixelRatio || 1);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(Math.min(2, window.devicePixelRatio || 1), Math.min(2, window.devicePixelRatio || 1));
      width = window.innerWidth;
      height = window.innerHeight;
      createPoints();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < points.length; i += 1) {
        const point = points[i];
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < -20 || point.x > width + 20) point.vx *= -1;
        if (point.y < -20 || point.y > height + 20) point.vy *= -1;

        for (let j = i + 1; j < points.length; j += 1) {
          const other = points[j];
          const dx = point.x - other.x;
          const dy = point.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            context.beginPath();
            context.strokeStyle = `rgba(103, 193, 255, ${0.12 * (1 - distance / 130)})`;
            context.lineWidth = 1;
            context.moveTo(point.x, point.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }

        context.beginPath();
        context.fillStyle = "rgba(143, 220, 255, 0.8)";
        context.shadowColor = "rgba(103, 193, 255, 0.5)";
        context.shadowBlur = 16;
        context.arc(point.x, point.y, point.r, 0, Math.PI * 2);
        context.fill();
      }

      requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
  }

  const yearNodes = document.querySelectorAll("[data-year]");
  yearNodes.forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
})();
