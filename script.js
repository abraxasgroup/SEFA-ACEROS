document.addEventListener('DOMContentLoaded', () => {
  // Toggle mobile navigation
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Simple lightbox for gallery
  const images = document.querySelectorAll('.gallery-grid img');
  images.forEach((img) => {
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.className = 'lightbox-overlay';
      const enlarged = document.createElement('img');
      enlarged.className = 'lightbox-image';
      enlarged.src = img.src;
      enlarged.alt = img.alt;
      overlay.appendChild(enlarged);
      document.body.appendChild(overlay);
      overlay.addEventListener('click', () => {
        overlay.remove();
      });
    });
  });
});