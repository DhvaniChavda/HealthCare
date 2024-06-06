import {StatusBar, StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  SaContainer: {
    backgroundColor: COLOR.white,
    flex: 1,
  },
  vContainer: {
    flex: 1,
    backgroundColor: COLOR.white,
    marginHorizontal: SIZES.countPixelRatio(20),
  },

  tSubtotal: {
    fontSize: SIZES.countPixelRatio(14),
    fontFamily: FONTS.REGULAR,
    color: COLOR.theme_black,
  },
  tPayment: {
    fontSize: SIZES.countPixelRatio(18),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.theme_black,
  },
  vSeprator: {
    height: 2,
    backgroundColor: COLOR.theme_black_op1,
    marginTop: SIZES.countPixelRatio(10),
    marginBottom: SIZES.countPixelRatio(15),
  },
  vPayment: {
    borderWidth: 1,
    borderRadius: SIZES.countPixelRatio(10),
    borderColor: COLOR.theme_black_op1,
    padding: SIZES.countPixelRatio(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: SIZES.countPixelRatio(20),
  },
  tVisa: {
    fontSize: SIZES.countPixelRatio(20),
    fontFamily: FONTS.EXTRA_BOLD,
    color: '#1A1F71',
  },
  tChange: {
    fontSize: SIZES.countPixelRatio(14),
    fontFamily: FONTS.REGULAR,
    color: COLOR.theme_black,
    opacity: 0.6,
  },
  tTotal: {
    fontSize: SIZES.countPixelRatio(22),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.theme_black,
  },
});
export default styles;
