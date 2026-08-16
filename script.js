// Minimal, intentional: just keeps the nav aware of which section is in view.
// No scroll-jacking, no parallax — the hero's schematic draw-in is the one
// animated moment on this page, everything else stays quiet.

const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.topnav-links a');

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.style.color = link.getAttribute('href') === `#${id}`
              ? 'var(--linework)'
              : '';
          });
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px' }
  );
  sections.forEach((s) => { if (s.id) observer.observe(s); });
}
