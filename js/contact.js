document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropdown_menu = document.querySelector('.dropdown_menu');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

  
    toggleBtn.onclick = function () {
        dropdown_menu.classList.toggle('open')
        const isOpen = dropdown_menu.classList.contains('open')
  
        toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    }
  

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  const form = document.getElementById('contact-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method:  'POST',
        body:    data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        alert('Merci ! Votre message a été envoyé.');
        form.reset();
      } else {
        alert('Oups… problème d’envoi.');
      }
    } catch (err) {
      console.error(err);
      alert('Erreur réseau : réessayez plus tard.');
    }
  });
  });

