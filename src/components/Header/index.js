import React from 'react';
import { HeaderWrapper } from './styles';
import { Cart } from '../Cart';
import { Search } from '../Search';
import { Link } from 'gatsby';

export function Header() {
  return (
    <HeaderWrapper>
      <div>
        <Link to="/">Quarter Hats</Link>
      </div>
      <Search />
      <Cart />
    </HeaderWrapper>
  );
}
