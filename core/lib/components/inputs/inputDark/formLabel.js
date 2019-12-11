import { colorWhite, colorSecondary } from 'worktube-theme/core';
const MuiFormLabel = {
  root: {
    color: colorWhite.lighten2,
    '&$focused': {
      color: colorSecondary.default
    }
  }
};
export default MuiFormLabel;