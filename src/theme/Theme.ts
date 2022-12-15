import { DefaultTheme } from 'styled-components';

export const Theme: DefaultTheme = {
  pallette: {
    common: {
      black: '#000',
      white: '#fff',
    },
  },

  typography: {
    fontFamily: '"Museo Sans Cyrl", sans-serif',

    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightMedium: '600',
    fontWeightBold: '700',
  },

  device: {
    isMobile: false,
    isTabletAndDesktop: false,
  },
};
