// Menu Toggle for Mobile View
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Counter for Statistics
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / 200;

        if(count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target;
        }
    };

    window.addEventListener('scroll', () => {
        const statsSection = document.querySelector('.stats-section');
        const statsPos = statsSection.getBoundingClientRect().top;

        if(statsPos < window.innerHeight) {
            updateCounter();
        }
    });
});
