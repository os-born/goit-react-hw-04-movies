import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

const MovieList = ({ movies, matchUrl = '' }) => {
  const location = useLocation();
  return (
    <ul className={s.List}>
      {movies.map(({ id, original_title, name }) => (
        <li key={id}>
          <Link
            className={s.Link}
            to={{
              pathname: `${matchUrl}/${id}`,
              state: { from: location },
            }}
          >
            <h3>{original_title || name}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
