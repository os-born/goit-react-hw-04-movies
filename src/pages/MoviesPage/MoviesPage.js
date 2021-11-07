import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import SearchForm from '../../Components/SearchForm/SearchForm';
import SearchResult from '../../Components/SearchResult/SearchResult';

const MoviesPage = () => {
  const { url } = useRouteMatch();
  const [query, setQuery] = useState('');

  const handleFormSubmit = searchQuery => {
    setQuery(searchQuery);
  };

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      <SearchResult query={query} matchUrl={url} />
    </>
  );
};

export default MoviesPage;
