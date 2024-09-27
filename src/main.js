import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { renderImages } from './render-functions.js';
import { searchImages } from './pixabay-api.js';

const fetchPicsBtn = document.querySelector('#searchButton');
const picsList = document.querySelector('.gallery');
const input = document.querySelector('#input');
const loadingMessage = document.querySelector('#loadingMessage');

fetchPicsBtn.addEventListener('click', event => {
  event.preventDefault();
  picsList.innerHTML = '';
  loadingMessage.style.display = 'block';
  const query = input.value.trim();
  searchImages(query)
    .then(pics => {
      if (pics.hits.length === 0) {
        console.log('No pics');
        iziToast.error({
          title: '',
          titleColor: '#FFFFFF',
          message:
            ' Sorry, there are no images matching your search query. Please, try again!',
          iconUrl:
            'https://raw.githubusercontent.com/versroot/goit-js-hw-11/refs/heads/main/src/img/bi_x-octagon.svg',
          backgroundColor: '#EF4040',
          messageColor: '#FFFFFF',
          close: true,
          maxWidth: '432px',

          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '24px',
          letterSpacing: '0.5px',

          onOpening: closeX,
        });
      } else {
        renderImages(pics.hits);
        lightboxgallery.refresh();
      }
    })
    .catch(error => console.log(error));
});

function closeX(instance, toast) {
  var closeButton = toast.querySelector('.iziToast-close');
  closeButton.style.backgroundColor = 'transparent'; //
  closeButton.style.backgroundImage =
    "url('https://raw.githubusercontent.com/versroot/goit-js-hw-11/refs/heads/main/src/img/bi_x-lg.svg')";
  closeButton.style.backgroundSize = 'contain';
  closeButton.style.width = '16px';
  closeButton.style.height = '16px';

  closeButton.style.color = 'transparent';
  closeButton.style.margin = '18px';
}
let lightboxgallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',

  captionDelay: 250,
});
lightboxgallery.on('show.simplelightbox', function () {});
