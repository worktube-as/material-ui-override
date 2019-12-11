import { colorDark, colorWhite } from 'worktube-theme/core';
const MuiFormHelperText = {
  root: {
    color: colorDark.lighten1,
    '&$error': {
      color: colorWhite.lighten1
    }
  },
  contained: {
    margin: '8px 12px 0'
  }
};
export default MuiFormHelperText;