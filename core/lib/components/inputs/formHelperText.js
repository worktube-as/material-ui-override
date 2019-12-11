import { colorError } from 'worktube-theme/core';
const MuiFormHelperText = {
  root: {
    color: colorError.lighten1,
    //   margin: 0,
    //   fontSize: '1.2rem',
    //   marginTop: '8px',
    //   minHeight: '1rem',
    //   textAlign: left,
    //   fontFamily: '"Montserrat", sans-serif',
    //   fontWeight: 400,
    lineHeight: '1.4rem',
    //   letterSpacing: '0px'
    position: 'absolute',
    width: '100%',
    top: '64px',
    '&$error': {
      color: colorError.default
    }
  },
  //   .MuiFormHelperText-root.Mui-disabled {
  //     color: rgba(0, 0, 0, 0.18);
  //   }
  //   .MuiFormHelperText-marginDense {
  //     margin-top: 4px;
  //   }
  contained: {
    margin: 0,
    padding: '0px 12px'
  }
};
export default MuiFormHelperText;