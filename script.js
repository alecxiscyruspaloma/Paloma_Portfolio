document.addEventListener('DOMContentLoaded', () => {

    // 1. Dynamic Footer Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Mobile Navigation Toggle (Hamburger Menu)
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }

    // 3. Navbar Sticky & Back-to-Top Button
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 4. Interactive Lanyard Swing Effect on Click
    const idLanyard = document.getElementById('idLanyard');
    if (idLanyard) {
        let swinging = false;
        idLanyard.addEventListener('click', () => {
            if (swinging) return;
            swinging = true;
            
            idLanyard.style.transition = 'transform 0.2s ease-in-out';
            idLanyard.style.transform = 'rotate(12deg)';

            setTimeout(() => {
                idLanyard.style.transform = 'rotate(-10deg)';
            }, 200);

            setTimeout(() => {
                idLanyard.style.transform = 'rotate(6deg)';
            }, 400);

            setTimeout(() => {
                idLanyard.style.transform = 'rotate(-3deg)';
            }, 600);

            setTimeout(() => {
                idLanyard.style.transform = 'rotate(0deg)';
                swinging = false;
            }, 800);
        });
    }

    // 5. Scroll Active Link Highlighting
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // 6. Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 7. Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    const formAlert = document.getElementById('form-alert');

    if (contactForm && formAlert) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            formAlert.classList.add('success');
            formAlert.textContent = "Salamat! Ang iyong mensahe ay naipadala na.";

            contactForm.reset();

            setTimeout(() => {
                formAlert.classList.remove('success');
            }, 5000);
        });
    }
});
