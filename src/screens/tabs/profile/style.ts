import {StatusBar, StyleSheet} from 'react-native';
import {COLOR, FONTS, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  SaContainer: {
    flex: 1,
  },
  vContainer: {
    flex: 1,
    marginHorizontal: SIZES.countPixelRatio(25),
  },
  iProfile: {
    height: SIZES.countPixelRatio(100),
    width: SIZES.countPixelRatio(100),
    resizeMode: 'contain',
    marginBottom: SIZES.countPixelRatio(15),
  },
  tName: {
    fontSize: SIZES.countPixelRatio(16),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.theme_black,
  },
  vProfile: {
    alignItems: 'center',
    paddingVertical: SIZES.smartScale(25),
  },
  iIcon: {
    height: SIZES.countPixelRatio(35),
    width: SIZES.countPixelRatio(35),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  vRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tTitle: {
    fontSize: SIZES.countPixelRatio(12),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.theme,
    opacity: 0.7,
    textAlign: 'center',
  },
  tCal: {
    fontSize: SIZES.countPixelRatio(18),
    fontFamily: FONTS.SEMI_BOLD,
    color: COLOR.theme,
    textAlign: 'center',
  },
  vSeprator: {
    height: SIZES.countPixelRatio(50),
    backgroundColor: COLOR.theme,
    width: 2,
    opacity: 0.3,
  },
  vItemSeprator: {
    backgroundColor: COLOR.theme,
    opacity: 0.3,
    height: 1,
  },
  flatlist: {
    marginTop: SIZES.countPixelRatio(20),
  },
});
export default styles;
