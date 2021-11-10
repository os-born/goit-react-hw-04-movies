import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { fetchMovieById } from '../service/Movies/ApiService';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const MovieCard = lazy(() =>
  import('../Components/MovieCard' /* chunkName: MovieCard */),
);

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const { current } = useRef(location.state);
  const history = useHistory();

  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState('idle');

  const onGoBack = () => {
    history.push(current ? current.from : '/');
  };

  useEffect(() => {
    setStatus('pending');
    fetchMovieById(movieId)
      .then(prev => {
        setMovie(prev);
        setStatus('resolved');
      })
      .catch(error => {
        console.log(error.message);
        setStatus('rejected');
      });
  }, [movieId]);

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
    return <div>Something wrong! Try again later!</div>;
  }
  if (status === 'resolved') {
    const {
      poster_path,
      title,
      original_title,
      name,
      release_date,
      vote_average,
      overview,
      genres,
    } = movie;
    return (
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
        <MovieCard
          poster_path={poster_path}
          title={title}
          original_title={original_title}
          name={name}
          release_date={release_date}
          vote_average={vote_average}
          overview={overview}
          genres={genres}
          onGoBack={onGoBack}
        />
      </Suspense>
    );
  }
};

export default MovieDetailsPage;
