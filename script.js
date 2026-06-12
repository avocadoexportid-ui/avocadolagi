// =========================================
// MOBILE MENU TOGGLE
// =========================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when a nav link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// =========================================
// FAQ ACCORDION
// =========================================
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector('i');
    const isOpen = answer.style.display === 'block';

    // Close all FAQ items
    document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
    document.querySelectorAll('.faq-question i').forEach(i => {
      i.classList.remove('fa-minus');
      i.classList.add('fa-plus');
    });

    // If the clicked item was closed, open it
    if (!isOpen) {
      answer.style.display = 'block';
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    }
  });
});
