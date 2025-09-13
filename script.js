// Tilt 3D (funciona con dedo en móvil y mouse en desktop)
(() => {
  const MAX = 12; // grados
  const els = document.querySelectorAll('[data-tilt]');

  function tilt(e){
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const p = e.touches?.[0] ?? e;
    const cx = p.clientX - r.left;
    const cy = p.clientY - r.top;
    const rx = ((cy / r.height) - 0.5) * -2 * MAX;
    const ry = ((cx / r.width)  - 0.5) *  2 * MAX;
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  }

  function reset(e){
    e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
  }

  els.forEach(el => {
    el.addEventListener('pointermove', tilt, {passive:true});
    el.addEventListener('pointerenter', tilt, {passive:true});
    el.addEventListener('pointerleave', reset);
    el.addEventListener('touchend', reset);
  });
})();
