import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useParams, useLocation } from 'react-router-dom';
import s from './CardAdNav.module.css';

const CardAdNav = ({ onGoBack }) => {
  const { movieId } = useParams();
  const location = useLocation();
  return (
    <ul className={s.NavList}>
      <li>
        <NavLink
          to={{
            pathname: `/movies/${movieId}/cast`,
            state: { from: location },
          }}
          className={s.Link}
          activeClassName={s.activeLink}
        >
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink
          to={{
            pathname: `/movies/${movieId}/rewiews`,
            state: { from: location },
          }}
          className={s.Link}
          activeClassName={s.activeLink}
        >
          Rewiews
        </NavLink>
      </li>
    </ul>
  );
};

CardAdNav.propTypes = {
  onGoBack: PropTypes.func.isRequired,
};

export default CardAdNav;
