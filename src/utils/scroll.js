export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = id === 'home' ? 0 : el.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({ top, behavior: 'smooth' });
}
