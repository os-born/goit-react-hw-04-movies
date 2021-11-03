import { useState, useEffect } from 'react';
import * as fetch from '../../service/Movies/ApiService.js';
import { Link } from 'react-router-dom';
import s from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch
      .fetchTrandingMovies()
      .then(res => setMovies(res.results))
      .then(console.dir(movies));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(movies);
  return (
    <>
      <h2>Tranding today</h2>
      {movies && (
        <ul className={s.List}>
          {movies.map(({ id, original_title, name }) => (
            <li key={id}>
              <Link className={s.Link} to>
                {/* <img
                src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                alt={original_title}
              /> */}
                <h3>{original_title || name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default HomePage;
