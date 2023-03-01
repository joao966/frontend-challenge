import styled from 'styled-components';

export const WrapperMobile = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.6rem;
  padding: 1rem 1.6rem  ;
`;

export const Card = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 3.4rem;
  padding: 1.6rem;
  border: 0.1rem solid #363636;
  background-color: #DCDCDC;
  box-shadow: 0rem 0.4rem 0.8rem #000000;
  border-radius: 0.8rem;
`;

export const Title = styled.h2`
  word-wrap: break-word;
  text-align: center;
`;

export const Description = styled.span`
  line-height: 1.2rem;
  font-style: italic;
  word-wrap: break-word;
  text-align: justify;
`;
