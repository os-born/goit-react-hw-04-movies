import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import CardAdNav from '../../../Components/CardAdNav/CardAdNav';
import Cast from '../Cast/Cast';
import Rewiews from '../Rewiews/Reviews';
import s from './MovieCard.module.css';

const MovieCard = ({
  poster_path,
  title,
  original_title,
  name,
  release_date,
  vote_average,
  overview,
  genres,
}) => {
  const { path } = useRouteMatch();
  return (
    <div className={s.Card}>
      <div className={s.Wrapper__card}>
        <img
          src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
          alt={title || name}
        />
        <div className={s.Card__details}>
          <h2>
            {original_title || name} ({release_date.substr(0, 4)})
          </h2>
          <p>User score: {Number(vote_average * 10)} %</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres.map(genre => (
              <li key={genre.name} className={s.GenresList__Item}>
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <CardAdNav />
      </div>
      <hr />
      <Switch>
        <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/rewiews`}>
          <Rewiews />
        </Route>
      </Switch>
    </div>
  );
};
export default MovieCard;
