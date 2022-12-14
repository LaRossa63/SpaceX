import styled, { css } from 'styled-components';
import { Button } from 'components/Elements';

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;
`;

const MyTitle = styled.p<{ upperCase?: boolean }>`
  width: 100%;

  font-weight: ${(props) => props.theme.typography.fontWeightLight};
  color: transparent;

  background: linear-gradient(186deg, #fff, #ff5719);
  background-clip: text;
  -webkit-background-clip: text;

  ${(props) =>
    props.theme.device.isTabletAndDesktop &&
    css`
      font-size: 22px;
    `}

  ${(props) =>
    props.upperCase &&
    css`
      font-size: 38px;
      font-weight: ${(props) => props.theme.typography.fontWeightMedium};
      text-transform: uppercase;
    `}
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 25px;

  ${(props) =>
    props.theme.device.isTabletAndDesktop &&
    css`
      display: block;
      margin-top: 100px;
    `}
`;

const ButtonStyled = styled(Button)`
  opacity: 0.7;

  &.MuiButtonBase-root {
    font-size: 14px;
    color: ${(props) => props.theme.pallette.common.white};

    border-image: linear-gradient(#000, #16151d) -99;
    border-width: 2px;
    border-style: solid;
  }
`;

export const Title = () => {
  return (
    <div>
      <ContainerTitle>
        <MyTitle upperCase>путешествие</MyTitle>
        <MyTitle>на красную планету</MyTitle>
      </ContainerTitle>

      <ContainerButton>
        <ButtonStyled variant="outlined">Начать путешествие</ButtonStyled>
      </ContainerButton>
    </div>
  );
};