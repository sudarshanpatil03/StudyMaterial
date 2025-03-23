

// Toggle mobile navigation
function toggleMobileNav() {
  const navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show');
  } else {
    navbarCollapse.classList.add('show');
  }
}

// Add smooth scrolling to all links
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a');
  
  for (const link of links) {
    link.addEventListener('click', function(e) {
      // Only apply to in-page links that start with #
      const href = this.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Smooth scroll to element
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Offset for fixed navbar
            behavior: 'smooth'
          });
          
          // Update URL
          history.pushState(null, null, href);
        }
      }
    });
  }
  
  // Add animation to cards on scroll
  const animateElements = document.querySelectorAll('.card, .hero-section, .daily-notes');
  
  function checkScroll() {
    animateElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        el.classList.add('visible');
      }
    });
  }
  
  // Add initial visible class
  checkScroll();
  
  // Check scroll on scroll event
  window.addEventListener('scroll', checkScroll);
});

// Add CSS classes for browser detection (helps with browser-specific styling)
document.addEventListener('DOMContentLoaded', function() {
  // Detect browser
  const isIE = /*@cc_on!@*/false || !!document.documentMode;
  const isEdge = !isIE && !!window.StyleMedia;
  const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  const isFirefox = typeof InstallTrigger !== 'undefined';
  const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
  
  // Add browser classes to body
  const body = document.body;
  
  if (isIE) body.classList.add('ie-browser');
  if (isEdge) body.classList.add('edge-browser');
  if (isChrome) body.classList.add('chrome-browser');
  if (isFirefox) body.classList.add('firefox-browser');
  if (isSafari) body.classList.add('safari-browser');
});