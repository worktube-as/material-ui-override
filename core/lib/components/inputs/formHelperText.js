import { offset, colorError, fontSize, lineHeight } from 'worktube-theme/core';
const MuiFormHelperText = {
  root: {
    color: colorError.lighten1,
    //   margin: 0,
    fontSize: fontSize.caption1,
    //   marginTop: '8px',
    minHeight: 0,
    //   textAlign: left,
    //   fontFamily: '"Montserrat", sans-serif',
    //   fontWeight: 400,
    lineHeight: lineHeight.caption1,
    //   letterSpacing: '0px'
    position: 'absolute',
    width: '100%',
    top: offset('36'),
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