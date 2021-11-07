import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { fetchRewiewsByMovieId } from '../service/Movies/ApiService';
import { fetchMovieById } from '../../service/Movies/ApiService';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import MovieCard from '../../Components/MovieCard/MovieCard';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState('idle');

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
      <MovieCard
        poster_path={poster_path}
        title={title}
        original_title={original_title}
        name={name}
        release_date={release_date}
        vote_average={vote_average}
        overview={overview}
        genres={genres}
      />
    );
  }
};

export default MovieDetailsPage;

// <p>Additional information</p>
//           <ul>
//             <li>
//               <NavLink to={`${url}/cast`}>Cast</NavLink>
//             </li>
//             <li>
//               <NavLink to={`${url}/reviews`}>Reviews</NavLink>
//             </li>
//           </ul>
//           <hr />
//           <Suspense
//             fallback={
//               <Loader
//                 type="Puff"
//                 color="#00BFFF"
//                 height={100}
//                 width={100}
//                 timeout={3000}
//               />
//             }
//           >
//             <Route path={`${path}/cast`}>
//               {casts && <Cast casts={casts} />}
//             </Route>

//             <Route path={`${path}/reviews`}>
//               {reviews && <Reviews reviews={reviews} />}
//             </Route>
//           </Suspense>
