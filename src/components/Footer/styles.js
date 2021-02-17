import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 2rem;
  border-top: 1px solid #ddd;
  padding: 1rem;
`;

export const Text = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  margin-top: 1rem;

  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const Social = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.5rem;

  a {
    text-decoration: none;
    color: black;
  }

  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const Copyright = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  font-size: 0.7rem;
  color: #333;
`;
