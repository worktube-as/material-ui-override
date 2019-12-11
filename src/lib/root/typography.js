import {
  fontWeight,
  fontFamily,
  letterSpacing,
  fontSize,
  lineHeight,
  colorDark
} from 'worktube-theme/core'

const typography = {
  htmlFontSize: 10,
  // fontSize: 16,
  // lineHeight: 1,
  fontWeightLight: fontWeight.light,
  fontWeightRegular: fontWeight.regular,
  fontWeightMedium: fontWeight.medium,
  fontWeightSemiBold: fontWeight.semibold,
  letterSpacing: letterSpacing['0'],
  fontStyle: 'normal',
  fontFamily: fontFamily.primary,
  h1: {
    color: colorDark.default,
    fontFamily: fontFamily.primary,
    fontSize: fontSize.mega1,
    lineHeight: lineHeight.mega1,
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacing['0']
  },
  h2: {
    color: colorDark.default,
    fontFamily: fontFamily.primary,
    fontSize: fontSize.mega2,
    lineHeight: lineHeight.mega2,
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacing['0']
  },
  h3: {
    color: colorDark.default,
    fontFamily: fontFamily.primary,
    fontSize: fontSize.maintitle,
    lineHeight: lineHeight.maintitle,
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacing['0']
  },
  h4: {
    color: colorDark.default,
    fontFamily: fontFamily.primary,
    fontSize: fontSize.title,
    lineHeight: lineHeight.title,
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacing['0']
  },
  h5: {
    color: colorDark.default,
    fontFamily: fontFamily.primary,
    fontSize: fontSize.subtitle,
    lineHeight: lineHeight.subtitle,
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacing['0']
  },
  h6: {
    color: colorDark.default,
    fontFamily: fontFamily.primary,
    fontSize: fontSize.body1,
    lineHeight: lineHeight.body1,
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacing['0']
  },
  subtitle1: {
    color: colorDark.default,
    fontFamily: fontFamily.primary,
    fontSize: fontSize.body1,
    lineHeight: lineHeight.body1,
    fontWeight: fontWeight.regular,
    letterSpacing: letterSpacing['0']
  },
  subtitle2: {
    color: colorDark.default,
    fontFamily: fontFamily.primary,
    fontSize: fontSize.body,
    lineHeight: lineHeight.body2,
    fontWeight: fontWeight.regular,
    letterSpacing: letterSpacing['0']
  },
  body1: {
    color: colorDark.default,
    fontFamily: fontFamily.primary,
    fontSize: fontSize.body1,
    lineHeight: lineHeight.body1,
    fontWeight: fontWeight.regular,
    letterSpacing: letterSpacing['0']
  },
  body2: {
    color: colorDark.default,
    fontFamily: fontFamily.primary,
    fontSize: fontSize.body2,
    lineHeight: lineHeight.body2,
    fontWeight: fontWeight.regular,
    letterSpacing: letterSpacing['0']
  },
  button: {
    color: colorDark.default,
    fontFamily: fontFamily.primary,
    fontSize: fontSize.body2,
    lineHeight: lineHeight.body2,
    fontWeight: fontWeight.medium,
    letterSpacing: letterSpacing['0'],
    textTransform: 'none'
  },
  caption: {
    color: colorDark.default,
    fontFamily: fontFamily.primary,
    fontSize: fontSize.caption1,
    lineHeight: lineHeight.caption1,
    fontWeight: fontWeight.regular,
    letterSpacing: letterSpacing['0']
  },
  overline: {
    color: colorDark.default,
    fontFamily: fontFamily.primary,
    fontSize: fontSize.caption2,
    lineHeight: lineHeight.caption2,
    fontWeight: fontWeight.semibold,
    letterSpacing: letterSpacing['0']
  }
}

export default typography
