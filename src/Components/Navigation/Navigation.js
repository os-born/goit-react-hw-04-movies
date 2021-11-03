import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={s.nav__list}>
        <li className={s.nav__listItem}>
          <NavLink
            exact
            to="/"
            className={s.nav__link}
            activeClassName={s.nav__linkActive}
          >
            HOME
          </NavLink>
        </li>
        <li className={s.nav__listItem}>
          <NavLink
            to="/movies"
            className={s.nav__link}
            activeClassName={s.nav__linkActive}
          >
            MOVIES
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
