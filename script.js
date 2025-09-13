<script>
/* Tilt 3D con soporte mouse + dedo (pointer events) */
(() => {
  const MAX = 12; // grados máx. de inclinación
  const els = document.querySelectorAll('[data-tilt]');

  function tilt(e){
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const cx = (e.clientX ?? (e.touches && e.touches[0]?.clientX)) - r.left;
    const cy = (e.clientY ?? (e.touches && e.touches[0]?.clientY)) - r.top;
    if (cx == null || cy == null) return;

    const rx = ((cy / r.height) - 0.5) * -2 * MAX;
    const ry = ((cx / r.width)  - 0.5) *  2 * MAX;

    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  }

  function reset(e){
    e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
  }

  els.forEach(el => {
    el.addEventListener('pointermove', tilt, {passive: true});
    el.addEventListener('pointerenter', tilt, {passive: true});
    el.addEventListener('pointerleave', reset);
    el.addEventListener('touchend',   reset);
  });
})();
</script>
