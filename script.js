// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const menu = document.getElementById('menu');
if (navToggle){
  navToggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth'});
      if (menu.classList.contains('open')) menu.classList.remove('open');
    }
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Fake contact form (no backend) — shows a success note
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
if (form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    form.reset();
    formMsg.textContent = `Thanks ${data.name}! We’ll reply at ${data.email}.`;
    setTimeout(()=> formMsg.textContent = '', 5000);
  });
}
