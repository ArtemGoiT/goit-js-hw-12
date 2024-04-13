import axios from 'axios';

export async function fetchGallery(query, page) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const KEY_API = '?key=43226276-a07a0c17e428cfffb021b9b05';
  const PARAMS = `&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${page}`;

  const url = BASE_URL + END_POINT + KEY_API + PARAMS;

  const res = await axios.get(url);
  return res.data;
}

// import axios from 'axios';: Эта строка импортирует библиотеку Axios, которая используется для совершения HTTP запросов.

//     export async function fetchGallery(query, page) {: Это объявление функции fetchGallery, которая экспортируется из модуля.
// Она асинхронная(async), что позволяет использовать ключевое слово await внутри неё для ожидания завершения асинхронных операций.

//     const BASE_URL = 'https://pixabay.com';: Это базовый URL для API сервиса Pixabay, к которому будет отправлен запрос.

//     const END_POINT = '/api/';: Это конечная точка (endpoint) API сервиса Pixabay, к которой будет отправлен запрос.

//     const KEY_API = '?key=43226276-a07a0c17e428cfffb021b9b05';: Это ключ API, который используется для аутентификации запроса к API Pixabay.

// //     const PARAMS = &q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${page};:
//
//  Это строка параметров запроса, которая включает в себя поисковый запрос(query), тип изображения(image_type), ориентацию изображения(orientation), безопасный поиск(safesearch), количество изображений на странице(per_page) и номер страницы(page).

//  Все эти параметры будут использованы для формирования URL запроса к API Pixabay.

//     const url = BASE_URL + END_POINT + KEY_API + PARAMS;: Здесь формируется полный URL для отправки запроса к API Pixabay, объединяя базовый URL, конечную точку, ключ API и параметры запроса.

//     const res = await axios.get(url);: С помощью Axios отправляется GET запрос по сформированному URL к API Pixabay. Ключевое слово await указывает на ожидание завершения запроса перед продолжением выполнения кода.

//     return res.data;: Функция возвращает данные, полученные в ответ на запрос к API Pixabay. res.data содержит тело ответа, которое, вероятно, представляет собой JSON объект с результатами запроса (например, массив изображений).

// Таким образом, функция fetchGallery отправляет запрос к API Pixabay для получения галереи изображений на основе заданного поискового запроса и номера страницы, а затем возвращает полученные данные.
