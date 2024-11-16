document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contact form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const action = form.getAttribute("action");

        try {
            const response = await fetch(action, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                alert("Thank you! Your message has been sent.");
                form.reset();
            } else {
                alert("Oops! There was a problem submitting your form.");
            }
        } catch (error) {
            alert("Error: Unable to submit the form. Please try again later.");
        }
    });

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

            modal.style.display = "block";
            captionText.innerHTML = this.alt;
        });
    });

    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    function showImage() {
        modalImg.src = images[currentImageIndex];
        modalImg.style.maxHeight = "80vh";
    }

    document.getElementById("next").onclick = function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage();
    };

    document.getElementById("prev").onclick = function () {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage();
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});