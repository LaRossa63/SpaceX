import { FC, PropsWithChildren, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { BaseStyled } from 'theme/BaseStyled';
import { useGetDevice } from 'hooks';
import { Theme } from 'theme/Theme';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isMobile, isTabletAndDesktop } = useGetDevice();
  // const Theme1 = useThemeContext();

  useEffect(() => {
    Theme.device.isMobile = isMobile;
    Theme.device.isTabletAndDesktop = isTabletAndDesktop;
  }, [isMobile, isTabletAndDesktop]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <BaseStyled>{children} </BaseStyled>
      </ThemeProvider>
    </BrowserRouter>
  );
};
