const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("close-lightbox");

// Open the lightbox when an image is clicked
galleryImages.forEach(function (image) {
image.addEventListener("click", function () {
lightboxImage.src = image.src;
lightboxImage.alt = image.alt;

    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    closeButton.focus();
});

});

// Close the lightbox when the close button is clicked
closeButton.addEventListener("click", closeLightbox);

// Close the lightbox when the dark background is clicked
lightbox.addEventListener("click", function (event) {
if (event.target === lightbox) {
closeLightbox();
}
});

// Close the lightbox when Escape is pressed
document.addEventListener("keydown", function (event) {
if (event.key === "Escape" && lightbox.classList.contains("active")) {
closeLightbox();
}
});

function closeLightbox() {
lightbox.classList.remove("active");
lightbox.setAttribute("aria-hidden", "true");
lightboxImage.src = "";
}