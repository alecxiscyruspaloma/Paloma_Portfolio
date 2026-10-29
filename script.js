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
            if (idLanyard.classList.contains('bounce-active')) return;
            idLanyard.classList.add('bounce-active');
            setTimeout(() => {
                idLanyard.classList.remove('bounce-active');
            }, 850);
        });

        // 3D Mouse Hover Tilt Effect
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

    // 4. Contact Form Simulation
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm && formSuccess) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

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

    // 6. Auto-Play & Interactive Artwork Carousel
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const container = document.querySelector('.carousel-container');

    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            currentSlide = (index + slides.length) % slides.length;

            slides[currentSlide].classList.add('active');
            if (dots[currentSlide]) {
                dots[currentSlide].classList.add('active');
            }
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                nextSlide();
                resetTimer();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                prevSlide();
                resetTimer();
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                showSlide(index);
                resetTimer();
            });
        });

        function startSlideTimer() {
            slideInterval = setInterval(nextSlide, 4000); // 4 seconds bago mag-slide nang kusa
        }

        function resetTimer() {
            clearInterval(slideInterval);
            startSlideTimer();
        }

        if (container) {
            container.addEventListener('mouseenter', () => clearInterval(slideInterval));
            container.addEventListener('mouseleave', () => startSlideTimer());
        }

        startSlideTimer();
    }

    // 7. Artwork Lightbox (Expand Image on Click)
    const lightboxModal = document.getElementById('artworkLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.querySelector('.lightbox-close');

    slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (img) {
            img.style.cursor = 'pointer'; 
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                if (slide.classList.contains('active')) {
                    lightboxImg.src = img.src;
                    lightboxModal.classList.add('active');
                }
            });
        }
    });

    if (lightboxModal) {
        lightboxModal.addEventListener('click', () => {
            lightboxModal.classList.remove('active');
        });
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightboxModal.classList.remove('active');
        });
    }

    // 8. Header Profile to ID Card Popup Modal
    const profilePopupBtn = document.getElementById('profilePopupBtn');
    const idPopupModal = document.getElementById('idPopupModal');
    const idPopupClose = document.getElementById('idPopupClose');

    if (profilePopupBtn && idPopupModal) {
        profilePopupBtn.addEventListener('click', () => {
            idPopupModal.classList.add('active');
        });

        if (idPopupClose) {
            idPopupClose.addEventListener('click', () => {
                idPopupModal.classList.remove('active');
            });
        }

        idPopupModal.addEventListener('click', (e) => {
            if (e.target === idPopupModal) {
                idPopupModal.classList.remove('active');
            }
        });
    }
});
