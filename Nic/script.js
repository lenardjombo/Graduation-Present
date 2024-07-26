document.addEventListener('DOMContentLoaded', (event) => {
    const messageButton = document.getElementById('specialMessageBtn');
    const modal = document.getElementById('specialMessageModal');
    const closeButton = document.querySelector('.close-button');

    messageButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
