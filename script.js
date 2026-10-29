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

  // 2. Interactive Lanyard / Student ID Spring Bounce Effect
    const idLanyard = document.getElementById('idLanyard');
    if (idLanyard) {
        idLanyard.addEventListener('click', () => {
            // Kung kasalukuyan pang nagba-bounce, huwag munang pansinin
            if (idLanyard.classList.contains('bounce-active')) return;

            // Idagdag ang animation class para mag-bounce/swing
            idLanyard.classList.add('bounce-active');

            // Alisin ang class pagkalipas ng 850ms para pwede na ulit pindutin
            setTimeout(() => {
                idLanyard.classList.remove('bounce-active');
            }, 850);
        });

        // 3D Mouse Hover Tilt Effect (Hindi maaapektuhan ang bounce)
        idLanyard.addEventListener('mousemove', (e) => {
            if (idLanyard.classList.contains('bounce-active')) return;

            const rect = idLanyard.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateX = (-y / 10);
            const rotateY = (x / 10);
            
            idLanyard.style.transition = 'transform 0.05s ease-out';
            idLanyard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        idLanyard.addEventListener('mouseleave', () => {
            if (!idLanyard.classList.contains('bounce-active')) {
                idLanyard.style.transition = 'transform 0.5s ease-in-out';
                idLanyard.style.transform = 'rotateX(0deg) rotateY(0deg) rotate(0deg)';
            }
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
