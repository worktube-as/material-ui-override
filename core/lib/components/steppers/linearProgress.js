import { offset, colorPrimary, colorSecondary } from 'worktube-theme/core';

const MuiLinearProgress = {
    root: {
        height: offset('2'),
        overflow: 'hidden',
        position: 'relative',
        borderRadius: offset('1')
    },
    colorPrimary: {
        backgroundColor: colorPrimary.lighten4
    },
//   .MuiLinearProgress-colorSecondary {
//     background-color: rgb(158, 246, 248);
//   }
//   .MuiLinearProgress-buffer {
//     background-color: transparent;
//   }
//   .MuiLinearProgress-query {
//     transform: rotate(180deg);
//   }
//   .MuiLinearProgress-dashed {
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     animation: MuiLinearProgress-keyframes-buffer 3s infinite linear;
//     margin-top: 0;
//   }
//   .MuiLinearProgress-dashedColorPrimary {
//     background-size: 10px 10px;
//     background-image: radial-gradient(rgb(175, 224, 229) 0%, rgb(175, 224, 229) 16%, transparent 42%);
//     background-position: 0px -23px;
//   }
//   .MuiLinearProgress-dashedColorSecondary {
//     background-size: 10px 10px;
//     background-image: radial-gradient(rgb(158, 246, 248) 0%, rgb(158, 246, 248) 16%, transparent 42%);
//     background-position: 0px -23px;
//   }
    bar: {
        top: 0,
        left: 0,
        width: '100%',
        bottom: 0,
        position: 'absolute',
        transition: 'transform 0.2s linear',
        transformOrigin: 'left',
        borderRadius: offset('1')
    },
    barColorPrimary: {
        backgroundColor: colorSecondary.default
    }
//   .MuiLinearProgress-barColorSecondary {
//     background-color: #00E8ED;
//   }
//   .MuiLinearProgress-bar1Indeterminate {
//     width: auto;
//     animation: MuiLinearProgress-keyframes-indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
//   }
//   .MuiLinearProgress-bar1Determinate {
//     transition: transform .4s linear;
//   }
//   .MuiLinearProgress-bar1Buffer {
//     z-index: 1;
//     transition: transform .4s linear;
//   }
//   .MuiLinearProgress-bar2Indeterminate {
//     width: auto;
//     animation: MuiLinearProgress-keyframes-indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
//     animation-delay: 1.15s;
//   }
//   .MuiLinearProgress-bar2Buffer {
//     transition: transform .4s linear;
//   }
//   @-webkit-keyframes MuiLinearProgress-keyframes-indeterminate1 {
//     0% {
//       left: -35%;
//       right: 100%;
//     }
//     60% {
//       left: 100%;
//       right: -90%;
//     }
//     100% {
//       left: 100%;
//       right: -90%;
//     }
//   }
//   @-webkit-keyframes MuiLinearProgress-keyframes-indeterminate2 {
//     0% {
//       left: -200%;
//       right: 100%;
//     }
//     60% {
//       left: 107%;
//       right: -8%;
//     }
//     100% {
//       left: 107%;
//       right: -8%;
//     }
//   }
//   @-webkit-keyframes MuiLinearProgress-keyframes-buffer {
//     0% {
//       opacity: 1;
//       background-position: 0px -23px;
//     }
//     50% {
//       opacity: 0;
//       background-position: 0px -23px;
//     }
//     100% {
//       opacity: 1;
//       background-position: -200px -23px;
//     }
//   }
};
export default MuiLinearProgress;