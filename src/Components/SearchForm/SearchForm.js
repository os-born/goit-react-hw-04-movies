import React, { useState } from 'react';
import { toast } from 'react-toastify';
import s from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [data, SetData] = useState('');

  const onHandleChange = e => {
    SetData(e.target.value.toLowerCase().trim());
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (data === '') {
      toast.info('Something WRONG! Try again!');
      return;
    }
    onSubmit(data);
    SetData('');
  };

  return (
    <form className={s.searchForm} onSubmit={onHandleSubmit}>
      <input
        type="text"
        className={s.searchInput}
        autoComplete="off"
        autoFocus
        name="input"
        value={data}
        onChange={onHandleChange}
        placeholder="Enter a movie"
      />
      <button type="submit" className={s.btnSubmit}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
