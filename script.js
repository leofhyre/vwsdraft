document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. SCROLL REVEAL ANIMATION (Intersection Observer)
    // ==========================================
    const sectionsToAnimate = document.querySelectorAll(
        "#about, #services, #companies, #products, #certifications, #contact"
    );

    sectionsToAnimate.forEach(section => {
        section.classList.add("reveal-section");
    });

    const observerOptions = {
        root: null, 
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px" 
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active-view");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sectionsToAnimate.forEach(section => {
        sectionObserver.observe(section);
    });


    // ==========================================
    // 2. DYNAMIC PRODUCT GRID FILTER LOGIC
    // ==========================================
    const filterButtons = document.querySelectorAll(".filter-btn");
    const productCards = document.querySelectorAll(".product-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            document.querySelector(".filter-btn.active").classList.remove("active");
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            productCards.forEach(card => {
                if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                    card.style.display = "block";
                    card.style.animation = "fadeInUp 0.4s ease forwards";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });


    // ==========================================
    // 3. INTERACTIVE CONTACT FORM SUBMISSION
    // ==========================================
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            console.log("Inquiry Form Sent:", { name, email, message });

            formFeedback.classList.remove("hidden");
            contactForm.reset();

            setTimeout(() => {
                formFeedback.classList.add("hidden");
            }, 5000);
        });
    }

    // ==========================================
    // 4. MOBILE ACCORDION NAVIGATION INTERACTION
    // ==========================================
    const mobileMenuToggle = document.getElementById("mobileMenuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-links a");

    if (mobileMenuToggle && navMenu) {
        // Toggle open/close on hamburger click
        mobileMenuToggle.addEventListener("click", () => {
            mobileMenuToggle.classList.toggle("active");
            navMenu.classList.toggle("open");
        });

        // Close menu immediately upon clicking any link asset item
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenuToggle.classList.remove("active");
                navMenu.classList.remove("open");
            });
        });
    }
});