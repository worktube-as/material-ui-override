import {
  colorDark,
  colorError,
  colorPrimary,
  border
} from 'worktube-theme/core'

const MuiFilledInput = {
  root: {
    // position: 'relative',
    // transition: 'background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    backgroundColor: colorDark.lighten6,
    // borderTopLeftRadius: '4px',
    // borderTopRightRadius: '4px',
    marginBottom: '36px',
    '&:hover': {
      backgroundColor: colorDark.lighten5,
      '@media (hover: none)': {
        backgroundColor: colorDark.lighten5
      }
    },
    '&$error': {
      backgroundColor: colorError.lighten5
    },
    '&$focused': {
      backgroundColor: colorPrimary.lighten5,
      '&$error': {
        backgroundColor: colorError.lighten5
      }
    }
  },
  underline: {
    '&$error': {
      '&:after': {
        borderBottomWidth: '1px'
      },
      '&:hover': {
        '&:after': {
          borderBottomWidth: '2px'
        }
      }
    },
    '&:after': {
      //   left: 0,
      //   right: 0,
      //   bottom: 0,
      //   content: '',
      //   position: 'absolute',
      //   transform: 'scaleX(0)',
      //   transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
      borderBottom: border['2px'].solid.primary.default
      //   pointerEvents: 'none'
    },
    '&:before': {
      //     left: 0,
      //     right: 0,
      //     bottom: 0,
      //     content: '\00a0',
      //     position: 'absolute',
      //     transition: 'border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      borderBottom: border['1px'].solid.dark.lighten3
      //     pointerEvents: 'none'
      //   }
    },
    '&:hover': {
      '&:before': {
        borderBottom: border['2px'].solid.dark.lighten1
      }
    }
  }
  //   .MuiFilledInput-root.Mui-disabled {
  //     background-color: rgba(0, 0, 0, 0.12);
  //   }
  //   .MuiFilledInput-underline.Mui-focused:after {
  //     transform: scaleX(1);
  //   }
  //   .MuiFilledInput-underline.Mui-disabled:before {
  //     border-bottom-style: dotted;
  //   }
  //   .MuiFilledInput-adornedStart {
  //     padding-left: 12px;
  //   }
  //   .MuiFilledInput-adornedEnd {
  //     padding-right: 12px;
  //   }
  //   .MuiFilledInput-multiline {
  //     padding: 27px 12px 10px;
  //   }
  //   .MuiFilledInput-multiline.MuiFilledInput-marginDense {
  //     padding-top: 23px;
  //     padding-bottom: 6px;
  //   }
  //   .MuiFilledInput-input {
  //     padding: 27px 12px 10px;
  //   }
  //   .MuiFilledInput-input:-webkit-autofill {
  //     border-top-left-radius: inherit;
  //     border-top-right-radius: inherit;
  //   }
  //   .MuiFilledInput-inputMarginDense {
  //     padding-top: 23px;
  //     padding-bottom: 6px;
  //   }
  //   .MuiFilledInput-inputHiddenLabel {
  //     padding-top: 18px;
  //     padding-bottom: 19px;
  //   }
  //   .MuiFilledInput-inputHiddenLabel.MuiFilledInput-inputMarginDense {
  //     padding-top: 10px;
  //     padding-bottom: 11px;
  //   }
  //   .MuiFilledInput-inputSelect {
  //     padding-right: 24px;
  //   }
  //   .MuiFilledInput-inputMultiline {
  //     padding: 0;
  //   }
  //   .MuiFilledInput-inputAdornedStart {
  //     padding-left: 0;
  //   }
  //   .MuiFilledInput-inputAdornedEnd {
  //     padding-right: 0;
  //   }
}

export default MuiFilledInput
