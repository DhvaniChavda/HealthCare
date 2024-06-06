import {StyleSheet} from 'react-native';
import {COLOR, SIZES} from 'src/theme';

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
});

export default styles;
