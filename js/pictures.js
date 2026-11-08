const renderPictures = (photos) => {
  const pictureTemplate = document.querySelector('#picture').content;
  const picturesContainer = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];

    const pictureElement = pictureTemplate.querySelector('.picture').cloneNode(true);

    const image = pictureElement.querySelector('img');
    image.src = photo.url;
    image.alt = photo.description;

    const likesElement = pictureElement.querySelector('.picture__likes');
    likesElement.textContent = photo.likes;

    const commentsElement = pictureElement.querySelector('.picture__comments');
    commentsElement.textContent = photo.comments.length;

    fragment.appendChild(pictureElement);
  }

  picturesContainer.appendChild(fragment);
};

export {renderPictures};
