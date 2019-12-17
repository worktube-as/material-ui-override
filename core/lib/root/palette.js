import { colorBlack, colorWhite, colorPrimary, colorSecondary, colorError, colorDark } from 'worktube-theme/core';
const palette = {
  tonalOffset: 0.2,
  common: {
    black: colorBlack.default,
    white: colorWhite.default
  },
  primary: {
    main: colorSecondary.default,
    // light: '',
    dark: colorSecondary.default,
    contrastText: colorDark.default
  },
  secondary: {
    main: colorSecondary.default,
    // light: '',
    dark: colorSecondary.darken1,
    contrastText: colorWhite.default
  },
  error: {
    main: colorError.default,
    // light: '',
    dark: colorError.darken1,
    contrastText: colorWhite
  },
  // grey: {
  //   50: '#fafafa',
  //   100: '#f5f5f5',
  //   200: '#eeeeee',
  //   300: '#e0e0e0',
  //   400: '#bdbdbd',
  //   500: '#9e9e9e',
  //   600: '#757575',
  //   700: '#616161',
  //   800: '#424242',
  //   900: '#212121',
  //   A100: '#d5d5d5',
  //   A200: '#aaaaaa',
  //   A400: '#303030',
  //   A700: '#616161'
  // },
  action: {
    active: colorDark.lighten1,
    hover: colorDark.lighten5,
    hoverOpacity: 0.12,
    selected: colorBlack.lighten4,
    disabled: colorBlack.lighten3,
    disabledBackground: colorDark.lighten5
  },
  background: {
    paper: colorWhite,
    default: colorWhite,
    level2: colorDark.lighten6,
    level1: colorWhite.default
  },
  text: {
    primary: colorDark.default,
    secondary: colorDark.lighten1,
    disabled: colorDark.lighten3,
    hint: colorDark.lighten3
  },
  divider: colorDark.lighten3
};
export default palette;