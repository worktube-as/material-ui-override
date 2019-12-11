import worktubeUIConfig from 'app/styles/worktube-theme';
const MuiFormLabel = {
  root: {
    color: worktubeUIConfig.theme.dark.lighten2,
    //   padding: 0,
    //   fontSize: '1.7rem',
    //   fontFamily: "Montserrat", sans-serif,
    //   fontWeight: 400,
    //   lineHeight: 1,
    //   letterSpacing: '0px'
    '&$focused': {
      color: worktubeUIConfig.theme.primary.default
    }
  } //   .MuiFormLabel-root.Mui-disabled {
  //     color: rgba(0, 0, 0, 0.18);
  //   }
  //   .MuiFormLabel-root.Mui-error {
  //     color: #E03C3B;
  //   }
  //   .MuiFormLabel-asterisk.Mui-error {
  //     color: #E03C3B;
  //   }

};
export default MuiFormLabel;