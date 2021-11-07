import React from 'react';
import { Link } from 'react-router-dom';
import s from './MovieList.module.css';

const MovieList = ({ movies, matchUrl = '' }) => {
  return (
    <ul className={s.List}>
      {movies.map(({ id, original_title, name }) => (
        <li key={id}>
          <Link className={s.Link} to={`${matchUrl}/${id}`}>
            <h3>{original_title || name}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
