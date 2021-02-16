import React from 'react';
import { ProductTileWrapper } from './styles';
import Image from 'gatsby-image';

export function ProductTile({ title, imageFluid }) {
  return (
    <ProductTileWrapper>
      <Image fluid={imageFluid} />
      <div>{title}</div>
    </ProductTileWrapper>
  );
}
