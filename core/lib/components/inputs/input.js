import { offset } from 'worktube-theme/core';

const MuiInput = {// .MuiInput-root {
  //     position: relative;
  //   }
  label: {
    '&$formControl': {
      marginTop: offset('12'),
      marginBottom: offset('12')
    }
  }
  //   .MuiInput-underline:after {
  //     left: 0;
  //     right: 0;
  //     bottom: 0;
  //     content: "";
  //     position: absolute;
  //     transform: scaleX(0);
  //     transition: transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  //     border-bottom: 2px solid #22838D;
  //     pointer-events: none;
  //   }
  //   .MuiInput-underline.Mui-focused:after {
  //     transform: scaleX(1);
  //   }
  //   .MuiInput-underline.Mui-error:after {
  //     transform: scaleX(1);
  //     border-bottom-color: #E03C3B;
  //   }
  //   .MuiInput-underline:before {
  //     left: 0;
  //     right: 0;
  //     bottom: 0;
  //     content: "\00a0";
  //     position: absolute;
  //     transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  //     border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  //     pointer-events: none;
  //   }
  //   .MuiInput-underline:hover:not(.Mui-disabled):before {
  //     border-bottom: 2px solid rgba(0, 0, 0, 0.7);
  //   }
  //   .MuiInput-underline.Mui-disabled:before {
  //     border-bottom-style: dotted;
  //   }
  //   @media (hover: none) {
  //     .MuiInput-underline:hover:not(.Mui-disabled):before {
  //       border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  //     }
  //   }
};
export default MuiInput;