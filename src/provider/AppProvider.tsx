import { FC, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useTheme } from 'hooks';
import { BaseStyled } from 'theme/BaseStyled';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={useTheme()}>
        <BaseStyled>{children} </BaseStyled>
      </ThemeProvider>
    </BrowserRouter>
  );
};
