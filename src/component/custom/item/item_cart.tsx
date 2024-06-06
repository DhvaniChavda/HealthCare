import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {METHOD} from 'src/utils';

interface IBookingProps {
  item: any;
  index: number;
}
export default ({item, index}: IBookingProps) => {
  return (
    <View style={styles.vMain}>
      <Image source={{uri: item.image}} style={styles.iProduct} />
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.tName}>{item.name}</Text>
            <Text style={styles.tQty}>{item.qty}</Text>
          </View>
          <Image source={APP_IMAGES.ic_delete} style={styles.iDelete} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.vAdd}>
            <TouchableOpacity style={styles.toMinus} />
            <Text style={styles.tProduct}>{item.purchase_product}</Text>
            <TouchableOpacity activeOpacity={0.8}>
              <Image source={APP_IMAGES.ic_add} style={styles.iAdd} />
            </TouchableOpacity>
          </View>
          <Text style={styles.tPrice}>
            {'$'}
            {item.price}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vMain: {
    borderWidth: 1,
    borderRadius: SIZES.countPixelRatio(10),
    padding: SIZES.countPixelRatio(10),
    flexDirection: 'row',
    marginBottom: SIZES.countPixelRatio(20),
    borderColor: COLOR.theme_black_op1,
  },
  iProduct: {
    height: SIZES.countPixelRatio(50),
    width: SIZES.countPixelRatio(50),
    resizeMode: 'contain',
    marginRight: SIZES.countPixelRatio(20),
  },
  tName: {
    fontSize: SIZES.countPixelRatio(20),
    color: COLOR.theme_black,
    fontFamily: FONTS.SEMI_BOLD,
  },
  tQty: {
    fontSize: SIZES.countPixelRatio(14),
    color: COLOR.theme_black,
    fontFamily: FONTS.MEDIUM,
    opacity: 0.6,
  },
  iDelete: {
    height: SIZES.countPixelRatio(20),
    width: SIZES.countPixelRatio(20),
    resizeMode: 'contain',
  },
  vAdd: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toMinus: {
    height: 2,
    width: SIZES.countPixelRatio(15),
    backgroundColor: COLOR.theme_black,
    opacity: 0.4,
  },
  iAdd: {
    height: SIZES.countPixelRatio(20),
    width: SIZES.countPixelRatio(20),
    resizeMode: 'contain',
  },
  tProduct: {
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.theme_black,
    fontFamily: FONTS.SEMI_BOLD,
    marginHorizontal: SIZES.countPixelRatio(15),
  },
  tPrice: {
    fontSize: SIZES.countPixelRatio(22),
    color: COLOR.theme_black,
    fontFamily: FONTS.SEMI_BOLD,
  },
});
