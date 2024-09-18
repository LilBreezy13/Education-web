// Lightbox functionality
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeLightbox = document.querySelector('.close');

// Open lightbox when clicking on an image
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img').src;
    const name = item.querySelector('.gallery-name').textContent;
    const department = item.querySelector('.gallery-department').textContent;
    
    lightboxImage.src = img;
    lightboxCaption.textContent = `${name} - ${department}`;
    lightbox.style.display = 'flex';
  });
});

// Close lightbox when clicking on the close button
closeLightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close lightbox when clicking outside of the image
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImage) {
    lightbox.style.display = 'none';
  }
});
