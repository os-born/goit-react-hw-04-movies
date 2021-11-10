import React, { useState, useEffect } from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';
import SearchForm from '../../Components/SearchForm/SearchForm';
import SearchResult from '../../Components/SearchResult/SearchResult';
import queryString from 'query-string';

const MoviesPage = () => {
  const { url } = useRouteMatch();
  const [query, setQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const { search } = queryString.parse(location.search);
    if (search) {
      setQuery(search);
    }
  }, [location]);

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
