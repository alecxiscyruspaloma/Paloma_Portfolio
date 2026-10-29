document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('nav-active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when a navigation link is clicked
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('nav-active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }

    // 2. Interactive Lanyard / Student ID Click Swing Effect
    const idLanyard = document.getElementById('idLanyard');
    if (idLanyard) {
        let isSwinging = false;
        idLanyard.addEventListener('click', () => {
            if (isSwinging) return;
            isSwinging = true;

            idLanyard.style.transition = 'transform 0.2s ease-in-out';
            idLanyard.style.transform = 'rotate(10deg)';

            setTimeout(() => {
                idLanyard.style.transform = 'rotate(-8deg)';
            }, 200);

            setTimeout(() => {
                idLanyard.style.transform = 'rotate(5deg)';
            }, 400);

            setTimeout(() => {
                idLanyard.style.transform = 'rotate(-2deg)';
            }, 600);

            setTimeout(() => {
                idLanyard.style.transform = 'rotate(0deg)';
                isSwinging = false;
            }, 800);
        });
    }

    // 3. Smooth Scroll Reveal Animation (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        root: null,
        threshold: 0.15
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 4. Contact Form Submission Simulation
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm && formSuccess) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload

            contactForm.style.display = 'none';
            formSuccess.classList.remove('hidden');

            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                formSuccess.classList.add('hidden');
            }, 5000);
        });
    }

    // 5. Dynamic Current Year in Footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
