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


// Add Item Function
// Get modal element
const modal = document.getElementById('myModal');
// Get open modal button
const addItemBtn = document.getElementById('addItemBtn');
// Get close button
const closeBtn = document.getElementsByClassName('close')[0];
// Get the form
const itemForm = document.getElementById('itemForm');

// Listen for open click
addItemBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', outsideClick);

// Listen for form submission
itemForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value; // Assuming a price input field exists
    const image = document.getElementById('image').files[0];

    if (title && description && price && image) {
        const itemList = document.getElementById('itemList');

        // Create list item
        const listItem = document.createElement('li');
        listItem.className = 'list-item';

        // Create and set img for image
        const img = document.createElement('img');
        img.alt = title;
        img.src = URL.createObjectURL(image);

        // Create content container
        const content = document.createElement('div');
        content.className = 'content';

        // Create and set h3 for title
        const h3 = document.createElement('h3');
        h3.textContent = title;

        // Create and set p for description
        const p = document.createElement('p');
        p.textContent = description;

        // Create and set p for price at the bottom
        const priceP = document.createElement('p');
        priceP.textContent = `$${price}`;
        priceP.className = 'price';

        // Create Read More button
        const readMoreBtn = document.createElement('a');
        readMoreBtn.href = '#';
        readMoreBtn.className = 'btn';
        readMoreBtn.textContent = 'Read more';

        // Append elements to content container
        content.appendChild(h3);
        content.appendChild(p);
        content.appendChild(priceP);
        content.appendChild(readMoreBtn);

        // Append img and content to list item
        listItem.appendChild(img);
        listItem.appendChild(content);

        // Append list item to the item list
        itemList.appendChild(listItem);

        // Clear form fields
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('price').value = ''; // Clear the price field
        document.getElementById('image').value = '';

        // Close modal
        closeModal();
    } else {
        alert('All fields are required!');
    }
});

// Function to open modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const cards = document.querySelectorAll('.list-item');
    let found = false;

    cards.forEach(function (card) {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchValue)) {
            card.style.opacity = '1'; // Show the item by making it visible
            card.style.position = 'relative'; // Ensure it's in the flow
            card.style.height = ''; // Reset height in case it was set to 0
            found = true;
        } else {
            card.style.opacity = '0'; // Hide the item by making it invisible
            card.style.position = 'absolute'; // Remove it from the flow
            card.style.height = '0'; // Collapse its height to avoid space
        }
    });

    // Show or hide "No Books" message based on search results
    document.getElementById('noResults').style.display = found || searchValue === '' ? 'none' : 'block';

    // If the search is empty, reset all items to be visible
    if (searchValue === '') {
        cards.forEach(function (card) {
            card.style.opacity = '1';
            card.style.position = 'relative';
            card.style.height = ''; // Reset height to default
        });
    }
});

// Filter functionality
document.querySelectorAll('.filter-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Clear the fill of all circles
        document.querySelectorAll('.filter-item .circle').forEach(circle => {
            circle.style.backgroundColor = 'transparent';
        });

        // Fill the clicked item's circle with black
        this.querySelector('.circle').style.backgroundColor = 'black';

        // Get the maximum price from the clicked item
        const maxPrice = this.getAttribute('data-max-price');

        // Filter items based on the selected price range
        filterItemsByPrice(maxPrice);
    });
});

// Function to filter items by price
function filterItemsByPrice(maxPrice) {
    const cards = document.querySelectorAll('.list-item');
    let found = false;

    cards.forEach(function (card) {
        const priceText = card.querySelector('.price').textContent.replace('$', '');
        const price = parseFloat(priceText);

        if (price <= maxPrice) {
            card.style.opacity = '1'; // Show the item by making it visible
            card.style.position = 'relative'; // Ensure it's in the flow
            card.style.height = ''; // Reset height in case it was set to 0
            found = true;
        } else {
            card.style.opacity = '0'; // Hide the item by making it invisible
            card.style.position = 'absolute'; // Remove it from the flow
            card.style.height = '0'; // Collapse its height to avoid space
        }
    });

    // Show or hide "No Books" message based on filtered results
    document.getElementById('noResults').style.display = found ? 'none' : 'block';
}

//
document.querySelectorAll('.filter-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        this.classList.toggle('selected');
    });
});