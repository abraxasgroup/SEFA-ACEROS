// Simple scroll reveal effect for sections
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll('.animate').forEach(section => {
    observer.observe(section);
  });

  // Observamos también cada tarjeta de producto para aplicar la animación de entrada
  document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
  });
});
