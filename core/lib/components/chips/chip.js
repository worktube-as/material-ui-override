import { offset, colorDark, colorWhite, colorPrimary } from 'worktube-theme/core';
const MuiChip = {
    root: {
        // color: 'rgba(0, 0, 0, 0.7)',
        // border: 'none',
        // cursor: 'default',
        // height: offset('16'),
        width: '100%',
        // display: 'inline-flex',
        // outline: 0,
        // padding: 0,
        fontSize: '1.2rem',
        // boxSizing: 'border-box',
        // transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        // alignItems: 'center',
        // fontFamily: '"Montserrat", sans-serif',
        // whiteSpace: 'nowrap',
        // borderRadius: '16px',
        // verticalAlign: 'middle',
        // justifyContent: 'center',
        // textDecoration: 'none',
        backgroundColor: colorDark.lighten5,
        padding: offset('2')
    },
//   .MuiChip-root.Mui-disabled {
//     opacity: 0.5;
//     pointer-events: none;
//   }
//   .MuiChip-sizeSmall {
//     height: 24px;
//   }
//   .MuiChip-colorPrimary {
//     color: #ffffff;
//     background-color: #2DAFBC;
//   }
//   .MuiChip-colorSecondary {
//     color: rgba(0, 0, 0, 0.7);
//     background-color: #00E8ED;
//   }
    clickable: {
        cursor: 'pointer',
        userSelect: 'none',
        // -webkit-tap-highlight-color: transparent
        '&:hover': {
            backgroundColor: colorPrimary.lighten4
        },
        '&:focus': {
            backgroundColor: colorPrimary.lighten4
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: colorPrimary.lighten4
        }
    },
//   .MuiChip-clickableColorPrimary:hover, .MuiChip-clickableColorPrimary:focus {
//     background-color: rgb(61, 181, 193);
//   }
//   .MuiChip-clickableColorPrimary:active {
//     background-color: rgb(70, 184, 196);
//   }
//   .MuiChip-clickableColorSecondary:hover, .MuiChip-clickableColorSecondary:focus {
//     background-color: rgb(0, 213, 218);
//   }
//   .MuiChip-clickableColorSecondary:active {
//     background-color: rgb(0, 204, 208);
//   }
deletable: {
  '&:focus': {
    backgroundColor: colorPrimary.lighten3
  }
},
//   .MuiChip-deletableColorPrimary:focus {
//     background-color: rgb(87, 191, 201);
//   }
//   .MuiChip-deletableColorSecondary:focus {
//     background-color: rgb(0, 185, 189);
//   }
//   .MuiChip-outlined {
//     border: 1px solid rgba(0, 0, 0, 0.23);
//     background-color: transparent;
//   }
//   .MuiChip-clickable.MuiChip-outlined:hover, .MuiChip-clickable.MuiChip-outlined:focus, .MuiChip-deletable.MuiChip-outlined:focus {
//     background-color: rgba(0, 0, 0, 0.12);
//   }
//   .MuiChip-outlined .MuiChip-avatar {
//     margin-left: 4px;
//   }
//   .MuiChip-outlined .MuiChip-avatarSmall {
//     margin-left: 2px;
//   }
//   .MuiChip-outlined .MuiChip-icon {
//     margin-left: 4px;
//   }
//   .MuiChip-outlined .MuiChip-iconSmall {
//     margin-left: 2px;
//   }
//   .MuiChip-outlined .MuiChip-deleteIcon {
//     margin-right: 5px;
//   }
//   .MuiChip-outlined .MuiChip-deleteIconSmall {
//     margin-right: 3px;
//   }
//   .MuiChip-outlinedPrimary {
//     color: #2DAFBC;
//     border: 1px solid #2DAFBC;
//   }
//   .MuiChip-clickable.MuiChip-outlinedPrimary:hover, .MuiChip-clickable.MuiChip-outlinedPrimary:focus, .MuiChip-deletable.MuiChip-outlinedPrimary:focus {
//     background-color: rgba(45, 175, 188, 0.12);
//   }
//   .MuiChip-outlinedSecondary {
//     color: #00E8ED;
//     border: 1px solid #00E8ED;
//   }
//   .MuiChip-clickable.MuiChip-outlinedSecondary:hover, .MuiChip-clickable.MuiChip-outlinedSecondary:focus, .MuiChip-deletable.MuiChip-outlinedSecondary:focus {
//     background-color: rgba(0, 232, 237, 0.12);
//   }
//   .MuiChip-avatar {
//     color: #616161;
//     width: 24px;
//     height: 24px;
//     font-size: 1.2rem;
//     margin-left: 5px;
//     margin-right: -6px;
//   }
//   .MuiChip-avatarSmall {
//     width: 18px;
//     height: 18px;
//     font-size: 1rem;
//     margin-left: 4px;
//     margin-right: -4px;
//   }
//   .MuiChip-avatarColorPrimary {
//     color: #ffffff;
//     background-color: #22838D;
//   }
//   .MuiChip-avatarColorSecondary {
//     color: rgba(0, 0, 0, 0.7);
//     background-color: #00AEB2;
//   }
//   .MuiChip-icon {
//     color: #616161;
//     margin-left: 5px;
//     margin-right: -6px;
//   }
//   .MuiChip-iconSmall {
//     width: 18px;
//     height: 18px;
//     margin-left: 4px;
//     margin-right: -4px;
//   }
//   .MuiChip-iconColorPrimary {
//     color: inherit;
//   }
//   .MuiChip-iconColorSecondary {
//     color: inherit;
//   }
  label: {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: offset('4'),
    marginRight: offset('8')
  },
//   .MuiChip-labelSmall {
//     padding-left: 8px;
//     padding-right: 8px;
//   }
  deleteIcon: {
    color: colorWhite.default,
    width: 'auto',
    cursor: 'pointer',
    height: 'auto',
    margin: 0,
    marginLeft: 'auto',
    // -webkit-tap-highlight-color: transparent,
    '&:hover': {
        color: colorWhite.default
    }
  }
//   .MuiChip-deleteIconSmall {
//     width: 16px;
//     height: 16px;
//     margin-left: -4px;
//     margin-right: 4px;
//   }
//   .MuiChip-deleteIconColorPrimary {
//     color: rgba(255, 255, 255, 0.7);
//   }
//   .MuiChip-deleteIconColorPrimary:hover, .MuiChip-deleteIconColorPrimary:active {
//     color: #ffffff;
//   }
//   .MuiChip-deleteIconColorSecondary {
//     color: rgba(0, 0, 0, 0.7);
//   }
//   .MuiChip-deleteIconColorSecondary:hover, .MuiChip-deleteIconColorSecondary:active {
//     color: rgba(0, 0, 0, 0.7);
//   }
//   .MuiChip-deleteIconOutlinedColorPrimary {
//     color: rgba(45, 175, 188, 0.7);
//   }
//   .MuiChip-deleteIconOutlinedColorPrimary:hover, .MuiChip-deleteIconOutlinedColorPrimary:active {
//     color: #2DAFBC;
//   }
//   .MuiChip-deleteIconOutlinedColorSecondary {
//     color: rgba(0, 232, 237, 0.7);
//   }
//   .MuiChip-deleteIconOutlinedColorSecondary:hover, .MuiChip-deleteIconOutlinedColorSecondary:active {
//     color: #00E8ED;
//   }
};
export default MuiChip;