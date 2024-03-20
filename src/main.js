import './js/pixabay-api.js'
import './js/render-functions.js'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.form')
const button = document.querySelector('#search')
const gallery = document.querySelector('.gallery')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const inputValue = event.currentTarget.elements.input.value;
    if(inputValue.trim() !== '') {
        form.submit; //check if page reloads after submit
    }else{
        iziToast.warning({
            title: 'Caution',
            message: 'You forgot to fill in the form!',
            position: 'topCenter'
        });
    }
    form.reset()
}
