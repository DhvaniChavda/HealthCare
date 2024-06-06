import {StatusBar, StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  SaContainer: {
    flex: 1,
  },
  vContainer: {
    flex: 1,
  },
  iBlueBg: {
    height: SIZES.HEIGHT,
    width: SIZES.WIDTH,
  },
  vHeader: {
    flexDirection: 'row',
    paddingTop: SIZES.smartScale(70),
    paddingHorizontal: SIZES.smartWidthScale(25),
    justifyContent: 'space-between',
  },
  iMainDoctor: {
    height: SIZES.countPixelRatio(250),
    width: SIZES.countPixelRatio(160),
  },
  iProfile: {
    height: SIZES.countPixelRatio(70),
    width: SIZES.countPixelRatio(70),
    resizeMode: 'contain',
  },
  tWelcome: {
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.theme_black,
    fontFamily: FONTS.MEDIUM,
  },
  tName: {
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.theme_black,
    fontFamily: FONTS.LIGHT,
  },
  tGoing: {
    fontSize: SIZES.countPixelRatio(15),
    color: COLOR.theme_black,
    fontFamily: FONTS.MEDIUM,
    opacity: 0.5,
  },
  vMainContainer: {
    backgroundColor: COLOR.white,
    flex: 1,
    paddingHorizontal: SIZES.smartWidthScale(30),
    paddingTop: SIZES.countPixelRatio(20),
    borderTopLeftRadius: SIZES.countPixelRatio(30),
    borderTopRightRadius: SIZES.countPixelRatio(30),
  },
  vRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vImage: {
    backgroundColor: COLOR.theme,
    height: SIZES.countPixelRatio(70),
    width: SIZES.countPixelRatio(70),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.countPixelRatio(70),
    marginBottom: SIZES.countPixelRatio(15),
    alignSelf: 'center',
  },
  tLable: {
    fontSize: SIZES.countPixelRatio(16),
    fontFamily: FONTS.REGULAR,
    color: COLOR.theme_black,
  },
  iIcon: {
    height: SIZES.countPixelRatio(40),
    width: SIZES.countPixelRatio(40),
    resizeMode: 'contain',
  },
  tHealth: {
    fontSize: SIZES.countPixelRatio(18),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.theme_black,
  },
  tSeaAll: {
    fontSize: SIZES.countPixelRatio(14),
    fontFamily: FONTS.REGULAR,
    color: COLOR.theme,
  },
  flatlist: {
    marginBottom: SIZES.countPixelRatio(50),
    marginTop: SIZES.countPixelRatio(10),
  },
});
export default styles;
