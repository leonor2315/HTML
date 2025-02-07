document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseover', function() {
        alert('You are looking at an image of a flute.');
    });
});
