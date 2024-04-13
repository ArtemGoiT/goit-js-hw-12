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






//     import SimpleLightbox from 'simplelightbox';: Эта строка импортирует класс SimpleLightbox из библиотеки SimpleLightbox.

//     import 'simplelightbox/dist/simple-lightbox.min.css';: Эта строка импортирует CSS стили для SimpleLightbox из файла simple-lightbox.min.css.

// export const galleryEl = document.querySelector('.gallery');: Это объявление константы galleryEl, которая представляет DOM элемент с классом gallery. 
    
// Она экспортируется для использования в других модулях.

// export function imageTemplate(data) {: Это объявление функции imageTemplate, которая принимает объект data в качестве аргумента. 
      
//   Функция используется для создания HTML разметки для изображений и их вставки в галерею.

//     Внутри функции imageTemplate используется метод map для обхода массива изображений(data.hits), предположительно полученных из API Pixabay. 
    
//     Каждый элемент массива представляет из себя объект с различными свойствами, такими как webformatURL, largeImageURL, tags, likes, views, comments, downloads.

//     В цикле map для каждого изображения создается HTML разметка, включающая ссылку на полноразмерное изображение(largeImageURL),
    
//     превью изображения(webformatURL), описание изображения(tags), количество лайков(likes), количество просмотров(views), количество комментариев(comments) и количество загрузок(downloads).

//     Созданная HTML разметка сохраняется в переменной markup.

//     galleryEl.insertAdjacentHTML('beforeend', markup);: С помощью метода insertAdjacentHTML созданная HTML разметка вставляется внутрь элемента galleryEl, который был найден в начале скрипта.

//   const lightbox = new SimpleLightbox('.gallery a', { /* настройки */ });: Создается новый экземпляр SimpleLightbox, который применяется ко всем ссылкам внутри элемента с классом gallery. 
    
//   Это позволяет создавать модальное окно с изображением при клике на любую ссылку в галерее.

//     Настройки SimpleLightbox передаются в виде объекта со свойствами, такими как captions, captionDelay, captionsData, captionPosition.
    
//     Они определяют различные аспекты поведения и отображения модального окна с изображением.

//     lightbox.refresh();: Этот метод вызывается для обновления галереи после добавления новых изображений.