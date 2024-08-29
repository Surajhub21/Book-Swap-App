// Toggle Event
document.addEventListener("DOMContentLoaded", function() {
    const detailsIcon = document.querySelector('.details_icon');
    const taskbar = document.querySelector('.taskbar');

    detailsIcon.addEventListener('click', function() {
        taskbar.classList.toggle('active');
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
    const image = document.getElementById('image').files[0];

    if (title && description && image) {
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

        // Create Read More button
        const readMoreBtn = document.createElement('a');
        readMoreBtn.href = '#';
        readMoreBtn.className = 'btn';
        readMoreBtn.textContent = 'Read more';

        // Append elements to content container
        content.appendChild(h3);
        content.appendChild(p);
        content.appendChild(readMoreBtn);

        // Append img and content to list item
        listItem.appendChild(img);
        listItem.appendChild(content);

        // Append list item to the item list
        itemList.appendChild(listItem);

        // Clear form fields
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
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
