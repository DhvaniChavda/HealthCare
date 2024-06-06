import {StatusBar, StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  SaContainer: {
    flex: 1,
  },
  vContainer: {
    flex: 1,
  },
  iSplash: {
    width: SIZES.WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    height: SIZES.HEIGHT + SIZES.smartScale(40),
  },
  iLogo: {
    height: SIZES.countPixelRatio(160),
    width: SIZES.countPixelRatio(180),
    resizeMode: 'contain',
    marginBottom: SIZES.countPixelRatio(20),
  },
  tHealth: {
    color: COLOR.light_blue_22,
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: SIZES.countPixelRatio(32),
  },
  tMedical: {
    color: COLOR.light_blue_21,
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: SIZES.countPixelRatio(16),
  },
});
export default styles;
