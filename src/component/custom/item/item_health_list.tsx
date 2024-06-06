import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {METHOD} from 'src/utils';

interface IHealthProps {
  item: any;
  index: number;
  onSaveClick: (arg: number) => void;
}
export default ({item, index, onSaveClick}: IHealthProps) => {
  return (
    <View style={styles.vMain}>
      <Image source={{uri: item.image}} style={styles.iImage} />
      <View style={{flex: 1}}>
        <Text style={styles.tInfo}>{item.info}</Text>
        <Text style={styles.tDate}>
          {METHOD.convertDateMMMDDYYYY(item.createdAt)}
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.4} onPress={() => onSaveClick(index)}>
        <Image
          source={item.isSave ? APP_IMAGES.ic_fill_save : APP_IMAGES.ic_save}
          style={styles.iSave}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  vMain: {
    flexDirection: 'row',
    borderRadius: SIZES.countPixelRatio(5),
    borderWidth: 1,
    borderColor: COLOR.theme_black_op1,
    marginBottom: SIZES.countPixelRatio(15),
    padding: SIZES.countPixelRatio(10),
  },
  iImage: {
    height: SIZES.countPixelRatio(85),
    width: SIZES.countPixelRatio(85),
    resizeMode: 'cover',
    borderRadius: SIZES.countPixelRatio(8),
    marginRight: SIZES.countPixelRatio(15),
  },
  tInfo: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: SIZES.countPixelRatio(14),
    color: COLOR.grey_56,
  },
  iSave: {
    height: SIZES.countPixelRatio(25),
    width: SIZES.countPixelRatio(25),
    resizeMode: 'contain',
  },
  tDate: {
    fontFamily: FONTS.MEDIUM,
    fontSize: SIZES.countPixelRatio(10),
    color: COLOR.theme_black,
    opacity: 0.4,
  },
});
