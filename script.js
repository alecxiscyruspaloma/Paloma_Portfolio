
/* Mobile navigation */
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

/* Keep reveal elements visible */
document.querySelectorAll(".reveal").forEach((element) => {
  element.classList.add("visible");
});

/* Automatic footer year */
const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* Contact form: prepares an email */
const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

/* Replace this with your own email address */
const portfolioEmail = "your.email@example.com";

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name")?.value.trim() || "";
    const email = document.querySelector("#email")?.value.trim() || "";
    const message = document.querySelector("#message")?.value.trim() || "";

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    if (portfolioEmail === "your.email@example.com") {
      if (formNote) {
        formNote.textContent =
          "Please update the email address in script.js before using this form.";
      }
      return;
    }

    if (formNote) {
      formNote.textContent = "Opening your default email app...";
    }

    window.location.href =
      `mailto:${portfolioEmail}?subject=${subject}&body=${body}`;
  });
}

/* Click the student ID to make it swing */
const idLanyard = document.querySelector("#idLanyard");
const idLace = idLanyard?.querySelector(".id-lace");

if (idLace) {
  idLanyard.addEventListener("click", () => {
    if (idLace.classList.contains("swing")) return;

    idLace.classList.add("swing");
  });

  idLace.addEventListener("animationend", () => {
    idLace.classList.remove("swing");
  });
}
