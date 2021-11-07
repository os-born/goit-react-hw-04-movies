import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import s from './CardAdNav.module.css';

const CardAdNav = () => {
  const { movieId } = useParams();
  return (
    <ul className={s.NavList}>
      <li>
        <NavLink
          to={`/movies/${movieId}/cast`}
          className={s.Link}
          activeClassName={s.activeLink}
        >
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/movies/${movieId}/rewiews`}
          className={s.Link}
          activeClassName={s.activeLink}
        >
          Rewiews
        </NavLink>
      </li>
    </ul>
  );
};

export default CardAdNav;
