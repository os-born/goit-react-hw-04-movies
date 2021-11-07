import { useState, useEffect } from 'react';
import MovieList from '../../Components/MovieList/MovieList.js';
import * as fetch from '../../service/Movies/ApiService.js';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const HomePage = () => {
  const [bestMovies, setBestMovies] = useState([]);

  useEffect(() => {
    fetch.fetchTrandingMovies().then(res => setBestMovies(res.results));
  }, []);
  return (
    <>
      <h2>Tranding today</h2>
      {bestMovies && <MovieList movies={bestMovies} matchUrl={'/movies'} />}
    </>
  );
};
export default HomePage;
