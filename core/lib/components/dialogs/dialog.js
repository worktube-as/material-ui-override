// import { colorWhite } from 'worktube-theme/core';
const MuiDialog = {
// @media print {
//     .MuiDialog-root {
//       position: absolute !important;
//     }
//   }
//   .MuiDialog-scrollPaper {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   .MuiDialog-scrollBody {
//     overflow-x: hidden;
//     overflow-y: auto;
//     text-align: center;
//   }
//   .MuiDialog-scrollBody:after {
//     width: 0;
//     height: 100%;
//     content: "";
//     display: inline-block;
//     vertical-align: middle;
//   }
//   .MuiDialog-container {
//     height: 100%;
//     outline: 0;
//   }
//   @media print {
//     .MuiDialog-container {
//       height: auto;
//     }
//   }
  paper: {
    margin: offset('8')
    // position: relative;
    // overflow-y: auto;
  },
//   @media print {
//     .MuiDialog-paper {
//       box-shadow: none;
//       overflow-y: visible;
//     }
//   }
  paperScrollPaper: {
    // display: flex;
    maxHeight: 'calc(100% - 32px)'
    // flex-direction: column;
  },
//   .MuiDialog-paperScrollBody {
//     display: inline-block;
//     text-align: left;
//     vertical-align: middle;
//   }
//   .MuiDialog-paperWidthFalse {
//     max-width: calc(100% - 64px);
//   }
//   .MuiDialog-paperWidthXs {
//     max-width: 444px;
//   }
//   @media (max-width:507.95px) {
//     .MuiDialog-paperWidthXs.MuiDialog-paperScrollBody {
//       max-width: calc(100% - 64px);
//     }
//   }
//   .MuiDialog-paperWidthSm {
//     max-width: 600px;
//   }
//   @media (max-width:663.95px) {
//     .MuiDialog-paperWidthSm.MuiDialog-paperScrollBody {
//       max-width: calc(100% - 64px);
//     }
//   }
//   .MuiDialog-paperWidthMd {
//     max-width: 960px;
//   }
//   @media (max-width:1023.95px) {
//     .MuiDialog-paperWidthMd.MuiDialog-paperScrollBody {
//       max-width: calc(100% - 64px);
//     }
//   }
//   .MuiDialog-paperWidthLg {
//     max-width: 1280px;
//   }
//   @media (max-width:1343.95px) {
//     .MuiDialog-paperWidthLg.MuiDialog-paperScrollBody {
//       max-width: calc(100% - 64px);
//     }
//   }
//   .MuiDialog-paperWidthXl {
//     max-width: 1920px;
//   }
//   @media (max-width:1983.95px) {
//     .MuiDialog-paperWidthXl.MuiDialog-paperScrollBody {
//       max-width: calc(100% - 64px);
//     }
//   }
  paperFullWidth: {
    width: 'calc(100% - 32px)'
  }
//   .MuiDialog-paperFullScreen {
//     width: 100%;
//     height: 100%;
//     margin: 0;
//     max-width: 100%;
//     max-height: none;
//     border-radius: 0;
//   }
//   .MuiDialog-paperFullScreen.MuiDialog-paperScrollBody {
//     margin: 0;
//     max-width: 100%;
//   }
};
export default MuiDialog;