import React from 'react';

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
  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
          alt={title || name}
        />
        <div>
          <h2>
            {original_title || name} ({release_date.substr(0, 4)})
          </h2>
          <p>User score: {Number(vote_average * 10)} %</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(' ')}</p>
        </div>
      </div>
      <p>Additional information</p>
    </div>
  );
};

export default MovieCard;
