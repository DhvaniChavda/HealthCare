import {StatusBar, StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  SaContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  vContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
    alignItems: 'center',
    justifyContent: 'center',
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
  vInfo: {
    marginVertical: SIZES.countPixelRatio(25),
  },
  tTitle: {
    color: COLOR.theme_black,
    fontFamily: FONTS.BOLD,
    fontSize: SIZES.countPixelRatio(24),
    textAlign: 'center',
  },
  tInfo: {
    color: COLOR.theme_black,
    fontFamily: FONTS.REGULAR,
    fontSize: SIZES.countPixelRatio(18),
    textAlign: 'center',
    opacity: 0.6,
  },
  toLogin: {
    width: SIZES.smartWidthScale(250),
  },
  toSignUp: {
    backgroundColor: COLOR.white,
    borderWidth: 2,
    borderColor: COLOR.theme,
    width: SIZES.smartWidthScale(250),
    marginTop: SIZES.countPixelRatio(20),
  },
  tSignUp: {
    color: COLOR.theme,
    fontFamily: FONTS.MEDIUM,
  },
});
export default styles;
