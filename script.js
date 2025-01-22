// js/script.js
const sections = document.querySelectorAll('section');
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

// Intersection Observer for scroll animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop observing once shown
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});

// Dark Mode Toggle
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Store user's preference in local storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
});

// Check local storage for saved mode on page load
if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark-mode');
}

// Optional: Smooth scrolling for anchor links (if you add them)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});