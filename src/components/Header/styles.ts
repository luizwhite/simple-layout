import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 87px;
  width: 100%;
  padding: 29px calc(calc(calc(100% - 1280px) / 2) + 32px);

  background-color: white;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));

  @media (max-width: 1280px) {
    padding: 29px 32px;
  }
`;

export const ContactUsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--green);
  font-size: 14px;
  text-decoration: underline;
`;