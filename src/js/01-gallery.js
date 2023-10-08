import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}"  data-source="${original}" alt="${description}" />
   </a>
</li>
      `;
    })
    .join('');
}

new SimpleLightbox('.gallery__link', {
  navText: ['←', '→'],
  captionsData: 'alt',
  captionDelay: 250,
});
