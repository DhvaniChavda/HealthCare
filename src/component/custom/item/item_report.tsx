import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {METHOD} from 'src/utils';

interface IReportProps {
  item: any;
  index: number;
}
export default ({item, index}: IReportProps) => {
  return (
    <View style={styles.vMain}>
      <View style={styles.vReport}>
        <Image source={APP_IMAGES.ic_report} style={styles.iReport} />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.tName}>{item.name}</Text>

        <Text style={styles.tDate}>
          {METHOD.convertDateMMMDDYYYY(item.created_at)}
        </Text>
      </View>
      <Image source={APP_IMAGES.ic_3_dots} style={styles.iDot} />
    </View>
  );
};

const styles = StyleSheet.create({
  vMain: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: SIZES.countPixelRatio(10),
    marginBottom: SIZES.countPixelRatio(20),
    padding: SIZES.countPixelRatio(15),
    alignItems: 'center',
  },
  iReport: {
    height: SIZES.countPixelRatio(25),
    width: SIZES.countPixelRatio(25),
    resizeMode: 'contain',
    tintColor: COLOR.theme,
  },
  vReport: {
    height: SIZES.countPixelRatio(60),
    borderRadius: SIZES.countPixelRatio(10),
    width: SIZES.countPixelRatio(60),
    backgroundColor: COLOR.theme_op1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.countPixelRatio(15),
  },
  tName: {
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.theme_black,
    fontFamily: FONTS.SEMI_BOLD,
  },
  tDate: {
    fontSize: SIZES.countPixelRatio(14),
    color: COLOR.theme_black,
    fontFamily: FONTS.MEDIUM,
    opacity: 0.4,
  },
  iDot: {
    height: SIZES.countPixelRatio(20),
    width: SIZES.countPixelRatio(20),
    resizeMode: 'contain',
  },
});
