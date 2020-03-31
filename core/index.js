import breakpoints from './lib/root/breakpoints';
import palette from './lib/root/palette';
import typography from './lib/root/typography';
import shadow from './lib/root/shadow';
import shape from './lib/root/shape';
import transitions from './lib/root/transitions';
import zIndexes from './lib/root/zIndex';
import components from './lib/components';
const worktubeMaterialTheme = {
  breakpoints: breakpoints,
  palette: palette,
  typography: typography,
  shadow: shadow,
  shape: shape,
  transitions: transitions,
  zIndex: zIndexes,
  overrides: components
};
export default worktubeMaterialTheme;