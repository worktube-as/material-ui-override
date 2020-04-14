import { offset, colorDark, fontWeight } from 'worktube-theme/core';

const MuiAvatar = {
root: {
    // width: '40px',
    // height: '40px',
    // display: 'flex',
    // overflow: 'hidden',
    // position: 'relative',
    // fontSize: '2rem',
    // alignItems: 'center',
    // flexShrink: 0,
    // fontFamily: '"Montserrat", sans-serif',
    // lineHeight: 1,
    fontWeight: fontWeight.semibold,
    // userSelect: 'none',
    // borderRadius: '50%',
    // justifyContent: 'center'
  },
  colorDefault: {
    color: colorDark.default,
    backgroundColor: colorDark.lighten4
  },
//   rounded: {
//     borderRadius: '4px'
//   },
//   square: {
//     borderRadius: 0
//   },
//   img: {
//     color: 'transparent',
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//     textAlign: 'center',
//     textIndent: '10000px'
//   },
//   fallback: {
//     width: '75%',
//     height: '75%'
//   }
};
export default MuiAvatar;