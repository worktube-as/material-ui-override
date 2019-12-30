const MuiLink = {
  root: {},
  underlineNone: {
    textDecoration: 'none'
  },
  underlineHover: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
      // color: 'inherit'
    }
  },
  underlineAlways: {
    textDecoration: 'underline'
  },
  button: {
    border: 0,
    cursor: 'pointer',
    margin: 0,
    outline: 0,
    padding: 0,
    position: 'relative',
    userSelect: 'none',
    borderRadius: 0,
    verticalAlign: 'middle',
    // -moz-appearance: 'none',
    backgroundColor: 'transparent' // -webkit-appearance: 'none',
    // -webkit-tap-highlight-color: 'transparent'

  } // button::-moz-focus-inner {
  //     border-style: none;
  // }
  // button.Mui-focusVisible {
  //     outline: 'auto'
  // }

};
export default MuiLink;