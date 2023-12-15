// work.js

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var modals = document.querySelectorAll('.modal');
    var closeButtons = document.querySelectorAll('.close');

    modals.forEach(function(modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    closeButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var modalId = button.closest('.modal').id;
            closeModal(modalId);
        });
    });

    var folderIcons = document.querySelectorAll('.folder-item i');

    folderIcons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            var modalId = icon.closest('.folder-item').querySelector('.modal').id;
            openModal(modalId);
        });
    });
});

