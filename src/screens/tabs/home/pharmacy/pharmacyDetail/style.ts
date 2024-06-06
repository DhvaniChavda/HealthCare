import {StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  SaContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  vMainContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
    marginHorizontal: SIZES.countPixelRatio(20),
  },
  iProduct: {
    height: SIZES.countPixelRatio(190),
    width: SIZES.countPixelRatio(190),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  vRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: SIZES.countPixelRatio(20),
  },
  iHeart: {
    height: SIZES.countPixelRatio(30),
    width: SIZES.countPixelRatio(30),
    resizeMode: 'contain',
  },
  tName: {
    fontSize: SIZES.countPixelRatio(24),
    color: COLOR.theme_black,
    fontFamily: FONTS.SEMI_BOLD,
  },
  tQty: {
    fontSize: SIZES.countPixelRatio(14),
    color: COLOR.theme_black,
    fontFamily: FONTS.SEMI_BOLD,
    opacity: 0.6,
  },
  tRating: {
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.theme,
    fontFamily: FONTS.SEMI_BOLD,
    marginTop: 3,
    marginHorizontal: 5,
  },
  iStar: {
    height: SIZES.countPixelRatio(18),
    width: SIZES.countPixelRatio(18),
    resizeMode: 'contain',
    marginRight: SIZES.countPixelRatio(5),
  },
  vMainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: SIZES.countPixelRatio(20),
  },
  tPrice: {
    fontSize: SIZES.countPixelRatio(30),
    color: COLOR.theme_black,
    fontFamily: FONTS.SEMI_BOLD,
  },
  iAdd: {
    height: SIZES.countPixelRatio(40),
    width: SIZES.countPixelRatio(40),
    resizeMode: 'contain',
  },
  vAdd: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toMinus: {
    height: 2,
    width: SIZES.countPixelRatio(25),
    backgroundColor: COLOR.theme_black,
    opacity: 0.4,
  },
  tDesc: {
    fontSize: SIZES.countPixelRatio(20),
    color: COLOR.theme_black,
    fontFamily: FONTS.SEMI_BOLD,
    marginBottom: SIZES.countPixelRatio(10),
  },
  tInfo: {
    fontSize: SIZES.countPixelRatio(14),
    color: COLOR.theme_black,
    fontFamily: FONTS.REGULAR,
    opacity: 0.6,
  },
});

export default styles;
