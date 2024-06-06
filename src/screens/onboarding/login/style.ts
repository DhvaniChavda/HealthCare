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
    marginHorizontal: SIZES.countPixelRatio(20),
    marginBottom: SIZES.countPixelRatio(20),
  },
  iCheck: {
    height: SIZES.countPixelRatio(30),
    width: SIZES.countPixelRatio(30),
    resizeMode: 'contain',
    marginRight: SIZES.countPixelRatio(15),
  },
  vRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tAgree: {
    fontFamily: FONTS.REGULAR,
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.theme_black,
  },
  tTnc: {
    color: COLOR.theme,
  },
  tDoNot: {
    fontFamily: FONTS.REGULAR,
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.theme_black,
    textAlign: 'center',
    marginBottom: SIZES.smartScale(30),
  },
  tSignIn: {
    color: COLOR.theme,
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: SIZES.countPixelRatio(19),
  },
  toButton: {
    marginBottom: SIZES.countPixelRatio(20),
  },
  tForgot: {
    color: COLOR.theme,
    fontFamily: FONTS.MEDIUM,
    fontSize: SIZES.countPixelRatio(15),
    textAlign: 'right',
    marginBottom: SIZES.smartScale(40),
  },
  vLine: {
    height: 2,
    backgroundColor: COLOR.light_gray,
    width: SIZES.countPixelRatio(170),
  },
  tOR: {
    color: COLOR.light_gray,
    fontFamily: FONTS.MEDIUM,
    fontSize: SIZES.countPixelRatio(24),
    marginHorizontal: SIZES.countPixelRatio(15),
  },
  vSocial: {
    backgroundColor: COLOR.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR.theme_black_op1,
    paddingHorizontal: SIZES.countPixelRatio(20),
    paddingVertical: SIZES.countPixelRatio(20),
    borderRadius: SIZES.countPixelRatio(10),
    marginBottom: SIZES.smartScale(25),
  },
  iGoogle: {
    height: SIZES.countPixelRatio(30),
    width: SIZES.countPixelRatio(30),
    resizeMode: 'contain',
    marginRight: SIZES.smartWidthScale(20),
  },
  tSocial: {
    color: COLOR.theme_black,
    fontSize: SIZES.countPixelRatio(20),
    fontFamily: FONTS.SEMI_BOLD,
  },
});
export default styles;
