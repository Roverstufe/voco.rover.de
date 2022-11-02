
import PhotoSwipeLightbox from './photoswipe/dist/photoswipe-lightbox.esm.js';
import PhotoSwipe from './photoswipe/dist/photoswipe.esm.js';


const lightbox = new PhotoSwipeLightbox({
    gallery: '#my-gallery',
    children: 'a',
    pswpModule: PhotoSwipe
});

lightbox.init();


