document.addEventListener('DOMContentLoaded', function() {
    console.log('titles.js loaded');

const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  

   hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

    const titles = [
    'Web developer',
    'Mobile developer',
    'App designer',
    'UI/UX designer',
    'Software engineer',
    'Full-stack developer'
  ];

// Speed settings
const typingSpeed   = 100;   // ms per character when typing
const deletingSpeed = 50;    // ms per character when deleting
const pauseBetween  = 2000;  // ms to wait after a full title


  const el = document.getElementById('dynamic-title');
  let titleIndex = 0;
  let charIndex  = 0;
  let mode       = 'typing'; // or 'deleting'

  function tick() {
    const fullText = titles[titleIndex];

    if (mode === 'typing') {
      charIndex++;
      el.textContent = fullText.slice(0, charIndex);
      if (charIndex === fullText.length) {
        mode = 'deleting';
        return setTimeout(tick, pauseBetween);
      }
      return setTimeout(tick, typingSpeed);
    }

    // deleting
    charIndex--;
    el.textContent = fullText.slice(0, charIndex);
    if (charIndex === 0) {
      mode = 'typing';
      titleIndex = (titleIndex + 1) % titles.length;
    }
    setTimeout(tick, deletingSpeed);
  }

  // start the loop
  tick();
});

 
