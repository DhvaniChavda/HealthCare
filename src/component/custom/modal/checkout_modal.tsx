import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ThemeButton} from 'src/component/custom/button';
import ModalBox from 'src/component/library/modalBox';

import {COLOR, FONTS, SIZES} from 'src/theme';

interface ICheckoutProps {
  isModalOpen: boolean;
  closeListener?: any;
  title: string;
  info: string;
  buttonTitle: string;
  icon: any;
  onButtonClick?: () => void;
}
export default ({
  isModalOpen,
  closeListener,
  title,
  info,
  buttonTitle,
  icon,
  onButtonClick,
}: ICheckoutProps) => {
  return (
    <ModalBox
      isOpen={isModalOpen}
      onClosed={closeListener}
      position="center"
      entry="bottom"
      style={styles.modalContainer}
      swipeToClose={false}
      coverScreen={true}>
      <View style={[styles.vCameraContainer]}>
        <View style={styles.vIcon}>
          <Image source={icon} style={styles.iIcon} />
        </View>
        <Text style={styles.tTitle}>{title}</Text>
        <Text style={styles.tInfo}>{info}</Text>
        <ThemeButton
          title={buttonTitle}
          titleStyle={{
            fontSize: SIZES.countPixelRatio(16),
          }}
          customStyle={{
            width: SIZES.countPixelRatio(156),
            marginTop: SIZES.countPixelRatio(20),
          }}
          onPress={onButtonClick}
        />
      </View>
    </ModalBox>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height: undefined,
    paddingBottom: SIZES.smartScale(20),
    backgroundColor: 'transparent',
  },
  vCameraContainer: {
    backgroundColor: COLOR.white,
    marginHorizontal: SIZES.countPixelRatio(25),
    paddingVertical: SIZES.countPixelRatio(30),
    borderRadius: SIZES.countPixelRatio(20),
    alignItems: 'center',
  },
  iIcon: {
    height: SIZES.countPixelRatio(60),
    width: SIZES.countPixelRatio(60),
    resizeMode: 'contain',
  },
  vIcon: {
    backgroundColor: COLOR.theme_op1,
    height: SIZES.countPixelRatio(90),
    width: SIZES.countPixelRatio(90),
    borderRadius: SIZES.countPixelRatio(90),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.countPixelRatio(30),
  },
  tTitle: {
    fontSize: SIZES.countPixelRatio(20),
    fontFamily: FONTS.BOLD,
    color: COLOR.theme_black,
  },
  tInfo: {
    fontSize: SIZES.countPixelRatio(16),
    fontFamily: FONTS.REGULAR,
    color: COLOR.theme_black,
    textAlign: 'center',
    marginHorizontal: SIZES.smartWidthScale(25),
    opacity: 0.6,
  },
});
