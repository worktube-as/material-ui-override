import worktubeUIConfig from 'app/styles/worktube-theme';
const MuiButton = {
  root: {
    borderRadius: '100rem',
    padding: '10px 16px',
    // transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: worktubeUIConfig.theme.dark.lighten5
    },
    '&.Mui-disabled': {
      color: worktubeUIConfig.theme.dark.lighten3
    }
  },
  text: {
    padding: '10px 16px'
  },
  textSizeSmall: {
    padding: '4px 8px',
    fontSize: worktubeUIConfig.typography.fontSize.caption1,
    lineHeight: worktubeUIConfig.typography.lineHeight.caption1
  },
  textSizeLarge: {
    padding: '16px 24px',
    fontSize: worktubeUIConfig.typography.fontSize.body1,
    lineHeight: worktubeUIConfig.typography.lineHeight.body1
  },
  containedSizeSmall: {
    padding: '4px 8px',
    fontSize: worktubeUIConfig.typography.fontSize.caption1,
    lineHeight: worktubeUIConfig.typography.lineHeight.caption1
  },
  containedSizeLarge: {
    padding: '16px 24px',
    fontSize: worktubeUIConfig.typography.fontSize.body1,
    lineHeight: worktubeUIConfig.typography.lineHeight.body1
  },
  contained: {
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none'
    },
    '&$disabled': {
      color: 'rgba(0, 0, 0, 0.24)',
      boxShadow: 'none',
      background: 'rgba(0, 0, 0, 0.08)'
    }
  },
  containedPrimary: {
    boxShadow: 'none',
    background: worktubeUIConfig.theme.gradients.primary,
    '&:hover': {
      boxShadow: 'none',
      background: worktubeUIConfig.theme.gradients.secondary
    } // @media (hover: none) {
    //   .MuiButton-containedPrimary:hover {
    //     background-color: #2DAFBC;
    //   }
    // }

  },
  containedSecondary: {
    background: worktubeUIConfig.theme.secondary.default,
    '&:hover': {
      background: worktubeUIConfig.theme.secondary.darken1
    } // @media (hover: none) {
    //   '&:hover': {
    //     // background-color: #00E8ED;
    //     background: worktubeUIConfig.theme.gradients.primary,
    //   }
    // }

  },
  label: {
    width: '100%',
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit' // textShadow: '0px 1px 1px ' + worktubeUIConfig.theme.black.lighten4

  },
  startIcon: {
    display: 'inherit',
    marginLeft: worktubeUIConfig.offset('0'),
    marginRight: worktubeUIConfig.offset('4')
  },
  endIcon: {
    display: 'inherit',
    marginLeft: worktubeUIConfig.offset('4'),
    marginRight: worktubeUIConfig.offset('0')
  } // @media (hover: none) {
  //   .MuiButton-root:hover {
  //     background-color: transparent;
  //   }
  // }
  // .MuiButton-root:hover.Mui-disabled {
  //   background-color: transparent;
  // }
  // .MuiButton-textPrimary {
  //   color: #2DAFBC;
  // }
  // .MuiButton-textPrimary:hover {
  //   background-color: rgba(45, 175, 188, 0.12);
  // }
  // @media (hover: none) {
  //   .MuiButton-textPrimary:hover {
  //     background-color: transparent;
  //   }
  // }
  // .MuiButton-textSecondary {
  //   color: #00E8ED;
  // }
  // .MuiButton-textSecondary:hover {
  //   background-color: rgba(0, 232, 237, 0.12);
  // }
  // @media (hover: none) {
  //   .MuiButton-textSecondary:hover {
  //     background-color: transparent;
  //   }
  // }
  // .MuiButton-contained.Mui-focusVisible {
  //   box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
  // }
  // .MuiButton-contained:active {
  //   box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
  // }
  // @media (hover: none) {
  //   .MuiButton-contained:hover {
  //     box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
  //     background-color: #e0e0e0;
  //   }
  // }
  // .MuiButton-contained:hover.Mui-disabled {
  //   background-color: rgba(0, 0, 0, 0.08);
  // }
  // .MuiButton-colorInherit {
  //   color: inherit;
  //   border-color: currentColor;
  // }
  // .MuiButton-fullWidth {
  //   width: 100%;
  // }
  // .MuiButton-iconSizeSmall > *:first-child {
  //   font-size: 18px;
  // }
  // .MuiButton-iconSizeMedium > *:first-child {
  //   font-size: 20px;
  // }
  // .MuiButton-iconSizeLarge > *:first-child {
  //   font-size: 22px;
  // }

};
export default MuiButton;