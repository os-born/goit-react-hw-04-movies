import React, { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import { fetchMoviesByQuery } from '../../service/Movies/ApiService.js';

const SearchResult = ({ query }) => {
  const [resMovies, setResMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    setStatus('pending');
    fetchMoviesByQuery(query)
      .then(res => {
        setResMovies(res.results);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [query]);

  if (status === 'idle') {
    return <div>Enter a movie!</div>;
  }
  if (status === 'pending') {
    return <div>Loading . . .</div>;
  }
  if (status === 'rejected') {
    return <div>{error.message}</div>;
  }
  if (status === 'resolved') {
    return <MovieList movies={resMovies} />;
  }
  return;
};

export default SearchResult;
