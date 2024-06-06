import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {METHOD} from 'src/utils';

interface IBookingProps {
  item: any;
  index: number;
  isForSale?: boolean;
  onItemClick: (arg: any) => void;
}
export default ({item, index, isForSale, onItemClick}: IBookingProps) => {
  return (
    <TouchableOpacity
      style={styles.vMain}
      activeOpacity={0.8}
      onPress={() => {
        isForSale && onItemClick(item);
      }}>
      <Image source={{uri: item.image}} style={styles.iProduct} />
      <Text style={styles.tName}>{item.name}</Text>
      <Text style={styles.tQty}>{item.qty}</Text>
      <View style={styles.vRow}>
        <Text style={[styles.tName, {fontSize: SIZES.countPixelRatio(18)}]}>
          {'$'}
          {item.price}
        </Text>
        {isForSale && (
          <Text style={styles.tSalePrice}>
            {'$'}
            {item.actual_price}
          </Text>
        )}
        <TouchableOpacity activeOpacity={0.4}>
          <Image source={APP_IMAGES.ic_add} style={styles.iAdd} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  vMain: {
    borderWidth: 2,
    marginRight: SIZES.countPixelRatio(20),
    borderRadius: SIZES.countPixelRatio(20),
    borderColor: COLOR.theme_op1,
    paddingTop: SIZES.countPixelRatio(20),
    paddingHorizontal: SIZES.countPixelRatio(20),
    paddingBottom: SIZES.countPixelRatio(15),
  },
  iProduct: {
    height: SIZES.countPixelRatio(120),
    width: SIZES.countPixelRatio(120),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  vRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tName: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: SIZES.countPixelRatio(14),
    color: COLOR.theme_black,
  },
  tQty: {
    fontFamily: FONTS.MEDIUM,
    fontSize: SIZES.countPixelRatio(12),
    color: COLOR.theme_black,
    opacity: 0.4,
  },
  iAdd: {
    height: SIZES.countPixelRatio(20),
    width: SIZES.countPixelRatio(20),
    resizeMode: 'contain',
  },
  tSalePrice: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: SIZES.countPixelRatio(10),
    color: COLOR.theme_black,
    textDecorationLine: 'line-through',
    opacity: 0.6,
    marginHorizontal: SIZES.countPixelRatio(10),
  },
});
