import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;

  a {
    text-decoration: none;
  }
`;

export const Button = styled.div`
  width: 272px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #363636;
  color: #FFFF;
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;
  font-style: italic;

  @media (max-width: 571px) {
    width: 150px;
  }
`;

