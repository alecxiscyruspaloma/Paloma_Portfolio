// Mobile navigation: open/close the menu when the button is clicked.
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

// Close the mobile menu after choosing a section.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

// Reveal sections gently when they enter the screen.
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animate each item only once.
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  // Fallback for older browsers: show everything without the animation.
  revealItems.forEach((item) => item.classList.add("visible"));
}

// Keep the footer year current automatically.
document.querySelector("#year").textContent = new Date().getFullYear();

// The form uses mailto so it works without a backend or server.
// Replace this address with your real email before publishing.
const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");
const portfolioEmail = "your.email@example.com";

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

  // Opens the visitor's default email app with the message filled in.
  window.location.href = `mailto:${portfolioEmail}?subject=${subject}&body=${body}`;
  formNote.textContent = "Your email app should open with your message ready. If it doesn't, email me directly.";
});
