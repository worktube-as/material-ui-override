import { offset, colorDark, fontSize, lineHeight } from 'worktube-theme/core';
const MuiInputBase = {
  root: {
    color: colorDark.default,
    //   cursor: text,
    //   display: inline-flex,
    //   position: relative,
    //   fontSize: '1.6rem',
    //   boxSizing: border-box,
    //   alignItems: center,
    //   fontFamily: "Montserrat", sans-serif,
    lineHeight: lineHeight.body1
  },
  //   .MuiInputBase-root.Mui-disabled {
  //     color: rgba(0, 0, 0, 0.18);
  //     cursor: default;
  //   }
  multiline: {
    padding: 0
  },
  //   .MuiInputBase-multiline.MuiInputBase-marginDense {
  //     padding-top: 3px;
  //   }
  //   .MuiInputBase-fullWidth {
  //     width: 100%;
  //   }
  input: {
    // font: 'inherit',
    fontSize: fontSize.body1,
    lineHeight: lineHeight.body1,
    // color: currentColor;
    // width: 100%;
    // border: 0;
    height: offset('12'),
    // margin: 0;
    // display: block;
    paddingTop: offset('6'),
    paddingBottom: offset('6'),
    paddingLeft: offset('6'),
    paddingRight: 0
    // min-width: 0;
    // background: none;
    // box-sizing: content-box;
    // animation-name: MuiInputBase-keyframes-auto-fill-cancel;
    // -webkit-tap-highlight-color: transparent;
  },
  //   .MuiInputBase-input::-webkit-input-placeholder {
  //     color: currentColor;
  //     opacity: 0.42;
  //     transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  //   }
  //   .MuiInputBase-input::-moz-placeholder {
  //     color: currentColor;
  //     opacity: 0.42;
  //     transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  //   }
  //   .MuiInputBase-input:-ms-input-placeholder {
  //     color: currentColor;
  //     opacity: 0.42;
  //     transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  //   }
  //   .MuiInputBase-input::-ms-input-placeholder {
  //     color: currentColor;
  //     opacity: 0.42;
  //     transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  //   }
  //   .MuiInputBase-input:focus {
  //     outline: 0;
  //   }
  //   .MuiInputBase-input:invalid {
  //     box-shadow: none;
  //   }
  //   .MuiInputBase-input::-webkit-search-decoration {
  //     -webkit-appearance: none;
  //   }
  //   .MuiInputBase-input.Mui-disabled {
  //     opacity: 1;
  //   }
  //   .MuiInputBase-input:-webkit-autofill {
  //     animation-name: MuiInputBase-keyframes-auto-fill;
  //     animation-duration: 5000s;
  //   }
  //   label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-webkit-input-placeholder {
  //     opacity: 0 !important;
  //   }
  //   label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-moz-placeholder {
  //     opacity: 0 !important;
  //   }
  //   label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:-ms-input-placeholder {
  //     opacity: 0 !important;
  //   }
  //   label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-ms-input-placeholder {
  //     opacity: 0 !important;
  //   }
  //   label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-webkit-input-placeholder {
  //     opacity: 0.42;
  //   }
  //   label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-moz-placeholder {
  //     opacity: 0.42;
  //   }
  //   label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus:-ms-input-placeholder {
  //     opacity: 0.42;
  //   }
  //   label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-ms-input-placeholder {
  //     opacity: 0.42;
  //   }
  //   @-webkit-keyframes MuiInputBase-keyframes-auto-fill {}
  //   @-webkit-keyframes MuiInputBase-keyframes-auto-fill-cancel {}
  //   .MuiInputBase-inputMarginDense {
  //     padding-top: 3px;
  //   }
  //   .MuiInputBase-inputSelect {
  //     padding-right: 24px;
  //   }
  inputMultiline: {
    // height: auto;
    // resize: none;
    // padding: 0;
    paddingTop: offset('6'),
    paddingBottom: offset('6'),
    paddingLeft: offset('6'),
  }
  //   .MuiInputBase-inputTypeSearch {
  //     -moz-appearance: textfield;
  //     -webkit-appearance: textfield;
  //   }

};
export default MuiInputBase;