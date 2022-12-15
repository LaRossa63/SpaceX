import { useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { useGetDevice } from 'hooks';

const defaultTheme: DefaultTheme = {
  pallette: {
    common: {
      black: '#000',
      white: '#fff',
    },

    background: {
      default: '',
      button: '',
    },

    text: {
      primary: '',
      secondary: '',
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

export const useTheme = () => {
  const [theme, setTheme] = useState(defaultTheme);
  const { isMobile, isTabletAndDesktop } = useGetDevice();

  useEffect(() => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      device: { ...prevTheme.device, isMobile, isTabletAndDesktop },
    }));
  }, [isMobile, isTabletAndDesktop]);

  return theme;
};
