import { FC, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { BaseStyled } from 'theme/BaseStyled';
import { Theme } from 'theme/Theme';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <BaseStyled>{children} </BaseStyled>
      </ThemeProvider>
    </BrowserRouter>
  );
};
