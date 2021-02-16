import React, { useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { FaSearch } from 'react-icons/fa';
import { SearchForm } from './styles';
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const { search } = useLocation();
  const c = queryString.parse(search)?.c || '';

  const handleSubmit = e => {
    e.preventDefault();

    if (c) {
      navigate(
        `/all-products?s=${encodeURIComponent(
          searchTerm
        )}&c=${encodeURIComponent(c)}`
      );
    } else {
      navigate(`/all-products?s=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        placeholder="Search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <Button>
        <FaSearch />
      </Button>
    </SearchForm>
  );
}
