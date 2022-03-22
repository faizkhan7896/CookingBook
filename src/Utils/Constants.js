export const baseUrl = 'https://technorizen.com/Fastable/webservice/';

import {Dimensions} from 'react-native';
import {DefaultTheme} from 'react-native-paper';
const {width, height} = Dimensions.get('window');

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // base colors
    primary: '#F96D41',
    secondary: '#25282F',

    // colors
    black: '#1E1B26',
    white: '#FFFFFF',
    lightGray: '#64676D',
    lightGray2: '#EFEFF0',
    lightGray3: '#D4D5D6',
    lightGray4: '#7D7E84',
    gray: '#2D3038',
    gray1: '#282C35',
    darkRed: '#31262F',
    lightRed: '#C5505E',
    darkBlue: '#22273B',
    lightBlue: '#424BAF',
    darkGreen: '#213432',
    lightGreen: '#31Ad66',
  },
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding2: 36,
  paddingtop: 34,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};
