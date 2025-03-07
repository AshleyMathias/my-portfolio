document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navbar links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Fade-in effect for sections
    const sections = document.querySelectorAll("section");

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run once on page load

    // Fixed Typing Effect
    const typingText = document.querySelector(".typing-text");
    const words = ["AI & ML Enthusiast", "Web Developer", "Tech Innovator"];
    let index = 0, charIndex = 0, isDeleting = false;

    function typeEffect() {
        let currentWord = words[index];
        let speed = isDeleting ? 50 : 100; // Faster deletion

        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex--);
        } else {
            typingText.textContent = currentWord.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentWord.length + 1) {
            isDeleting = true;
            speed = 1000; // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % words.length; // Move to next word
            speed = 500; // Pause before typing next word
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
});
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100, // Adjust number of particles
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": { "value": "#ffffff" },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 3,
            "random": true
        },
        "move": {
            "enable": true,
            "speed": 2
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" }
        },
        "modes": {
            "repulse": { "distance": 100 },
            "push": { "particles_nb": 4 }
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const skillsSection = document.getElementById("skills");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillsSection.classList.add("visible");
            }
        });
    });

    observer.observe(skillsSection);
});
