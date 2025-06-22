// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides.length > 0) {
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
}

// Modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("email-modal");
    const span = document.getElementsByClassName("close-button")[0];

    // Show modal to first-time visitors (using localStorage)
    if (!localStorage.getItem('visited')) {
        setTimeout(() => {
            modal.style.display = "block";
        }, 2000);
        localStorage.setItem('visited', 'true');
    }

    // When the user clicks on <span> (x), close the modal
    if(span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


// Animated Text Search for Coffee Selection page
const coffeeSearch = document.getElementById('coffee-search');
if (coffeeSearch) {
    coffeeSearch.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const coffeeItems = document.querySelectorAll('#coffee-list .coffee-item');

        coffeeItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.5s';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// Add a simple fade-in animation for the search
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
`;
document.head.appendChild(style); 