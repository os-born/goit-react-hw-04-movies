export const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c0203117fae2adc588114ef6089a015e';

// const fetchWithErrorHandling = async (url, searchQuery) => {
//   const res = await fetch(
//     `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`,
//   );
//   return res.ok ? await res.json() : Promise.reject(new Error('Not found'));
// };

export async function fetchTrandingMovies() {
  const res = await fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
  return res.ok ? await res.json() : Promise.reject(new Error('Not found'));
}
