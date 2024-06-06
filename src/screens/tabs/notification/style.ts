import {StatusBar, StyleSheet} from 'react-native';
import {COLOR, SIZES} from 'src/theme';

const styles = StyleSheet.create({
  SaContainer: {
    backgroundColor: COLOR.white,
    flex: 1,
  },
  vContainer: {
    backgroundColor: COLOR.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iNoData: {
    height: SIZES.countPixelRatio(300),
    width: SIZES.countPixelRatio(300),
    resizeMode: 'contain',
  },
});
export default styles;
