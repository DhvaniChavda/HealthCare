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
  },
  vHeartRate: {
    backgroundColor: COLOR.theme_op1,
    borderRadius: SIZES.countPixelRatio(10),
    paddingHorizontal: SIZES.countPixelRatio(20),
    paddingVertical: SIZES.countPixelRatio(25),
    flexDirection: 'row',
    marginVertical: SIZES.countPixelRatio(30),
  },
  iVector: {
    height: SIZES.countPixelRatio(100),
    width: SIZES.countPixelRatio(190),
    resizeMode: 'contain',
  },
  tHeartRate: {
    fontSize: SIZES.countPixelRatio(20),
    color: COLOR.theme_black,
    fontFamily: FONTS.SEMI_BOLD,
  },
  tBpmNumber: {
    fontSize: SIZES.countPixelRatio(56),
    color: COLOR.theme_black,
    fontFamily: FONTS.SEMI_BOLD,
    // lineHeight: 30,
  },
  tBpm: {
    fontSize: SIZES.countPixelRatio(15),
    color: COLOR.theme_black,
    fontFamily: FONTS.REGULAR,
    // lineHeight: 30,
  },
  vRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iIcon: {
    height: SIZES.countPixelRatio(30),
    width: SIZES.countPixelRatio(30),
    resizeMode: 'contain',
  },
  vPink: {
    backgroundColor: COLOR.light_pink,
    borderRadius: SIZES.countPixelRatio(10),
    padding: SIZES.countPixelRatio(25),
    width: SIZES.countPixelRatio(185),
  },
  tLabel: {
    fontSize: SIZES.countPixelRatio(20),
    color: COLOR.theme_black,
    fontFamily: FONTS.MEDIUM,
    marginVertical: SIZES.countPixelRatio(10),
  },
  tValue: {
    fontSize: SIZES.countPixelRatio(40),
    color: COLOR.theme_black,
    fontFamily: FONTS.MEDIUM,
  },
  tReport: {
    fontSize: SIZES.countPixelRatio(20),
    color: COLOR.theme_black,
    fontFamily: FONTS.SEMI_BOLD,
    marginVertical: SIZES.countPixelRatio(20),
  },
});
export default styles;
