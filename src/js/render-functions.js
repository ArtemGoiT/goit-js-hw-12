import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const galleryEl = document.querySelector('.gallery');

export function imageTemplate(data) {
  const markup = data.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
                <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-img" src="${webformatURL}" alt="${tags}">
                <div class="image-description">
                <p>Likes: ${likes}</p>
                <p>Views: ${views}</p>
                <p>Comments ${comments}</p>
                <p>Downloads ${downloads}</p>
                </div>
                </a>
                </li>`;
      }
    )

    .join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionsData: 'alt',
    captionPosition: 'bottom',
  });
  lightbox.refresh();
}
