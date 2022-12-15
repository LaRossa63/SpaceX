import styled, { css } from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppRoutes } from 'types/types';

import { Logo } from 'images/SVG';

const Container = styled.div`
  padding: 10px;

  background-color: rgb(0, 0, 0, 0.21);

  ${(props) =>
    props.theme.device.isTabletAndDesktop &&
    css`
      padding: 40px 10px;
    `}
`;

const ContainerContent = styled.div`
  width: 100%;
  max-width: 1500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  margin: 0 auto;

  ${(props) =>
    props.theme.device.isTabletAndDesktop &&
    css`
      flex-direction: row;
      justify-content: space-between;
    `}
`;

const ContainerLogo = styled.div`
  padding: 10px 20px;

  background: linear-gradient(
        to right,
        #fff 10px,
        transparent 0,
        transparent calc(100% - 10px),
        #fff 0
      )
      0 0 / 100% 2px no-repeat,
    linear-gradient(
        to right,
        #fff 10px,
        transparent 0,
        transparent calc(100% - 10px),
        #fff 0
      )
      0 100% / 100% 2px no-repeat,
    linear-gradient(
        to bottom,
        #fff 10px,
        transparent 0,
        transparent calc(100% - 10px),
        #fff 0
      )
      0 0 / 2px 100% no-repeat,
    linear-gradient(
        to bottom,
        #fff 10px,
        transparent 0,
        transparent calc(100% - 10px),
        #fff 0
      )
      100% 0 / 2px 100% no-repeat;
`;

const ContainerNavigation = styled.nav`
  display: flex;
  flex-direction: column;

  margin-top: 15px;
  gap: 15px;

  ${(props) =>
    props.theme.device.isTabletAndDesktop &&
    css`
      flex-direction: row;

      margin: 0;
      gap: 20px;
    `}
`;

const TextNavigation = styled(NavLink)`
  width: fit-content;

  line-height: 22px;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
  color: ${(props) => props.theme.pallette.common.white};

  &.active,
  &:hover {
    opacity: 0.4;
    text-decoration: underline;
    text-underline-offset: 5px;
  }
`;

export const Header = () => {
  const navigation = useNavigate();

  const handleClickLogo = () => {
    navigation(AppRoutes.MAIN);
  };

  return (
    <Container>
      <ContainerContent>
        <ContainerLogo onClick={handleClickLogo}>
          <Logo />
        </ContainerLogo>

        <ContainerNavigation>
          <TextNavigation to={AppRoutes.MAIN}>Главная</TextNavigation>
          <TextNavigation to={AppRoutes.TECHNOLOGIES}>
            Технология
          </TextNavigation>
          <TextNavigation to={AppRoutes.FLIGHT_SCHEDULE}>
            График полетов
          </TextNavigation>
          <TextNavigation to={AppRoutes.WARRANTY}>Гарантии</TextNavigation>
          <TextNavigation to={AppRoutes.ABOUT_COMPANY}>
            О компании
          </TextNavigation>
          <TextNavigation to={AppRoutes.CONTACTS}>Контакты</TextNavigation>
        </ContainerNavigation>
      </ContainerContent>
    </Container>
  );
};
