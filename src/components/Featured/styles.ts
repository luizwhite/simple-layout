import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  overflow-x: scroll;
  /* cursor: grab; */

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 20px;

  border-radius: 8px;
  background-color: white;

  & + div {
    margin-left: 16px;
  }

  svg {
    flex-shrink: 0;
    width: 105px;
    height: auto;
  }
`;

export const Content = styled.div`
  margin-left: 40px;
  width: 100%;

  h1 {
    color: var(--blue-400);
    font-size: 24px;
    font-weight: 500;
  }

  p {
    max-width: 408px;
    min-width: 340px;
    color: var(--secondary);
    line-height: 150%;
  }

  > div {
    width: 265px;
    margin-top: 16px;
    margin-left: auto;
  }

  > div button {
    width: 265px;
    height: 50px;
    
    border-radius: 4px;
    background-color: var(--blue-forma);
    
    color: var(--gray-050);
    font-size: 14px;
    font-weight: 700;
  }
`;