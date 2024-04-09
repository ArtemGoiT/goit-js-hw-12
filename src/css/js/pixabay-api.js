import axios from 'axios';

export async function fetchGallery(query, page) {
  const BASE_URL = 'https:/pixabay.com';
  const END_POINT = '/api';
  const KEY_API = '?key=32952239-1d47564a6cdd6d985205bb869';
  const PARAMS = `&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${page}`;

  const url = BASE_URL + END_POINT + KEY_API + PARAMS;

  const res = await axios.get(url);
  return res.data;
}
