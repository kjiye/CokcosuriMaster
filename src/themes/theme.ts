import {DefaultTheme} from 'styled-components/native';

export const AppTheme: DefaultTheme = {
  colors: {
    background: 'white',
    primary: '#eb7203',
    primaryDark: '#e25300',
    primaryLight: '#fc9e48',
    secondary: '#16284c',
    secondaryDark: '#08132a',
    secondaryLight: '#2e4e8e',
    accent: '#5971ec',
    accentDark: '#2642d5',
    accentLight: '#9eacf3',
    error: '#ec5959',
    errorDark: '#e32929',
    errorLight: '#f88282',
    grey: [
      'white',
      '#f9f9f9',
      '#f2f2f2',
      '#d7d7d7',
      '#cccccc',
      '#b4b4b4',
      '#707070',
    ],
    black: ['black', '#333333'],
  },
  fonts: {
    massive: 32,
    huge: 28,
    big: 24,
    large: 18,
    normal: 16,
    small: 14,
    tiny: 12,
    mini: 12,
  },
  size: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    gap: 5,
    innerMargin: 12,
    standardPadding: 20,
  },
};
