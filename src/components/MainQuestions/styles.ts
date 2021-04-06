import styled from 'styled-components';

export const Container = styled.section`
  min-height: 166px;
  padding: 16px 24px 32px;

  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h1 {
    margin-bottom: 24px;
    color: var(--blue-400);
    font-size: 24px;
    font-weight: 500;
  }

  strong {
    margin-bottom: 8px;
    color: var(--gray-700);
    font-weight: 500;
    font-size: 14px;
  }

  > div > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > div > div > button {
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 51px;
    height: 51px;

    border-radius: 4px;
    background-color: var(--primary);

    span {
      display: none;
      color: var(--gray-050);
      font-weight: bold;
      font-size: 14px;
    }
  }

  @media (max-width: 720px) {
    > div > div {
      flex-direction: column;
      justify-content: center;

      > button {
        width: 100%;

        svg {
          display: none;
        }

        span {
          display: block;
        }
      }
    }

    strong {
      align-self: flex-start;
    }
  }
`;

export const Question = styled.div`
  flex: 1;

  & + div,
  & + button {
    margin-left: 16px;
  }

  input {
    height: 51px;
    width: 100%;
    max-width: 370px;
    padding: 17px 13px;

    border-radius: 4px;
    border: 1px solid #8d97a0;

    &::placeholder {
      color: var(--gray-500);
    }
  }

  select {
    height: 51px;
    width: 100%;
    max-width: 370px;
    padding: 10px 13px;

    color: var(--gray-500);
    border-radius: 4px;
    border: 1px solid #8d97a0;

    option {
      color: var(--secondary);

      &:disabled {
        color: var(--gray-500);
      }
    }
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    & + div,
    & + button {
      margin: 16px 0 0;
    }

    input,
    select {
      max-width: unset;
    }
  }
`;
