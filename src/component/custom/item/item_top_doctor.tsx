import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {METHOD} from 'src/utils';

interface IHealthProps {
  item: any;
  index: number;
  onItemClick: (arg: any) => void;
}
export default ({item, index, onItemClick}: IHealthProps) => {
  return (
    <TouchableOpacity
      style={styles.vMain}
      activeOpacity={0.5}
      onPress={() => onItemClick(item)}>
      <Image source={{uri: item.image}} style={styles.iImage} />
      <View>
        <Text style={styles.tName}>{item.name}</Text>
        <Text style={styles.tSpecialities}>{item.specialities}</Text>
        <View style={styles.vRowContainer}>
          <Image source={APP_IMAGES.ic_star} style={styles.iStar} />
          <Text style={styles.tRating}>{item.rating}</Text>
        </View>
        <Text style={styles.tSpecialities}>{item.away_from}</Text>
      </View>
    </TouchableOpacity>
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
    height: SIZES.countPixelRatio(150),
    width: SIZES.countPixelRatio(140),
    resizeMode: 'cover',
    borderRadius: SIZES.countPixelRatio(8),
    marginRight: SIZES.countPixelRatio(15),
  },
  tName: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.theme_black,
    marginBottom: SIZES.countPixelRatio(3),
  },
  iStar: {
    height: SIZES.countPixelRatio(20),
    width: SIZES.countPixelRatio(20),
    marginRight: SIZES.countPixelRatio(5),
  },
  tSpecialities: {
    fontFamily: FONTS.MEDIUM,
    fontSize: SIZES.countPixelRatio(16),
    color: COLOR.theme_black,
    opacity: 0.4,
  },
  vRowContainer: {
    flexDirection: 'row',
    backgroundColor: COLOR.theme_op1,
    alignSelf: 'flex-start',
    paddingHorizontal: SIZES.countPixelRatio(5),
    borderRadius: SIZES.countPixelRatio(5),
    marginVertical: SIZES.countPixelRatio(5),
  },
  tRating: {
    fontFamily: FONTS.MEDIUM,
    fontSize: SIZES.countPixelRatio(18),
    color: COLOR.theme,
  },
});
