import { borderRadius } from 'worktube-theme/core';
const MuiListItem = {
  // root: {
  //     width: '100%',
  //     display: 'flex',
  //     position: 'relative',
  //     boxSizing: 'border-box',
  //     textAlign: 'left',
  //     alignItems: 'center',
  //     paddingTop: offset('4'),
  //     paddingBottom: offset('4'),
  //     justifyContent: 'flex-start',
  //     textDecoration: 'none'
  // }
  //   .MuiListItem-root.Mui-focusVisible {
  //     background-color: rgba(0, 0, 0, 0.15);
  //   }
  //   .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover {
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
      backgroundColor: 'rgba(0, 0, 0, 0.07)',
      borderRadius: borderRadius['4']
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