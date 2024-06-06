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
  vMain: {
    flexDirection: 'row',
    borderRadius: SIZES.countPixelRatio(5),
    marginBottom: SIZES.countPixelRatio(15),
    padding: SIZES.countPixelRatio(10),
  },
  iImage: {
    height: SIZES.countPixelRatio(130),
    width: SIZES.countPixelRatio(130),
    resizeMode: 'cover',
    borderRadius: SIZES.countPixelRatio(8),
    marginRight: SIZES.smartWidthScale(20),
  },
  tName: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.theme_black,
    marginBottom: SIZES.countPixelRatio(3),
  },
  iStar: {
    height: SIZES.countPixelRatio(20),
    width: SIZES.countPixelRatio(20),
    marginRight: SIZES.countPixelRatio(5),
  },
  tSpecialities: {
    fontFamily: FONTS.MEDIUM,
    fontSize: SIZES.countPixelRatio(16),
    color: COLOR.theme_black,
    opacity: 0.4,
  },
  vRowContainer: {
    flexDirection: 'row',
    backgroundColor: COLOR.theme_op1,
    alignSelf: 'flex-start',
    paddingHorizontal: SIZES.countPixelRatio(5),
    borderRadius: SIZES.countPixelRatio(5),
    marginVertical: SIZES.countPixelRatio(5),
  },
  tRating: {
    fontFamily: FONTS.MEDIUM,
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.theme,
  },
  tAbout: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: SIZES.countPixelRatio(20),
    color: COLOR.theme_black,
  },
  tAboutInfo: {
    fontFamily: FONTS.REGULAR,
    fontSize: SIZES.countPixelRatio(14),
    color: COLOR.theme_black,
    opacity: 0.6,
    lineHeight: SIZES.countPixelRatio(24),
  },
  vSperator: {
    height: 2,
    backgroundColor: COLOR.theme_black_op1,
  },
});

export default styles;
