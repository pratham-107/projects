let slider = document.getElementById("product-slider");
let isSliding = false;

function slideProducts() {
    if (!isSliding) {
        slider.scrollLeft += 250; // Adjust based on the card width + margin
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
            slider.scrollLeft = 0; // Reset to the start
        }
        isSliding = true;
        setTimeout(() => {
            isSliding = false;
        }, 2000); // Slide every 3 seconds
    }
}

setInterval(slideProducts, 2000);
