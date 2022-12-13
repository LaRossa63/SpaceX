import { Navigate, useRoutes } from 'react-router-dom';

import { AppRoutes } from 'types/types';
import { Layout } from 'layout';
import {
  Main,
  Technologies,
  FlightSchedule,
  Warranty,
  AboutCompany,
  Contacts,
} from 'components';

export const AppRouter = () => {
  const routes = {
    element: <Layout />,
    children: [
      { path: AppRoutes.MAIN, element: <Main /> },
      { path: AppRoutes.TECHNOLOGIES, element: <Technologies /> },
      { path: AppRoutes.FLIGHT_SCHEDULE, element: <FlightSchedule /> },
      { path: AppRoutes.WARRANTY, element: <Warranty /> },
      { path: AppRoutes.ABOUT_COMPANY, element: <AboutCompany /> },
      { path: AppRoutes.CONTACTS, element: <Contacts /> },
      {
        path: '*',
        element: <Navigate to={AppRoutes.MAIN} />,
      },
    ],
  };

  const element = useRoutes([routes]);

  return <>{element}</>;
};
