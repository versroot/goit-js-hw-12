import axios from 'axios';
let totalHits = 0;
axios.defaults.baseURL = 'https://pixabay.com/api/';
async function searchImages(query, page = 1) {
  const params = {
    key: '46119113-9d91afa1c686c5ea1318b0639',
    q: encodeURIComponent(query),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: '20',
  };
  loadingMessage.style.display = 'block';

  try {
    const response = await axios.get('', { params });
    loadingMessage.style.display = 'none';
    totalHits = response.data.totalHits;
    return response.data;
  } catch (error) {
    console.log(error);
    loadingMessage.style.display = 'none';
  }
}

export { searchImages };
