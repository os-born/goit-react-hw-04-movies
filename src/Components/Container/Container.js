import React from 'react';
import s from './Container.module.css';

const Conteiner = ({ children }) => {
  return <div className={s.Container}>{children}</div>;
};

export default Conteiner;
