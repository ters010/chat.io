document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const headerHeight = document.querySelector('header').offsetHeight;
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
  
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    });
  });