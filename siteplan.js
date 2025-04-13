
document.querySelector('.nav li').addEventListener('click', function() {
    document.querySelector('.nav li.active').classList.remove('active');
    this.classList.add('active');
  });

  document.querySelector('input[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Message sent successfully!');
  });

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      document.querySelector('header').classList.add('fixed');
    } else {
      document.querySelector('header').classList.remove('fixed');
    }
  });
  
  document.querySelector('.back-to-top').addEventListener('click', function() {
    window.scrollTo(0, 0);
  });
 
  document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('.nav').classList.remove('open');
  });
  
  document.querySelector('.open-menu').addEventListener('click', function() {
    document.querySelector('.nav').classList.add('open');
  });