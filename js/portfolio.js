document.addEventListener('DOMContentLoaded', function() {
  const projects = document.querySelectorAll('.project');
  const slides = document.querySelectorAll('.portfolio');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  function updateImage(element, imageSrc) {
    if (element) {
      element.setAttribute('src', imageSrc);
    }
  }

function handleProjectClick(event) {
  const currentProjects = slides[currentSlide].querySelectorAll('.project');
  currentProjects.forEach(project => project.classList.remove('active'));
  event.currentTarget.classList.add('active');

  const imageSrc = event.currentTarget.getAttribute('data-image') || event.currentTarget.getAttribute('data-image2');
  const linkHref = event.currentTarget.getAttribute('data-link');

  const imageElement = currentSlide === 0
    ? document.getElementById('project-image')
    : document.getElementById('project-image2');

  const linkElement = currentSlide === 0
    ? document.getElementById('check-link-1')
    : document.getElementById('check-link-2');

  updateImage(imageElement, imageSrc);
  if (linkHref) {
    linkElement.setAttribute('href', linkHref);
  }
}



  projects.forEach(project => {
    project.addEventListener('click', handleProjectClick);
  });

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = (i === index) ? 'flex' : 'none';
      dots[i].classList.toggle('active', i === index);
    });

    currentSlide = index;

    // Reset the active project class and image for the new slide
    projects.forEach(project => project.classList.remove('active'));
    const activeProjects = slides[index].querySelectorAll('.project');
    if (activeProjects.length > 0) {
      activeProjects[0].classList.add('active');
      const imageSrc = activeProjects[0].getAttribute('data-image') || activeProjects[0].getAttribute('data-image2');
      if (index === 0) {
        const projectImage = document.getElementById('project-image');
        updateImage(projectImage, imageSrc);
      } else if (index === 1) {
        const projectImage2 = document.getElementById('project-image2');
        updateImage(projectImage2, imageSrc);
      }
    }
  }
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });

  showSlide(currentSlide);


  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

});





