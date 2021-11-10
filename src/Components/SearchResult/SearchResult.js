import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import MovieList from '../MovieList';
import { fetchMoviesByQuery } from '../../service/Movies/ApiService.js';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const SearchResult = ({ query, matchUrl = '' }) => {
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
        if (res.results.length === 0) {
          throw new Error(
            toast.error(`No matches with "${query}"! Please try again!`),
          );
        }
        setResMovies(res.results);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        console.log(error.message);
        setStatus('rejected');
      });
  }, [query]);

  if (status === 'idle') {
    return <div></div>;
  }
  if (status === 'pending') {
    return (
      <Loader
        type="ThreeDots"
        color="-webkit-link"
        height={40}
        width={80}
        timeout={2000}
      />
    );
  }
  if (status === 'rejected') {
    return <div>Not found! Error message: "{error.message}".</div>;
  }
  if (status === 'resolved') {
    return <MovieList movies={resMovies} matchUrl={matchUrl} />;
  }
  return;
};

SearchResult.propTypes = {
  query: PropTypes.string.isRequired,
  matchUrl: PropTypes.string.isRequired,
};

export default SearchResult;
