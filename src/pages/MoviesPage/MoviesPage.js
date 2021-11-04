import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import SearchForm from '../../Components/SearchForm/SearchForm';
import SearchResult from '../../Components/SearchResult/SearchResult';

const MoviesPage = () => {
  const { url } = useRouteMatch();
  console.log(url);
  const [query, setQuery] = useState('');

  const handleFormSubmit = query => {
    setQuery(query);
  };

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      <SearchResult query={query} />
    </>
  );
};

export default MoviesPage;
