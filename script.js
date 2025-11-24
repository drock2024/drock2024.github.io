// Optional: highlight the active icon based on scroll position
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#icon-nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            current = id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// ===== LIGHTBOX LOGIC =====
const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// Open lightbox
galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

// Close lightbox when clicking anywhere
lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxImg.src = "";
});

