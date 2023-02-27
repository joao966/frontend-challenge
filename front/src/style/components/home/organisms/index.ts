import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.6rem;

  a {
    text-decoration: none;
  }
`;

export const Button = styled.div`
  width: 20.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #363636;
  color: #FFFF;
  border-radius: 0.4rem;
  padding: 0.5rem;
  cursor: pointer;
  font-style: italic;

  @media (max-width: 50.71rem) {
    width: 15ren;
  }
`;

