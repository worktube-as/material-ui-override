import { colorDark, colorSecondary, colorPrimary, fontSize, lineHeight, offset, shadows } from 'worktube-theme/core';

const MuiButton = {
  root: {
    lineHeight: lineHeight.body1,
    borderRadius: offset('3'),
    paddingTop: offset('6'),
    paddingRight: offset('8'),
    paddingBottom: offset('6'),
    paddingLeft: offset('8'),
    minWidth: 'auto',
    // transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: colorDark.lighten5,
      // @media (hover: none) {
      //   .MuiButton-root:hover {
      //     background-color: transparent;
      //   }
      // }
      '&$disabled': {
        backgroundColor: 'transparent'
      },
    },
    '&$disabled': {
      color: colorDark.lighten3,
      backgroundColor: colorDark.lighten6,
      '& path': {
        fill: colorDark.lighten3
      }
    },
  },
  contained: {
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
      '&$disabled': {
        backgroundColor: 'rgba(0, 0, 0, 0.08)'
      }
    },
    // @media (hover: none) {
    //   .MuiButton-contained:hover {
    //     box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
    //     background-color: #e0e0e0;
    //   }
    // }
    '&:active': {
      boxShadow: 'none'
    },
    '&$disabled': {
      color: colorDark.lighten3,
      backgroundColor: colorDark.lighten6,
      boxShadow: 'none',
      '& path': {
        fill: colorDark.lighten3
      }
    },
    '&$focusVisible': {
      boxShadow: 'none'
    }
  },
  containedPrimary: {
    color: colorDark.default,
    boxShadow: 'none',
    backgroundColor: colorSecondary.default,
    '&:hover': {
      boxShadow: shadows.buttonPrimary,
      backgroundColor: colorSecondary.default,
      transition: 'box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1)'
    }
    // @media (hover: none) {
    //   .MuiButton-containedPrimary:hover {
    //     background-color: #2DAFBC;
    //   }
    // }
  },
  containedSecondary: {
    background: colorPrimary.default,
    '&:hover': {
      background: colorPrimary.darken1
    }
    // @media (hover: none) {
    //   '&:hover': {
    //     background-color: #00E8ED;
    //     background: worktubeUIConfig.theme.gradients.primary,
    //   }
    // }

  },
  containedSizeSmall: {
    paddingTop: offset('4'),
    paddingRight: offset('6'),
    paddingBottom: offset('4'),
    paddingLeft: offset('6'),
    borderRadius: offset('3'),
    fontSize: fontSize.caption1,
    lineHeight: lineHeight.caption1
  },
  containedSizeLarge: {
    paddingTop: offset('8'),
    paddingRight: offset('12'),
    paddingBottom: offset('8'),
    paddingLeft: offset('12'),
    borderRadius: offset('3'),
    fontSize: fontSize.body1,
    lineHeight: lineHeight.body1
  },
  text: {
    paddingTop: offset('6'),
    paddingRight: offset('8'),
    paddingBottom: offset('6'),
    paddingLeft: offset('8')
  },
  textPrimary: {
    color: colorPrimary.default,
    '&:hover': {
      backgroundColor: colorPrimary.lighten4
    }
    // @media (hover: none) {
    //   .MuiButton-textPrimary:hover {
    //     background-color: transparent;
    //   }
    // }
  },
  textSecondary: {
    color: colorSecondary.default,
    '&:hover': {
      backgroundColor: colorSecondary.lighten4
    }
    // @media (hover: none) {
    //   .MuiButton-textSecondary:hover {
    //     background-color: transparent;
    //   }
    // }
  },
  textSizeSmall: {
    paddingTop: offset('4'),
    paddingRight: offset('6'),
    paddingBottom: offset('4'),
    paddingLeft: offset('6'),
    borderRadius: offset('3'),
    fontSize: fontSize.caption1,
    lineHeight: lineHeight.caption1
  },
  textSizeLarge: {
    paddingTop: offset('8'),
    paddingRight: offset('12'),
    paddingBottom: offset('8'),
    paddingLeft: offset('12'),
    borderRadius: offset('3'),
    fontSize: fontSize.body1,
    lineHeight: lineHeight.body1
  },
  label: {
    width: '100%',
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit'
  },
  startIcon: {
    display: 'inherit',
    marginLeft: offset('0'),
    marginRight: offset('4')
  },
  endIcon: {
    display: 'inherit',
    marginLeft: offset('4'),
    marginRight: offset('0')
  }
  // .MuiButton-colorInherit {
  //   color: inherit;
  //   border-color: currentColor;
  // }
  // .MuiButton-fullWidth {
  //   width: 100%;
  // }
};
export default MuiButton;