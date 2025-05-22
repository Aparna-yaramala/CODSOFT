// You can add interactivity here if needed
document.querySelectorAll('.nav-links li').forEach(item => {
    item.addEventListener('click', () => {
        alert(`You clicked on ${item.textContent}`);
    });
});
