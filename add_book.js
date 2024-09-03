// Toggle Event
document.addEventListener("DOMContentLoaded", function() {
    const detailsIcon = document.querySelector('.details_icon');
    const taskbar = document.querySelector('.taskbar');
    const taskbarButtons = document.querySelector('.taskbar-buttons');

    detailsIcon.addEventListener('click', function() {
        taskbar.classList.toggle('active');
        if (taskbar.classList.contains('active')) {
            taskbarButtons.style.maxHeight = taskbarButtons.scrollHeight + "px";
            taskbarButtons.style.opacity = "1";
        } else {
            taskbarButtons.style.maxHeight = "0";
            taskbarButtons.style.opacity = "0";
        }
    });
});

//Book Add
document.getElementById('book-images').addEventListener('change', function() {
    const imagePreview = document.getElementById('image-preview');
    imagePreview.innerHTML = '';

    Array.from(this.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            imagePreview.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
});

document.getElementById('swap-checkbox').addEventListener('change', function() {
    var swapDetails = document.getElementById('swap-details');
    if (this.checked) {
        swapDetails.style.display = 'block';
    } else {
        swapDetails.style.display = 'none';
    }
});

document.getElementById('negotiable-checkbox').addEventListener('change', function() {
    var minSellingPrice = document.getElementById('min-selling-price');
    if (this.checked) {
        minSellingPrice.disabled = false;
    } else {
        minSellingPrice.disabled = true;
        minSellingPrice.value = ''; // Clear the value when disabled
    }
});

document.getElementById('calculate-button').addEventListener('click', function() {
    var buyingPrice = parseFloat(document.getElementById('buying-price').value);
    var condition = document.getElementById('book-condition').value;
    var sellingPrice = document.getElementById('selling-price');

    var percentage;
    switch(condition) {
        case 'new': percentage = 0.80; break;
        case 'very-good': percentage = 0.75; break;
        case 'good': percentage = 0.70; break;
        case 'fair': percentage = 0.65; break;
        case 'poor': percentage = 0.50; break;
        default: percentage = 0;
    }

    if (!isNaN(buyingPrice)) {
        sellingPrice.value = (buyingPrice * percentage).toFixed(2);
    }
});

document.getElementById('swap-book-images').addEventListener('change', function() {
    const swapImagePreview = document.getElementById('swap-image-preview');
    swapImagePreview.innerHTML = '';

    Array.from(this.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            swapImagePreview.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
});
