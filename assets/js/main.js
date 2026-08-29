/**
 * Portal Didático — Professor Marcos Rangel
 * Main JavaScript Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  // Header scroll shadow effect
  const header = document.querySelector('.header-nav');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Simple Module Search Filter if search input exists
  const searchInput = document.getElementById('search-modules');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.module-card');
      
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});
