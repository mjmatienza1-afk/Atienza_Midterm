// Get all navigation links
const navLinks = document.querySelectorAll(".nav-links a");

// Add click event to each link
navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {

        event.preventDefault();

        const section = document.querySelector(link.getAttribute("href"));

        section.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Get the contact form
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

// Add submit event to the form
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    message.textContent = "Thank you, " + name + "! Your form was submitted.";
    message.style.color = "#4a8f5c";

    form.reset();
});