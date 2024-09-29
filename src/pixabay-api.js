import axios from 'axios';
import { closeX } from './main';
let totalHits = 0;
let perPage = 15;
axios.defaults.baseURL = 'https://pixabay.com/api/';
async function searchImages(query, page = 1) {
  const params = {
    key: '46119113-9d91afa1c686c5ea1318b0639',
    q: encodeURIComponent(query),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: perPage,
  };
  loadingMessage.style.display = 'block';

  try {
    const response = await axios.get('', { params });
    loadingMessage.style.display = 'none';
    totalHits = response.data.totalHits;
    return response.data;
  } catch (error) {
    iziToast.error({
      title: '',
      titleColor: '#FFFFFF',
      message: error,
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

    loadingMessage.style.display = 'none';
  }
}

export { searchImages, totalHits, perPage };
