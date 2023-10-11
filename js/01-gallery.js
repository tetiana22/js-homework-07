import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);


function createGalleryItemsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`;
    }).join('');
}

galleryContainer.addEventListener('click', onItemOriginalClick);
window.addEventListener('keypress',onItemOriginalClick)
function onItemOriginalClick(evt) {
    evt.preventDefault();
    if (evt.target.dataset.source) {
        const original = evt.target.dataset.source;
        const description = evt.target.alt;
        
        const lightbox = basicLightbox.create(`
            <img
            src="${original}"
            alt="${description}">
        `);
        lightbox.show();
        window.addEventListener('keydown', closeLightbox);
    }
}
function closeLightbox(evt) {
    if (evt.key === 'Escape') {
        const lightbox = document.querySelector('.basicLightbox');
        lightbox.remove();

        window.removeEventListener('keydown', closeLightbox);
    }
}

console.log(galleryContainer);