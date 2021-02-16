import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const CollectionTileWrapper = styled.div`
  height: 300px;
  max-height: 100vh;
  display: flex;
  position: relative;
  margin-bottom: 5px;

  > div {
    flex-grow: 1;
  }
`;

export const CollectionTileContent = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  text-align: center;

  > div {
    padding: 20px;

    ${StyledLink} {
      padding: 10px;
      background: transparent;
      border: none;
      font-weight: bold;
      font-size: 16px;
      text-transform: uppercase;
      text-decoration: none;
      display: inline-block;
      cursor: pointer;
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }
  }
`;
