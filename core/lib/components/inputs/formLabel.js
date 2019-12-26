import { colorDark, colorPrimary, lineHeight } from 'worktube-theme/core';
const MuiFormLabel = {
  root: {
    color: colorDark.lighten1,
    //   padding: 0,
    //   fontSize: '1.7rem',
    //   fontFamily: "Montserrat", sans-serif,
    //   fontWeight: 400,
    lineHeight: lineHeight.body1,
    //   letterSpacing: '0px'
    '&$focused': {
      color: colorPrimary.default
    }
  } //   .MuiFormLabel-root.Mui-disabled {
  //     color: rgba(0, 0, 0, 0.18);
  //   }
  //   .MuiFormLabel-root.Mui-error {
  //     color: #E03C3B;
  //   }
  //   .MuiFormLabel-asterisk.Mui-error {
  //     color: #E03C3B;
  //   }

};
export default MuiFormLabel;