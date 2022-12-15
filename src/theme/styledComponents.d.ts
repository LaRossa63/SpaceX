import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    pallette: {
      common: {
        black: string;
        white: string;
      };
    };

    typography: {
      fontFamily: string;

      fontWeightLight: string;
      fontWeightRegular: string;
      fontWeightMedium: string;
      fontWeightBold: string;
    };

    device: {
      isMobile: boolean;
      isTabletAndDesktop: boolean;
    };
  }
}
