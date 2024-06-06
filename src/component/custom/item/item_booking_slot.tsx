import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {METHOD} from 'src/utils';

interface IBookingProps {
  item: any;
  index: number;
  available_slot?: any;
}
export default ({item, index, available_slot}: IBookingProps) => {
  return (
    <View style={styles.vMain}>
      <Text style={styles.tTime}>
        {METHOD.convertStartEndTime(item.timing)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vMain: {
    backgroundColor: COLOR.white,
    borderWidth: 1,
    padding: SIZES.countPixelRatio(15),
    borderRadius: SIZES.countPixelRatio(20),
    borderColor: COLOR.theme_op1,
  },
  tTime: {
    fontSize: SIZES.countPixelRatio(15),
    fontFamily: FONTS.REGULAR,
    color: COLOR.theme_black,
  },
});
