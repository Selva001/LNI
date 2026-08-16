/* =========================================================
   LNI BAKE AUTOMATION
   JAVASCRIPT
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("show");

});


/* Close mobile menu after clicking a menu item */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("show");

    });

});


/* ================= ACTIVE MENU ================= */

window.addEventListener("scroll", function () {

    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = window.scrollY + 150;

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(function (link) {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") === "#" + sectionId
                ) {

                    link.classList.add("active");

                }

            });

        }

    });

});


/* ================= EQUIPMENT SEARCH ================= */

function searchProducts() {

    const input =
        document.getElementById("productSearch");

    const searchText =
        input.value.toLowerCase().trim();

    const products =
        document.querySelectorAll(".equipment-card");

    const noProductFound =
        document.getElementById("noProductFound");

    let visibleProducts = 0;


    products.forEach(function (product) {

        const productName =
            product.getAttribute("data-name").toLowerCase();

        if (productName.includes(searchText)) {

            product.style.display = "block";

            visibleProducts++;

        } else {

            product.style.display = "none";

        }

    });


    if (visibleProducts === 0) {

        noProductFound.style.display = "block";

    } else {

        noProductFound.style.display = "none";

    }

}


/* ================= WHATSAPP ENQUIRY ================= */

/*
    IMPORTANT:
    Replace this number with your actual WhatsApp number.

    Example:
    const whatsappNumber = "919876543210";

    Do not use:
    +91 98765 43210
*/

const whatsappNumber = "91XXXXXXXXXX";


const enquiryForm =
    document.getElementById("enquiryForm");


enquiryForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const company =
        document.getElementById("company").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const requirement =
        document.getElementById("requirement").value;

    const message =
        document.getElementById("message").value.trim();


    if (!name || !mobile || !requirement) {

        alert(
            "Please enter your name, mobile number and requirement."
        );

        return;

    }


    const whatsappMessage =
`Hello LNI BAKE Automation,

I would like to enquire about your commercial bakery solutions.

Name: ${name}
Company: ${company}
Mobile: ${mobile}
Email: ${email}

Requirement:
${requirement}

Message:
${message}

Please contact me regarding my bakery project.`;


    const encodedMessage =
        encodeURIComponent(whatsappMessage);


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


    window.open(
        whatsappURL,
        "_blank"
    );

    // Clear the enquiry form after submission
    enquiryForm.reset();

});


/* ================= IMAGE FALLBACK ================= */

/*
   If an external image does not load,
   show a clean bakery-themed background.
*/

const images =
    document.querySelectorAll("img");

images.forEach(function (image) {

    image.addEventListener("error", function () {

        this.style.background =
            "#6e4027";

        this.style.minHeight =
            "180px";

        this.removeAttribute("src");

    });

});


/* ================= CURRENT YEAR ================= */

const currentYear =
    new Date().getFullYear();

const footerYear =
    document.querySelector(".footer-bottom p");

if (footerYear) {

    footerYear.innerHTML =
        `© ${currentYear} LNI BAKE Automation. All Rights Reserved.`;

}

/* =========================================================
   BAKERY STARTUP SECTION
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const startupSection =
        document.querySelector(".bakery-startup");

    if (!startupSection) return;

    const cards =
        startupSection.querySelectorAll(
            ".startup-flow-item, .journey-card"
        );

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "startup-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

    cards.forEach(function (card) {
        observer.observe(card);
    });

});

