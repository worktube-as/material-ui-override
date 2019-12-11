import { colorDark, border } from 'worktube-theme/core';
const MuiFilledInput = {
  root: {
    backgroundColor: colorDark.lighten3,
    '&:hover': {
      backgroundColor: colorDark.lighten2,
      '@media (hover: none)': {
        backgroundColor: colorDark.lighten2
      }
    },
    '&$focused': {
      backgroundColor: colorDark.lighten2
    }
  },
  underline: {
    '&:after': {
      borderBottom: border['2px'].solid.secondary.default
    }
  }
};
export default MuiFilledInput;