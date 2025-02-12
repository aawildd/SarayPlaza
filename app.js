const firstbackground = document.querySelector('.bck-img');
const logo = document.querySelector('.logo');
const main = document.querySelector('main');
const galleryImages = document.querySelectorAll('.photo-gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox img');
const footer = document.querySelector('footer');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const startcontainer = document.querySelector('.backcontainer');
let currentIndex = 0;

window.onload = function() {
    window.scrollTo(0, 0);
    setTimeout(() => {
        main.style.display = 'block';
        footer.style.display = 'block';
        logo.classList.add('closelogo');
        window.scrollTo(0, 0);
        startcontainer.style.opacity = '0';
        logo.style.position = 'absolute';
        setTimeout(() => {
            document.body.style.overflowY = 'auto';
            window.scrollTo(0, 0);
            startcontainer.remove();
        }, 2000);
    }, 3500);
};

galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        lightboxImage.src = image.src;
        lightbox.style.display = 'flex';
    });
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

prevButton.addEventListener('click', (e) => {
    currentIndex = (currentIndex === 0) ? galleryImages.length - 1 : currentIndex - 1;
    lightboxImage.src = galleryImages[currentIndex].src;
    e.stopPropagation();
});

nextButton.addEventListener('click', (e) => {
    currentIndex = (currentIndex === galleryImages.length - 1) ? 0 : currentIndex + 1;
    lightboxImage.src = galleryImages[currentIndex].src;
    e.stopPropagation();
});

function scrollToTop() {
    if (window.innerWidth < 768) {
        window.scrollTo({
            top: 200,
            behavior: 'smooth'
        });
    } else {
        location.href = "#hero";
    }
}
