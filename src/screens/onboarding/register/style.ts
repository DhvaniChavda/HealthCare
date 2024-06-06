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
  },
  tSignIn: {
    color: COLOR.theme,
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: SIZES.countPixelRatio(19),
  },
  toButton: {
    marginBottom: SIZES.countPixelRatio(20),
  },
});
export default styles;
