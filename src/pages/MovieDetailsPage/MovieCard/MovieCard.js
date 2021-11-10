import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './MovieCard.module.css';

// import CardAdNav from '../../../Components/CardAdNav/CardAdNav';
// import Cast from '../Cast/Cast';
// import Rewiews from '../Rewiews/Reviews';

const CardAdNav = lazy(() =>
  import(
    '../../../Components/CardAdNav/CardAdNav' /* chunkName: "CardAdNav" */
  ),
);
const Cast = lazy(() => import('../Cast/Cast' /*  chunkName: "Cast" */));
const Rewiews = lazy(() =>
  import('../Rewiews/Reviews' /*  chunkName: "Rewiews" */),
);

const MovieCard = ({
  poster_path,
  title,
  original_title,
  name,
  release_date,
  vote_average,
  overview,
  genres,
  onGoBack,
}) => {
  const { path } = useRouteMatch();

  return (
    <div className={s.Card}>
      <button
        type="button"
        onClick={onGoBack}
        style={{ width: '80px', height: '25px', marginBottom: '20px' }}
      >
        Back
      </button>
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
        <Suspense
          fallback={
            <Loader
              type="ThreeDots"
              color="-webkit-link"
              height={40}
              width={80}
              timeout={2000}
            />
          }
        >
          <CardAdNav onGoBack={onGoBack} />
        </Suspense>
      </div>
      <hr />
      <Suspense fallback={<div>Loading . . . </div>}>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>
          <Route path={`${path}/rewiews`}>
            <Rewiews />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

MovieCard.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  original_title: PropTypes.string,
  name: PropTypes.string,
  release_date: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.array,
  onGoBack: PropTypes.func.isRequired,
};

export default MovieCard;
