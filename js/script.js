// 1. Product Quantity Update in Cart
const quantityInput = document.querySelector('.quantity-input');
const updateButton = document.querySelector('.update-btn');

if (updateButton && quantityInput) {
  updateButton.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value, 10);
    if (quantity > 0) {
      // Simulate updating the cart (this could be connected to a cart API)
      alert(`Quantity updated to ${quantity}`);
    } else {
      alert('Please enter a valid quantity.');
    }
  });
}

// 2. Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 3. Adding Product to Cart and Updating Cart Count
const addToCartBtns = document.querySelectorAll('.btn-add-to-cart');
let cartCount = 0;

addToCartBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert('Product added to cart!');
  });
});

// 4. Sticky Navbar on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// 5. Initialize Bootstrap Carousel (for Featured Products)
const carouselElement = document.querySelector('#carouselExample');
if (carouselElement) {
  new bootstrap.Carousel(carouselElement, {
    interval: 2000, // Change image every 2 seconds
    ride: 'carousel',
  });
}

// 6. Newsletter Form Validation
const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
form.addEventListener('submit', function(event) {
  const emailValue = emailInput.value.trim();
  if (emailValue === '') {
    alert('Please enter a valid email address.');
    event.preventDefault();
  } else if (!emailValue.includes('@')) {
    alert('Please enter a valid email address with "@"');
    event.preventDefault();
  }
});

// 7. Countdown Timer (Limited Time Offers)
const countdownElement = document.getElementById('countdown');
if (countdownElement) {
  const targetDate = new Date('2025-12-31T23:59:59').getTime();

  const updateCountdown = () => {
    const currentTime = new Date().getTime();
    const timeLeft = targetDate - currentTime;

    if (timeLeft <= 0) {
      countdownElement.innerText = 'Offer has ended!';
    } else {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      countdownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  };

  // Update the countdown every second
  setInterval(updateCountdown, 1000);
}

// 8. Dark Mode Toggle
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

if (darkModeToggle) {
  darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
  });

  // Check for saved dark mode setting
  if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
  }
}

// 9. Show/Hide Password (for login form)
const passwordInput = document.querySelector('#password');
const showPasswordBtn = document.querySelector('#show-password-btn');

if (showPasswordBtn && passwordInput) {
  showPasswordBtn.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    showPasswordBtn.classList.toggle('fa-eye-slash'); // Toggle icon
  });
}

// 10. Scroll to Top Button (Optional)
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
if (scrollToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
