const APIkey = '46119113-9d91afa1c686c5ea1318b0639';

function searchImages(query) {
  const url = `https://pixabay.com/api/?key=${APIkey}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      loadingMessage.style.display = 'none';
      return response.json();
    })

    .catch(error => {
      console.log(error);
    });
}

export { searchImages };
