// Animasi smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efek parallax untuk hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Animasi navbar saat scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Animasi fade-in untuk elemen saat di-scroll
const observerOptions = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-category, .contact-item').forEach((element) => {
    element.classList.add('fade-out');
    observer.observe(element);
});

// Efek hover untuk project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Animasi typing untuk hero text
const text = "I'm Unknown1337";
const heroText = document.querySelector('.glitch-text');
let index = 0;

function typeWriter() {
    if (index < text.length) {
        heroText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation after page load
window.addEventListener('load', () => {
    heroText.textContent = '';
    setTimeout(typeWriter, 1000);
});

// Language switcher
const languageSwitch = document.querySelector('.language-switch');
languageSwitch.addEventListener('click', () => {
    const currentLang = languageSwitch.textContent;
    languageSwitch.textContent = currentLang === 'EN' ? 'ID' : 'EN';
    // Add your language switching logic here
});

// Add dynamic background particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    document.body.appendChild(particle);
    
    const size = Math.random() * 5 + 2;
    const speedX = (Math.random() - 0.5) * 3;
    const speedY = Math.random() * 3 + 1;
    const startPosX = Math.random() * window.innerWidth;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${startPosX}px`;
    particle.style.top = '-20px';
    
    let posX = startPosX;
    let posY = -20;
    
    function updatePosition() {
        posX += speedX;
        posY += speedY;
        
        particle.style.transform = `translate(${speedX}px, ${posY}px)`;
        
        if (posY < window.innerHeight + 20) {
            requestAnimationFrame(updatePosition);
        } else {
            particle.remove();
        }
    }
    
    requestAnimationFrame(updatePosition);
}

// Create particles periodically
setInterval(createParticle, 200);

// Menu Toggle Functionality
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Close menu when clicking on a link
const navLinksItems = document.querySelectorAll('.nav-links a');
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
}); 