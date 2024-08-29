// Toggle Event
document.addEventListener("DOMContentLoaded", function() {
    const detailsIcon = document.querySelector('.details_icon');
    const taskbar = document.querySelector('.taskbar');

    detailsIcon.addEventListener('click', function() {
        taskbar.classList.toggle('active');
    });
});