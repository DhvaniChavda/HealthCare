import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface IBackToolbarProps {
  title: string;
  onBackPress: () => void;
  viewCustomStyle?: object;
}
export default ({title, onBackPress, viewCustomStyle}: IBackToolbarProps) => {
  return (
    <View style={[styles.vMainContainer, viewCustomStyle]}>
      <TouchableOpacity
        style={styles.toBack}
        activeOpacity={0.8}
        onPress={onBackPress}>
        <Image source={APP_IMAGES.ic_back} style={styles.iBack} />
      </TouchableOpacity>

      <Text style={styles.tTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vMainContainer: {
    marginHorizontal: SIZES.countPixelRatio(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: SIZES.smartScale(25),
  },
  toBack: {
    height: SIZES.countPixelRatio(50),
    width: SIZES.countPixelRatio(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iBack: {
    height: SIZES.countPixelRatio(50),
    width: SIZES.countPixelRatio(50),
    resizeMode: 'contain',
  },
  tTitle: {
    fontSize: SIZES.countPixelRatio(22),
    fontFamily: FONTS.BOLD,
    color: COLOR.theme_black,
    textAlign: 'center',
    flex: 1,
  },
});
