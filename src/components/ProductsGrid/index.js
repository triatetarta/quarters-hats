import React from 'react';
import { ProductsGridWrapper } from './styles';
import { ProductTile } from '../ProductTile';

export function ProductsGrid({ products }) {
  return (
    <ProductsGridWrapper>
      {products.map(product => (
        <ProductTile
          key={product.shopifyId}
          description={product.description}
          minPrice={product.priceRange.minVariantPrice.amount}
          title={product.title}
          imageFluid={product.images[0].localFile.childImageSharp.fluid}
          handle={product.handle}
        />
      ))}
    </ProductsGridWrapper>
  );
}
