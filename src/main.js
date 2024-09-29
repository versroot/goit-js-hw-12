import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { renderImages } from './js/render-functions.js';
import { searchImages, totalHits, perPage } from './js/pixabay-api.js';

const picsList = document.querySelector('.gallery');
const input = document.querySelector('#input');
const loadingMessage = document.querySelector('#loadingMessage');
const loadMore = document.querySelector('#loadMore');
const form = document.querySelector('#searchForm');

let currentPage;
function showErrorToast(message) {
  iziToast.error({
    title: '',
    titleColor: '#FFFFFF',
    message: message,
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
}

form.addEventListener('submit', async event => {
  event.preventDefault();
  currentPage = 1;
  picsList.innerHTML = '';
  loadMore.style.display = 'none';

  const query = input.value.trim();
  if (query != '') {
    loadingMessage.style.display = 'block';
    try {
      const pics = await searchImages(query, currentPage);

      if (pics.hits.length === 0) {
        console.log('No pics');
        showErrorToast(
          'Sorry, there are no images matching your search query. Please, try again!'
        );
        return;
      } else {
        renderImages(pics.hits);
        lightboxgallery.refresh();
      }
      loadingMessage.style.display = 'none';
      if (totalHits <= currentPage * perPage) {
        console.log('No more pics');
        loadMore.style.display = 'none';
        showErrorToast('No more pics');
      }
    } catch (error) {
      console.log(error);
      showErrorToast(error);
      loadingMessage.style.display = 'none';
    }
  } else {
    showErrorToast('Empty request');
  }
  currentPage += 1;
});

function closeX(instance, toast) {
  var closeButton = toast.querySelector('.iziToast-close');
  closeButton.style.backgroundColor = 'transparent';
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

loadMore.addEventListener('click', async event => {
  event.preventDefault();
  const query = input.value.trim();

  try {
    const pics = await searchImages(query, currentPage);
    if (pics.hits.length === 0 || totalHits <= currentPage * perPage) {
      console.log('No more pics');
      loadMore.style.display = 'none';
      showErrorToast('No more pics');
      return;
    }

    renderImages(pics.hits);
    const galleryItem = document.querySelector('.gallery-item');
    const rect = galleryItem.getBoundingClientRect();
    console.log(rect.height);
    window.scrollBy({
      top: rect.height * 2,
      behavior: 'smooth',
    });
    lightboxgallery.refresh();
    currentPage += 1;
    loadingMessage.style.display = 'none';
  } catch (error) {
    console.log(error);
    loadingMessage.style.display = 'none';
  }
});
export { closeX };
