import worktubeUIConfig from 'app/styles/worktube-theme';
const MuiFormHelperText = {
  root: {
    color: worktubeUIConfig.theme.dark.lighten1,
    '&$error': {
      color: worktubeUIConfig.theme.white.lighten1
    }
  },
  contained: {
    margin: '8px 12px 0'
  }
};
export default MuiFormHelperText;