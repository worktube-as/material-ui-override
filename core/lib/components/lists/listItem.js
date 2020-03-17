import { borderRadius, colorDark, colorPrimary } from 'worktube-theme/core';
const MuiListItem = {
  // root: {
  //   width: 100%;
  //   display: flex;
  //   position: relative;
  //   box-sizing: border-box;
  //   text-align: left;
  //   align-items: center;
  //   padding-top: 8px;
  //   padding-bottom: 8px;
  //   justify-content: flex-start;
  //   text-decoration: none;
  // }
  '.MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover': {
    backgroundColor: colorPrimary.lighten3
  },
  button: {
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: colorPrimary.lighten5
    }
  },
  // @media (hover: none) {
  //   .MuiListItem-button:hover {
  //     background-color: transparent;
  //   }
  // }
  //   .MuiListItem-root.Mui-focusVisible {
  //     background-color: rgba(0, 0, 0, 0.15);
  //   }
  //   .MuiListItem-root.Mui-disabled {
  //     opacity: 0.5;
  //   }
  //   .MuiListItem-container {
  //     position: relative;
  //   }
  //   .MuiListItem-dense {
  //     padding-top: 4px;
  //     padding-bottom: 4px;
  //   }
  //   .MuiListItem-alignItemsFlexStart {
  //     align-items: flex-start;
  //   }
  //   .MuiListItem-divider {
  //     border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  //     background-clip: padding-box;
  //   }
  //   .MuiListItem-gutters {
  //     padding-left: 16px;
  //     padding-right: 16px;
  //   }
  button: {
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: colorDark.lighten5
    }
  } //   @media (hover: none) {
  //     .MuiListItem-button:hover {
  //       background-color: transparent;
  //     }
  //   }
  //   .MuiListItem-secondaryAction {
  //     padding-right: 48px;
  //   }

};
export default MuiListItem;