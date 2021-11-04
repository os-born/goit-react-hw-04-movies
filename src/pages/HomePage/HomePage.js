import { useState, useEffect } from 'react';
import MovieList from '../../Components/MovieList/MovieList.js';
import * as fetch from '../../service/Movies/ApiService.js';

const HomePage = () => {
  const [bestMovies, setBestMovies] = useState([]);
  // const { url } = useRouteMatch();
  // console.log(url);
  useEffect(() => {
    fetch.fetchTrandingMovies().then(res => setBestMovies(res.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(bestMovies);
  return (
    <>
      <h2>Tranding today</h2>
      {bestMovies && <MovieList movies={bestMovies} />}
    </>
  );
};
export default HomePage;
