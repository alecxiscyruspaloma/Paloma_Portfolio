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

    // 2. Smooth Scroll Reveal Animation (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15 // Triggers when 15% of the section is visible
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 3. Contact Form Submission Simulation
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm && formSuccess) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload

            // Here you could add AJAX fetch to send email if needed, 
            // but for portfolio showcase, we animate/show success feedback:
            contactForm.style.display = 'none';
            formSuccess.classList.remove('hidden');

            // Reset form after a few seconds if desired
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                formSuccess.classList.add('hidden');
            }, 5000);
        });
    }

    // 4. Dynamic Current Year in Footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
