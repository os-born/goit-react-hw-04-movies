import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActorsByMovieId } from '../../service/Movies/ApiService';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Cast.module.css';
import defaultLogo from '../../images/no-photo.jpg';

const Cast = () => {
  const { movieId } = useParams();

  const [actors, setActors] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    fetchActorsByMovieId(movieId)
      .then(prev => {
        setActors(prev.cast);
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
    return (
      <ul className={s.actors__List}>
        {actors.map(actor => (
          <li className={s.imgWrap} key={actor.id}>
            {actor.profile_path ? (
              <img
                className={s.img}
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <img className={s.img} src={defaultLogo} alt={actor.name} />
            )}
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default Cast;
