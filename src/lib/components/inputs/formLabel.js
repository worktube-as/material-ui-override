import {
  colorDark,
  colorPrimary
} from 'worktube-theme/core'

const MuiFormLabel = {
  root: {
    color: colorDark.lighten2,
    //   padding: 0,
    //   fontSize: '1.7rem',
    //   fontFamily: "Montserrat", sans-serif,
    //   fontWeight: 400,
    //   lineHeight: 1,
    //   letterSpacing: '0px'
    '&$focused': {
      color: colorPrimaryrimary.default
    }
  }
  //   .MuiFormLabel-root.Mui-disabled {
  //     color: rgba(0, 0, 0, 0.18);
  //   }
  //   .MuiFormLabel-root.Mui-error {
  //     color: #E03C3B;
  //   }
  //   .MuiFormLabel-asterisk.Mui-error {
  //     color: #E03C3B;
  //   }
}

export default MuiFormLabel
