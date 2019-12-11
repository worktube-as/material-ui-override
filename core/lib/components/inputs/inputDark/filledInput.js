import { colorDark, border } from 'worktube-theme/core';
const MuiFilledInput = {
  root: {
    backgroundColor: colorDarkark.lighten3,
    '&:hover': {
      backgroundColor: colorDarkark.lighten2,
      '@media (hover: none)': {
        backgroundColor: colorDarkark.lighten2
      }
    },
    '&$focused': {
      backgroundColor: colorDarkark.lighten2
    }
  },
  underline: {
    '&:after': {
      borderBottom: border['2px'].solid.secondary.default
    }
  }
};
export default MuiFilledInput;