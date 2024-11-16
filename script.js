document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];
    let images = [];
    let currentImageIndex = 0;

    document.querySelectorAll(".project img").forEach(img => {
        img.addEventListener("click", function() {
            images = this.getAttribute("data-images").split(", ");
            currentImageIndex = 0;
            showImage();

            modal.style.display = "block";
            captionText.innerHTML = this.alt;
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    function showImage() {
        modalImg.src = images[currentImageIndex];
        modalImg.style.maxHeight = "80vh";
    }

    document.getElementById("next").onclick = function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage();
    };

    document.getElementById("prev").onclick = function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage();
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});