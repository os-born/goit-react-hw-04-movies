import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsByMovieId } from '../../../service/Movies/ApiService';
import Loader from 'react-loader-spinner';
import s from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setreviews] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    fetchReviewsByMovieId(movieId)
      .then(prev => {
        setreviews(prev.results);
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
    return reviews.length > 0 ? (
      <ul className={s.reviews__List}>
        {reviews.map(review => (
          <li key={review.id} className={s.reviews__ListItem}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
            <p>
              <span className={s.review__dateTitle}>created:</span>
              {Date(review.created_at)}
            </p>
          </li>
        ))}
      </ul>
    ) : (
      <p className={s.noReviewInfo}>
        We don`t have any reviews for this movie.
      </p>
    );
  }
};

export default Reviews;
