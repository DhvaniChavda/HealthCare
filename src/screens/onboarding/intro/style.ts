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
  },
  imageStyle: {
    height: SIZES.smartScale(450),
    resizeMode: 'contain',
    width: '100%',
    backgroundColor: COLOR.white,
    flex: 1,
    // marginTop: SIZES.smartScale(30),
  },
  vTitle: {
    marginHorizontal: SIZES.smartWidthScale(20),
    alignItems: 'center',
    // marginBottom: ,
    bottom: SIZES.smartScale(80),

    position: 'absolute',
  },
  tTitle: {
    fontSize: SIZES.countPixelRatio(24),
    fontFamily: FONTS.BOLD,
    color: COLOR.theme_black,
  },
  tSkip: {
    fontSize: SIZES.countPixelRatio(16),
    fontFamily: FONTS.REGULAR,
    color: COLOR.light_gray,
    marginHorizontal: SIZES.countPixelRatio(20),
    textAlign: 'right',
    marginTop: SIZES.countPixelRatio(30),
  },
  vBottomRowContainer: {
    flexDirection: 'row',
    marginBottom: SIZES.smartScale(25),
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    alignItems: 'center',
    marginHorizontal: SIZES.countPixelRatio(20),
  },
  vDot: {
    // backgroundColor: 'red',
    flex: 1,
  },
  vDotInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inActiveDots: {
    height: SIZES.countPixelRatio(5),
    width: SIZES.countPixelRatio(20),
    borderRadius: SIZES.countPixelRatio(20) / 2,
    backgroundColor: COLOR.theme,
    opacity: 0.3,
    marginLeft: SIZES.smartWidthScale(5),
  },
  activeDots: {
    height: SIZES.countPixelRatio(5),
    width: SIZES.countPixelRatio(20),
    borderRadius: SIZES.countPixelRatio(20) / 2,
    backgroundColor: COLOR.theme,
    marginLeft: SIZES.smartWidthScale(5),
  },
  toNext: {
    height: SIZES.countPixelRatio(60),
    width: SIZES.countPixelRatio(60),
    borderRadius: SIZES.countPixelRatio(30),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.theme,
  },
  iNext: {
    height: SIZES.countPixelRatio(24),
    width: SIZES.countPixelRatio(24),
    resizeMode: 'contain',
  },
});
export default styles;
