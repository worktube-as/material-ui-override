import { shadows, colorWhite, colorDark } from 'worktube-theme/core';
const MuiPaper = {
  root: {
    color: colorDark.default,
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    backgroundColor: colorWhite.default
  },
  rounded: {
    borderRadius: '4px'
  },
  elevation0: {
    boxShadow: 'none'
  },
  elevation1: {
    boxShadow: shadows.xs
  },
  elevation2: {
    boxShadow: shadows.sm
  },
  elevation3: {
    boxShadow: shadows.md
  },
  elevation4: {
    boxShadow: shadows.lg
  },
  elevation5: {
    boxShadow: shadows.xl
  } // elevation6: {
  //   boxShadow:
  //     '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)'
  // },
  // elevation7: {
  //   boxShadow:
  //     '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)'
  // },
  // elevation8: {
  //   boxShadow:
  //     '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)'
  // },
  // elevation9: {
  //   boxShadow:
  //     '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)'
  // },
  // elevation10: {
  //   boxShadow:
  //     '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)'
  // },
  // elevation11: {
  //   boxShadow:
  //     '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)'
  // },
  // elevation12: {
  //   boxShadow:
  //     '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)'
  // },
  // elevation13: {
  //   boxShadow:
  //     '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)'
  // },
  // elevation14: {
  //   boxShadow:
  //     '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)'
  // },
  // elevation15: {
  //   boxShadow:
  //     '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)'
  // },
  // elevation16: {
  //   boxShadow:
  //     '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)'
  // },
  // elevation17: {
  //   boxShadow:
  //     '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)'
  // },
  // elevation18: {
  //   boxShadow:
  //     '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)'
  // },
  // elevation19: {
  //   boxShadow:
  //     '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)'
  // },
  // elevation20: {
  //   boxShadow:
  //     '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)'
  // },
  // elevation21: {
  //   boxShadow:
  //     '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)'
  // },
  // elevation22: {
  //   boxShadow:
  //     '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)'
  // },
  // elevation23: {
  //   boxShadow:
  //     '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)'
  // },
  // elevation24: {
  //   boxShadow:
  //     '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)'
  // }

};
export default MuiPaper;