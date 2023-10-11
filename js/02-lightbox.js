import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems); 
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

function createGalleryItemsMarkup(items) {
    return items.map(({ preview, original, description }) => { 
        return `
        <li class="gallery__item" data-lightbox="my-gallery"> 
        <a class="gallery__link" href="${original}"> 
            <img class="gallery__image" src="${preview}" alt="${description}" /> 
            <p class="gallery__caption">${description}</p> 
        </a>
    </li>`;
    }).join('');
}
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
    });
    
  
