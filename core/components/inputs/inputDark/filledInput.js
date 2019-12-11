import worktubeUIConfig from 'app/styles/worktube-theme';
const MuiFilledInput = {
  root: {
    backgroundColor: worktubeUIConfig.theme.dark.lighten3,
    '&:hover': {
      backgroundColor: worktubeUIConfig.theme.dark.lighten2,
      '@media (hover: none)': {
        backgroundColor: worktubeUIConfig.theme.dark.lighten2
      }
    },
    '&$focused': {
      backgroundColor: worktubeUIConfig.theme.dark.lighten2
    }
  },
  underline: {
    '&:after': {
      borderBottom: worktubeUIConfig.border['2px'].solid.secondary.default
    }
  }
};
export default MuiFilledInput;