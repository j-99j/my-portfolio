document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];
    let images = [];
    let currentImageIndex = 0;

    document.querySelectorAll(".project img").forEach((img) => {
        img.addEventListener("click", function () {
            images = this.getAttribute("data-images").split(", ");
            currentImageIndex = 0;
            showImage();

            modal.style.display = "flex";
            captionText.innerHTML = this.alt;
            document.body.classList.add("modal-open");
        });
    });

    closeBtn.onclick = function () {
        closeModal();
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    document.getElementById("next").onclick = function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage();
    };

    document.getElementById("prev").onclick = function () {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage();
    };

    function showImage() {
        modalImg.src = images[currentImageIndex];
        modalImg.style.maxHeight = "80vh";
        modalImg.style.maxWidth = "90vw";
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});