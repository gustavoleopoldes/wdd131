
document.addEventListener('DOMContentLoaded', function() {

  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('nav ul li a');
  
  navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
          link.parentElement.classList.add('active');
      }
  });

  const backToTopBtn = document.createElement('button');
  backToTopBtn.classList.add('back-to-top');
  backToTopBtn.innerHTML = '↑';
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTopBtn);

  backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

  window.addEventListener('scroll', function() {

      if (window.scrollY > 300) {
          backToTopBtn.style.display = 'block';

          document.querySelector('header').classList.add('scrolled');
      } else {
          backToTopBtn.style.display = 'none';
          document.querySelector('header').classList.remove('scrolled');
      }
  });
  
  const contactForm = document.querySelector('form');
  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          event.preventDefault();

          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;

          if (name === '' || email === '' || message === '') {
              alert('Please fill in all fields');
              return;
          }

          const formData = {
              name: name,
              email: email,
              message: message,
              date: new Date().toLocaleString()
          };

          let messages = [];

          if (localStorage.getItem('messages')) {
              messages = JSON.parse(localStorage.getItem('messages'));
          }

          messages.push(formData);
   
          localStorage.setItem('messages', JSON.stringify(messages));
   
          alert('Thank you for your message, ' + formData.name + '! We will get back to you soon.');

          contactForm.reset();
 
          displayMessages(messages);
      });
  }
  
  function displayMessages(messagesArray) {

      let messagesContainer = document.getElementById('messages-container');
      
      if (!messagesContainer) {
          messagesContainer = document.createElement('div');
          messagesContainer.id = 'messages-container';
          messagesContainer.style.marginTop = '30px';
          messagesContainer.style.padding = '20px';
          messagesContainer.style.backgroundColor = '#f0f0f0';
          messagesContainer.style.borderRadius = '5px';
          
          const messagesTitle = document.createElement('h3');
          messagesTitle.textContent = 'Recent Messages';
          messagesContainer.appendChild(messagesTitle);

          if (contactForm) {
              contactForm.parentNode.insertBefore(messagesContainer, contactForm.nextSibling);
          }
      }

      messagesContainer.innerHTML = '<h3>Recent Messages</h3>';

      messagesArray.forEach(function(msg, index) {
          const messageElement = document.createElement('div');
          messageElement.classList.add('message');
          messageElement.style.margin = '10px 0';
          messageElement.style.padding = '10px';
          messageElement.style.border = '1px solid #ddd';

          if (index % 2 === 0) {
              messageElement.style.backgroundColor = '#e9f5f9';
          }
          
          messageElement.innerHTML = `
              <p><strong>From:</strong> ${msg.name} (${msg.email})</p>
              <p><strong>Message:</strong> ${msg.message}</p>
              <p><strong>Sent:</strong> ${msg.date}</p>
          `;
          
          messagesContainer.appendChild(messageElement);
      });
  }
  
  const discoverButton = document.querySelector('main button');
  if (discoverButton) {
      discoverButton.addEventListener('click', function() {

          const beaches = [
              'Jurerê Internacional',
              'Canasvieiras',
              'Ingleses',
              'Joaquina',
              'Campeche',
              'Barra da Lagoa',
              'Praia Mole',
              'Lagoinha do Leste'
          ];

          const randomBeach = beaches[Math.floor(Math.random() * beaches.length)];

          const beachRecommendation = document.createElement('div');
          beachRecommendation.classList.add('beach-recommendation');
          beachRecommendation.style.marginTop = '20px';
          beachRecommendation.style.padding = '15px';
          beachRecommendation.style.backgroundColor = '#e0f7fa';
          beachRecommendation.style.borderRadius = '5px';
          beachRecommendation.style.textAlign = 'center';
          
          beachRecommendation.innerHTML = `
              <h3>We recommend you visit:</h3>
              <p class="beach-name">${randomBeach}</p>
              <p>Click again for another recommendation!</p>
          `;
          
          const existingRecommendation = document.querySelector('.beach-recommendation');
          if (existingRecommendation) {
              existingRecommendation.remove();
          }
          
          discoverButton.parentNode.insertBefore(beachRecommendation, discoverButton.nextSibling);
      });
  }
});