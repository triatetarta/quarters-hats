import React from 'react';
import { CollectionTileWrapper, CollectionTileContent } from './styles';
import BackgroundImage from 'gatsby-background-image';
import { StyledLink } from '../StyledLink';

export function CollectionTile({ destination, backgroundImage }) {
  return (
    <CollectionTileWrapper>
      <BackgroundImage fluid={backgroundImage} />
      <CollectionTileContent>
        <div>
          <StyledLink to={destination}> </StyledLink>
        </div>
      </CollectionTileContent>
    </CollectionTileWrapper>
  );
}
