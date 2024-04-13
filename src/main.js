import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchGallery } from './js/pixabay-api';
import { imageTemplate } from './js/render-functions';
import { galleryEl } from './js/render-functions';

const formEl = document.querySelector('.img-search-form');
const loaderEl = document.querySelector('.loader');
const btnLoadMore = document.querySelector('.load-more-btn');

let query;
let page;
let maxPage;

formEl.addEventListener('submit', onFormSubmit);
btnLoadMore.addEventListener('click', onLoadMoreClick);

async function onFormSubmit(e) {
  e.preventDefault();
  hideLoadBtn();
  galleryEl.innerHTML = '';
  query = e.target.elements.query.value.trim();
  page = 1;

  if (query === '') {
    showError('Sorry, there are no search terms entered. Please try again!');
    return;
  }
  showLoaderEl();
  try {
    const data = await fetchGallery(query, page);
    maxPage = Math.ceil(data.totalHits / 15);
    if (data.totalHits === 0) {
      hideLoaderEl();
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }
    imageTemplate(data);
  } catch (err) {
    showError(err);
  }

  hideLoaderEl();
  checkBtnVisibleStatus();
  e.target.reset();
}

async function onLoadMoreClick() {
  page += 1;
  showLoaderEl();

  try {
    const data = await fetchGallery(query, page);
    imageTemplate(data);
  } catch (err) {
    showError(err);
  }

  hideLoaderEl();
  checkBtnVisibleStatus();

  const height = galleryEl.firstElementChild.getBoundingClientRect().height;

  scrollBy({
    behavior: 'smooth',
    top: height * 2,
  });
}

function showLoadBtn() {
  btnLoadMore.classList.remove('hidden');
}

function hideLoadBtn() {
  btnLoadMore.classList.add('hidden');
}

function showLoaderEl() {
  loaderEl.classList.remove('hidden');
}

function hideLoaderEl() {
  loaderEl.classList.add('hidden');
}

function showError(msg) {
  iziToast.error({
    message: msg,
    messageColor: 'white',
    backgroundColor: 'red',
    position: 'topRight',
  });
}

function checkBtnVisibleStatus() {
  if (page >= maxPage) {
    hideLoadBtn();
    showError("We're sorry, but you've reached the end of search results.");
  } else {
    showLoadBtn();
  }
}

//     Импорт библиотек:
//         iziToast: Библиотека для вывода всплывающих уведомлений.
//         izitoast/dist/css/iziToast.min.css: Стилевой файл для iziToast, который определяет внешний вид всплывающих уведомлений.
//         fetchGallery и imageTemplate из ./js/pixabay-api и ./js/render-functions: Функции для получения данных изображений из API Pixabay и создания HTML разметки для отображения изображений в галерее.

//     Объявление переменных:
//         formEl, loaderEl, btnLoadMore: Элементы DOM для формы поиска, индикатора загрузки и кнопки "Загрузить еще".
//         query, page, maxPage: Переменные для хранения текущего поискового запроса, текущей страницы результатов и максимального числа страниц результатов.

//     Обработчики событий:
//         formEl.addEventListener('submit', onFormSubmit): Добавляет обработчик события отправки формы поиска, который вызывает функцию onFormSubmit.
//         btnLoadMore.addEventListener('click', onLoadMoreClick): Добавляет обработчик события клика на кнопку "Загрузить еще", который вызывает функцию onLoadMoreClick.

//     Функция onFormSubmit:
//         Предотвращает стандартное поведение формы (перезагрузку страницы).
//         Получает значение поискового запроса из формы.
//         Очищает галерею от предыдущих результатов.
//         Отправляет запрос к API Pixabay с указанным поисковым запросом и текущей страницей.
//         Обрабатывает полученные данные: определяет максимальное количество страниц результатов, проверяет наличие результатов и отображает их в галерее.
//         Показывает или скрывает кнопку "Загрузить еще" в зависимости от количества доступных страниц результатов.

//     Функция onLoadMoreClick:
//         Увеличивает номер текущей страницы на единицу.
//         Отправляет запрос к API Pixabay для загрузки следующей страницы результатов.
//         Отображает новые результаты в галерее.
//         Показывает или скрывает кнопку "Загрузить еще" в зависимости от количества доступных страниц результатов.
//         Прокручивает страницу вниз, чтобы пользователь увидел новые изображения.

//     Вспомогательные функции:
//         showLoadBtn, hideLoadBtn: Показывает и скрывает кнопку "Загрузить еще".
//         showLoaderEl, hideLoaderEl: Показывает и скрывает индикатор загрузки.
//         showError: Выводит сообщение об ошибке с помощью библиотеки iziToast.
//         checkBtnVisibleStatus: Проверяет, нужно ли показывать кнопку "Загрузить еще" на основе текущего номера страницы и максимального количества страниц.

// Таким образом, весь код составляет простую систему для поиска и загрузки изображений из API Pixabay, с учетом удобного интерфейса для пользователя и обработки возможных ошибок.
