import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {METHOD} from 'src/utils';

interface IProfileProps {
  item: any;
  index: number;
}
export default ({item, index}: IProfileProps) => {
  return (
    <TouchableOpacity style={styles.vMain} activeOpacity={0.8}>
      <View style={styles.vIcon}>
        <Image source={item.image} style={styles.iIcon} />
      </View>
      <Text style={styles.tName}>{item.name}</Text>
      <Image source={APP_IMAGES.ic_next} style={styles.iNext} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  vMain: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.countPixelRatio(20),
  },
  vIcon: {
    height: SIZES.countPixelRatio(60),
    width: SIZES.countPixelRatio(60),
    borderRadius: SIZES.countPixelRatio(50),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.countPixelRatio(20),
    backgroundColor: COLOR.theme_op1,
  },
  iIcon: {
    height: SIZES.countPixelRatio(30),
    width: SIZES.countPixelRatio(30),
    resizeMode: 'contain',
  },
  iNext: {
    height: SIZES.countPixelRatio(25),
    width: SIZES.countPixelRatio(25),
    resizeMode: 'contain',
  },
  tName: {
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.theme_black,
    fontFamily: FONTS.SEMI_BOLD,
    flex: 1,
  },
});
