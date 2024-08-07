// script.js
const starsContainer = document.querySelector('.stars');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 3 + 1; // Random size between 1 and 4
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 1 + 0.5}s`; // Random twinkle speed
    starsContainer.appendChild(star);
}

// Create multiple stars
for (let i = 0; i < 100; i++) {
    createStar();
}

// Mouse move effect
document.addEventListener('mousemove', (e) => {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const x = (Math.random() - 0.5) * 2; // Random offset
        const y = (Math.random() - 0.5) * 2; // Random offset
        const zoom = Math.random() * 0.5 + 1; // Zoom factor between 1 and 1.5
        star.style.transform = `translate(${x}px, ${y}px) scale(${zoom})`;
    });
});
