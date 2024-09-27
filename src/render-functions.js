const picsList = document.querySelector('.gallery');
function renderImages(pics) {
  const markup = pics
    .map(pic => {
      return `<li class="gallery-item">
  
        <a class="gallery-link" href=${pic.webformatURL}> 
          <img
            class="gallery-image"
            src=${pic.webformatURL}
            alt='${pic.tags}'
  
          />
          </a>
          <ul class='properties'>
          <li class='property'><div class='key'>Likes</div> ${pic.likes}</li>
          <li class='property'><div class='key'>Views </div> ${pic.views}</li>
          <li class='property'><div class='key'>Comments </div> ${pic.comments}</li>
          <li class='property'><div class='key'>Downloads </div> ${pic.downloads}</li>
          
          
  
  
  </ul>
  
          </li>
          `;
    })
    .join('');
  picsList.insertAdjacentHTML('beforeend', markup);
}

export { renderImages };
