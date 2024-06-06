import {StatusBar, StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  SaContainer: {
    flex: 1,
  },
  vContainer: {
    flex: 1,
    marginHorizontal: SIZES.countPixelRatio(20),
  },
  vPrescription: {
    backgroundColor: COLOR.theme_op1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SIZES.countPixelRatio(20),
    paddingHorizontal: SIZES.countPixelRatio(20),
    marginBottom: SIZES.countPixelRatio(25),
  },
  iPackets: {
    height: SIZES.countPixelRatio(220),
    width: SIZES.countPixelRatio(150),
    resizeMode: 'contain',
  },
  tInfo: {
    fontSize: SIZES.countPixelRatio(20),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.theme_black,
  },
  toButton: {
    borderRadius: SIZES.countPixelRatio(10),
    marginVertical: SIZES.countPixelRatio(15),
  },
  vRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});
export default styles;
