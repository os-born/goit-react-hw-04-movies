import { useState, useEffect } from 'react';
import MovieList from '../../Components/MovieList/MovieList.js';
import * as fetch from '../../service/Movies/ApiService.js';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const HomePage = () => {
  const [bestMovies, setBestMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const toggleLoader = () => {
    setIsLoading(prev => !prev);
  };

  useEffect(() => {
    toggleLoader();
    fetch
      .fetchTrandingMovies()
      .then(res => setBestMovies(res.results))
      .then(toggleLoader());
  }, []);
  return (
    <>
      <h2>Tranding today</h2>
      {isLoading && (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={120}
          width={100}
          timeout={3000}
        />
      )}
      {bestMovies && <MovieList movies={bestMovies} matchUrl={'/movies'} />}
    </>
  );
};
export default HomePage;
