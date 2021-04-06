import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 19px;
  font-weight: 500;
  font-size: 24px;
`;

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;

  > strong {
    width: 100%;
    text-align: center;
    color: var(--yellow);
    font-weight: bold;
    font-size: 14px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(calc(100% / 4) - calc(calc(16px * 3) / 4));
  margin-bottom: 14px;
  
  border-radius: 8px;
  background-color: white;

  &:not(:nth-child(4n-3)) {
   margin-left: 16px; 
  }

  > div {
    padding: 16px;
  }

  p, h2 {
    color: var(--gray-800);
    font-weight: 500;
  }

  p {
    font-size: 14px;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 18px;
  }

  button {
    width: 100%;
    padding: 8px 0;
    
    background-color: white;
    border-radius: 4px;
    border: 1px solid var(--blue-forma);

    font-weight: bold;
    font-size: 14px;
    color: var(--blue-forma);
  }

  @media (max-width: 900px) {
    width: calc(calc(100% / 3) - calc(calc(16px * 2) / 3));

    &:not(:nth-child(4n-3)) {
      margin-left: 0;
    }

    &:not(:nth-child(3n-2)) {
      margin-left: 16px; 
    }
  }

  @media (max-width: 550px) {
    width: calc(calc(100% / 2) - calc(16px / 2));

    &:not(:nth-child(4n-3)) {
      margin-left: 0;
    }

    &:not(:nth-child(3n-2)) {
      margin-left: 0; 
    }

    &:not(:nth-child(2n-1)) {
      margin-left: 16px; 
    }
  }
`;
