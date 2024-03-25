
import './js/pixabay-api.js'
import './js/render-functions.js'
import { getPictures } from './js/pixabay-api.js';
import { renderElement } from './js/render-functions.js';
import { renderElements } from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import css from './css/styles.css'

const form = document.querySelector('.form')
const button = document.querySelector('#search')
const gallery = document.querySelector('.gallery')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const inputValue = event.currentTarget.elements.input.value.trim();
    gallery.innerHTML = '';
    if(!inputValue){
        iziToast.warning({
            title: 'Caution',
            message: 'You forgot to fill in the form!',
            position: 'topCenter'
        });
        return;
    }
    showLoader()
    getPictures(inputValue)
    .then(images => {
        hideLoader()
        if(images.length === 0) {
            iziToast.error({
                title: 'Search result',
                message: 'Sorry, there are no images matching your search query. Please try again.',
                position: 'topCenter'
            });
            return;
        }
        const markup = renderElements(images);
        gallery.innerHTML = markup;

        let gallerySlider = new SimpleLightbox('.gallery a', {
            captionDelay: 250,
            captionsData: 'alt',
        }).refresh()
    })
    .catch(error => {
        hideLoader();
        if(error.name === "TypeError" && error.message.includes("Failed to fetch")){
            iziToast.error({
                title: 'Network Error',
                message: 'Unable to connect. Please check your internet connection and try again.',
                position: 'topCenter'
            })
        }else {
            iziToast.error({
            title: 'Error',
            message: `Error: ${error.message}`,
            position: 'topCenter'
        });
        }
    })

    form.reset()
}

function showLoader() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    form.insertAdjacentElement('afterend', loader)
}

function hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.remove();
    }
}
