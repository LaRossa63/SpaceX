import styled, { css } from 'styled-components';
import { Information, Title } from './components';

const Container = styled.div`
  width: 100%;
  max-width: 1110px;

  margin: 0 auto;
  padding: 10px;

  ${(props) =>
    props.theme.device.isTabletAndDesktop &&
    css`
      display: flex;
      justify-content: space-between;

      margin-top: 250px;
    `}
`;

export const Main = () => {
  return (
    <Container>
      <Title />
      <Information />
    </Container>
  );
};
