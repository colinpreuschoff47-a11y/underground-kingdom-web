(() => {
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  const dialog = document.getElementById("coming-soon");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (event) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
      nav?.classList.remove("nav-open");
      toggle?.setAttribute("aria-expanded", "false");
      if (typeof target.focus === "function") {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    });
  });

  document.querySelectorAll("[data-coming-soon]").forEach((el) => {
    el.addEventListener("click", () => {
      nav?.classList.remove("nav-open");
      toggle?.setAttribute("aria-expanded", "false");
      if (dialog && typeof dialog.showModal === "function") dialog.showModal();
    });
  });

  dialog?.querySelector(".btn")?.addEventListener("click", () => dialog.close());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      nav?.classList.remove("nav-open");
      toggle?.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("click", (event) => {
    if (!nav?.classList.contains("nav-open")) return;
    if (nav.contains(event.target)) return;
    nav.classList.remove("nav-open");
    toggle?.setAttribute("aria-expanded", "false");
  });

  const revealAll = () => {
    document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("reveal"));
  };

  if (!reduced && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    window.setTimeout(revealAll, 1200);
  } else {
    revealAll();
  }
})();
