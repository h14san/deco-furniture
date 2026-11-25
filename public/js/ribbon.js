// Silk ribbon: the one place colour lives on the page.
// A twisting band drawn on <canvas data-ribbon="hero|head">.
// It unfurls once on load and its crest bends up to 12px toward the pointer.
// Under reduced motion it is drawn once, static.
(function () {
  "use strict";
  const STOPS = [[127, 216, 208], [201, 184, 240], [91, 79, 214]]; // #7FD8D0 → #C9B8F0 → #5B4FD6
  const PATHS = {
    hero:    { pts: [[1.04, -0.22], [0.66, 0.02], [0.4, 0.24], [0.3, 0.52], [0.5, 0.8], [1.18, 0.74]], width: 0.5, turns: 0.62, alpha: 0.9 },
    head:    { pts: [[0.25, 1.25], [0.45, 0.72], [0.72, 0.42], [0.94, 0.55], [1.15, 0.12]], width: 0.42, turns: 0.85, alpha: 0.7 },
  };
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lerp = (a, b, t) => a + (b - a) * t;
  const colorAt = (t, shade) => {
    const seg = t < 0.5 ? 0 : 1, k = t < 0.5 ? t * 2 : (t - 0.5) * 2;
    const a = STOPS[seg], b = STOPS[seg + 1];
    return [0, 1, 2].map((i) => Math.round(lerp(a[i], b[i], k) * shade));
  };
  // Catmull-Rom through the control points.
  function spline(pts, t) {
    const n = pts.length - 1, x = Math.min(t * n, n - 1e-6), i = Math.floor(x), u = x - i;
    const p0 = pts[Math.max(i - 1, 0)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(i + 2, n)];
    const f = (a, b, c, d) => 0.5 * (2 * b + (-a + c) * u + (2 * a - 5 * b + 4 * c - d) * u * u + (-a + 3 * b - 3 * c + d) * u * u * u);
    return [f(p0[0], p1[0], p2[0], p3[0]), f(p0[1], p1[1], p2[1], p3[1])];
  }

  function Ribbon(canvas) {
    const cfg = PATHS[canvas.dataset.ribbon] || PATHS.hero;
    const ctx = canvas.getContext("2d");
    const N = 110;
    let w = 0, h = 0, dpr = 1, progress = reduce ? 1 : 0, start = 0, raf = 0, visible = true;
    const pointer = { x: -1e4, y: -1e4 };
    const bend = new Float32Array(N * 2);   // current displacement per sample
    const target = new Float32Array(N * 2);

    function resize() {
      const r = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      draw();
    }

    function samples() {
      const out = [];
      for (let i = 0; i < N; i++) {
        const t = i / (N - 1);
        const [nx, ny] = spline(cfg.pts, t);
        out.push([nx * w + bend[i * 2], ny * h + bend[i * 2 + 1], t]);
      }
      return out;
    }

    function draw() {
      if (!w || !h) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const pts = samples();
      const W = Math.min(w, h * 1.4) * cfg.width;
      const last = Math.max(2, Math.floor(progress * (N - 1)));
      // Edges of the band: centre ± normal × half-width × cos(twist).
      const A = [], B = [], face = [];
      for (let i = 0; i <= last; i++) {
        const p = pts[i], q = pts[Math.min(i + 1, N - 1)], o = pts[Math.max(i - 1, 0)];
        let tx = q[0] - o[0], ty = q[1] - o[1];
        const len = Math.hypot(tx, ty) || 1; tx /= len; ty /= len;
        const t = p[2];
        const twist = Math.cos(Math.PI * cfg.turns * t + 0.25);
        const half = (W / 2) * (0.55 + 0.45 * Math.sin(Math.PI * Math.min(1, t * 1.15))) * twist;
        A.push([p[0] - ty * half, p[1] + tx * half]);
        B.push([p[0] + ty * half, p[1] - tx * half]);
        face.push(twist);
      }
      // Opaque, continuous fill; translucency comes from the canvas's CSS opacity,
      // so overlapping edges never show as seams or hatching.
      // The band is split lengthwise into fine strips whose shade follows a soft
      // sheen curve across the width: silk light, not mesh.
      const STRIPS = 28;
      for (let i = 0; i < last; i++) {
        const t = pts[i][2], f = face[i];
        const faceShade = f >= 0 ? 0.93 + 0.07 * f : 0.8 + 0.08 * -f;
        for (let s = 0; s < STRIPS; s++) {
          const k0 = s / STRIPS, k1 = (s + 1) / STRIPS, km = (k0 + k1) / 2;
          const sheen = 1 + 0.07 * Math.exp(-Math.pow((km - 0.3) / 0.16, 2)) - 0.05 * Math.pow(km, 3);
          const [r, g, b] = colorAt(t, Math.min(1.08, faceShade * sheen));
          ctx.fillStyle = `rgb(${Math.min(255, r)},${Math.min(255, g)},${Math.min(255, b)})`;
          const a0 = [lerp(A[i][0], B[i][0], k0), lerp(A[i][1], B[i][1], k0)];
          const a1 = [lerp(A[i + 1][0], B[i + 1][0], k0), lerp(A[i + 1][1], B[i + 1][1], k0)];
          const b1 = [lerp(A[i + 1][0], B[i + 1][0], k1), lerp(A[i + 1][1], B[i + 1][1], k1)];
          const b0 = [lerp(A[i][0], B[i][0], k1), lerp(A[i][1], B[i][1], k1)];
          ctx.beginPath();
          ctx.moveTo(a0[0], a0[1]); ctx.lineTo(a1[0], a1[1]); ctx.lineTo(b1[0], b1[1]); ctx.lineTo(b0[0], b0[1]);
          ctx.closePath(); ctx.fill();
          ctx.strokeStyle = ctx.fillStyle; ctx.lineWidth = 0.75; ctx.stroke(); // close sub-pixel gaps (same colour, opaque: invisible)
        }
      }
    }

    function tick(now) {
      raf = 0;
      let moving = false;
      if (progress < 1) {
        if (!start) start = now;
        const t = Math.min(1, (now - start) / 1400);
        progress = t === 1 ? 1 : 1 - Math.pow(2, -10 * t); // exponential ease-out
        moving = true;
      }
      // Pointer pull: samples within 240px lean up to 12px toward the pointer.
      const r = canvas.getBoundingClientRect();
      const px = pointer.x - r.left, py = pointer.y - r.top;
      for (let i = 0; i < N; i++) {
        const [nx, ny] = spline(cfg.pts, i / (N - 1));
        const x = nx * w, y = ny * h, dx = px - x, dy = py - y, d = Math.hypot(dx, dy);
        const pull = d < 240 ? 12 * Math.pow(1 - d / 240, 2) : 0;
        target[i * 2] = d ? (dx / d) * pull : 0;
        target[i * 2 + 1] = d ? (dy / d) * pull : 0;
      }
      for (let i = 0; i < N * 2; i++) {
        const delta = target[i] - bend[i];
        if (Math.abs(delta) > 0.05) { bend[i] += delta * 0.16; moving = true; } else bend[i] = target[i];
      }
      draw();
      if (moving && visible) raf = requestAnimationFrame(tick);
    }
    const wake = () => { if (!raf && visible && !reduce) raf = requestAnimationFrame(tick); };

    canvas.style.opacity = cfg.alpha;
    // Only a ribbon in view at load unfurls; one further down is simply there.
    if (canvas.getBoundingClientRect().top > window.innerHeight) progress = 1;
    resize();
    new ResizeObserver(resize).observe(canvas);
    if (!reduce) {
      window.addEventListener("pointermove", (e) => { pointer.x = e.clientX; pointer.y = e.clientY; wake(); }, { passive: true });
      document.documentElement.addEventListener("pointerleave", () => { pointer.x = pointer.y = -1e4; wake(); });
      new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) wake(); }).observe(canvas);
      wake();
    }
  }

  document.querySelectorAll("canvas[data-ribbon]").forEach((c) => { if (c.getContext) Ribbon(c); });
})();
