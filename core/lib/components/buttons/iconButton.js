import { offset } from 'worktube-theme/core';

const MuiIconButton = {
  root: {
    //   flex: 0 0 auto;
    //   color: rgba(0, 0, 0, 0.53);
    //   padding: 12px;
    //   overflow: visible;
    //   font-size: 2.4rem;
    //   text-align: center;
    //   transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      borderRadius: offset('3'),
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
      '& path': {
        fill: colorDark.default
      }
    }
  },
  sizeSmall: {
    padding: offset('4')
  }
  // .MuiIconButton-root.Mui-disabled {
  //   color: rgba(0, 0, 0, 0.25);
  //   background-color: transparent;
  // }
  // @media (hover: none) {
  //   .MuiIconButton-root:hover {
  //     background-color: transparent;
  //   }
  // }
  // .MuiIconButton-edgeStart {
  //   margin-left: -12px;
  // }
  // .MuiIconButton-sizeSmall.MuiIconButton-edgeStart {
  //   margin-left: -3px;
  // }
  // .MuiIconButton-edgeEnd {
  //   margin-right: -12px;
  // }
  // .MuiIconButton-sizeSmall.MuiIconButton-edgeEnd {
  //   margin-right: -3px;
  // }
  // .MuiIconButton-colorInherit {
  //   color: inherit;
  // }
  // .MuiIconButton-colorPrimary {
  //   color: #2DAFBC;
  // }
  // .MuiIconButton-colorPrimary:hover {
  //   background-color: rgba(45, 175, 188, 0.12);
  // }
  // @media (hover: none) {
  //   .MuiIconButton-colorPrimary:hover {
  //     background-color: transparent;
  //   }
  // }
  // .MuiIconButton-colorSecondary {
  //   color: #00E8ED;
  // }
  // .MuiIconButton-colorSecondary:hover {
  //   background-color: rgba(0, 232, 237, 0.12);
  // }
  // @media (hover: none) {
  //   .MuiIconButton-colorSecondary:hover {
  //     background-color: transparent;
  //   }
  // }
  // .MuiIconButton-label {
  //   width: 100%;
  //   display: flex;
  //   align-items: inherit;
  //   justify-content: inherit;
  // }
};
export default MuiIconButton;