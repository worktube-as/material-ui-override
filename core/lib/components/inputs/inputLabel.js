import { fontSize, lineHeight } from 'worktube-theme/core';

const MuiInputLabel = {
  // .MuiInputLabel-root {
  //     display: block;
  //     transform-origin: top left;
  //   }
  formControl: {
    // top: 0;
    // left: 0;
    // position: absolute;
    transform: 'translate(12px, 36px)',
    fontSize: fontSize.body1,
    lineHeight: lineHeight.body1
  },
  //   .MuiInputLabel-marginDense {
  //     transform: translate(0, 21px) scale(1);
  //   }
  shrink: {
    transform: 'translate(0, 8px)',
    fontSize: fontSize.body2,
    lineHeight: lineHeight.caption1
    // transform-origin: top left;
  }
  //   .MuiInputLabel-animated {
  //     transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  //   }
  //   .MuiInputLabel-filled {
  //     z-index: 1;
  //     transform: translate(12px, 20px) scale(1);
  //     pointer-events: none;
  //   }
  //   .MuiInputLabel-filled.MuiInputLabel-marginDense {
  //     transform: translate(12px, 17px) scale(1);
  //   }
  //   .MuiInputLabel-filled.MuiInputLabel-shrink {
  //     transform: translate(12px, 10px) scale(0.75);
  //   }
  //   .MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense {
  //     transform: translate(12px, 7px) scale(0.75);
  //   }
  //   .MuiInputLabel-outlined {
  //     z-index: 1;
  //     transform: translate(14px, 20px) scale(1);
  //     pointer-events: none;
  //   }
  //   .MuiInputLabel-outlined.MuiInputLabel-marginDense {
  //     transform: translate(14px, 12px) scale(1);
  //   }
  //   .MuiInputLabel-outlined.MuiInputLabel-shrink {
  //     transform: translate(14px, -6px) scale(0.75);
  //   }
};
export default MuiInputLabel;