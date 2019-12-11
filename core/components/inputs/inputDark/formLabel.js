import worktubeUIConfig from 'app/styles/worktube-theme';
const MuiFormLabel = {
  root: {
    color: worktubeUIConfig.theme.white.lighten2,
    '&$focused': {
      color: worktubeUIConfig.theme.secondary.default
    }
  }
};
export default MuiFormLabel;