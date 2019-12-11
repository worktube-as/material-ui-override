import worktubeUIConfig from 'app/styles/worktube-theme'

const palette = {
  tonalOffset: 0.2,
  common: {
    black: worktubeUIConfig.theme.colors.black,
    white: worktubeUIConfig.theme.colors.white
  },
  primary: {
    main: worktubeUIConfig.theme.primary.default,
    // light: '',
    dark: worktubeUIConfig.theme.primary.darken1,
    contrastText: worktubeUIConfig.theme.colors.white
  },
  secondary: {
    main: worktubeUIConfig.theme.secondary.default,
    // light: '',
    dark: worktubeUIConfig.theme.secondary.darken1,
    contrastText: worktubeUIConfig.theme.colors.white
  },
  error: {
    main: worktubeUIConfig.theme.error.default,
    // light: '',
    dark: worktubeUIConfig.theme.error.darken1,
    contrastText: worktubeUIConfig.theme.colors.white
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
    active: worktubeUIConfig.theme.dark.lighten1,
    hover: worktubeUIConfig.theme.dark.lighten5,
    hoverOpacity: 0.12,
    selected: worktubeUIConfig.theme.black.lighten4,
    disabled: worktubeUIConfig.theme.black.lighten3,
    disabledBackground: worktubeUIConfig.theme.dark.lighten5
  },
  background: {
    paper: worktubeUIConfig.theme.colors.white,
    default: worktubeUIConfig.theme.colors.white,
    level2: worktubeUIConfig.theme.dark.lighten6,
    level1: worktubeUIConfig.theme.colors.white
  },
  text: {
    primary: worktubeUIConfig.theme.dark.default,
    secondary: worktubeUIConfig.theme.dark.lighten1,
    disabled: worktubeUIConfig.theme.dark.lighten3,
    hint: worktubeUIConfig.theme.dark.lighten3
  },
  divider: worktubeUIConfig.theme.dark.lighten3
}

export default palette
