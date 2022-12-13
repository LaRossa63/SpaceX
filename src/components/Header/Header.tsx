import styled, { css } from 'styled-components';

import { Title } from 'images/SVG';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from 'types/types';

const Container = styled.div`
  padding: 10px;

  background-color: rgb(0, 0, 0, 0.21);

  ${(props) =>
    props.theme.device.isTabletAndDesktop &&
    css`
      padding: 50px 10px;
    `}
`;

const ContainerContent = styled.div`
  width: 100%;
  max-width: 1110px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  ${(props) =>
    props.theme.device.isTabletAndDesktop &&
    css`
      flex-direction: row;
      justify-content: space-between;
    `}
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
  return (
    <Container>
      <ContainerContent>
        <div>
          <Title />
        </div>

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
