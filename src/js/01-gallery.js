import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const listGallery = document.querySelector('.gallery');

const gallery = new SimpleLightbox('.gallery a', { captionSelector: 'img', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });

function createGallleryMarkup(galleryItems) {
    const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__card"><a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a></li>`;
    }).join('');
  listGallery.insertAdjacentHTML('beforeend', galleryMarkup);
};
