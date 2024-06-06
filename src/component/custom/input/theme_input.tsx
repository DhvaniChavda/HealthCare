import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR, FONTS, SIZES} from 'src/theme';

interface IThemeInputProps {
  //   ref: any;
  value: string;
  onChangeText: (text: string, type?: any) => void;
  placeholder?: string;
  customStyle?: object;
  returnKeyType?: any;
  keyboardType?: any;
  type?: number;
  isSecure?: boolean;
  blurOnSubmit?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  onFocus?: () => void;
  viewCustomStyle?: object;
  inputStyle?: object;
  onSubmitEditing?: () => void;
  leftIcon: object;
  rightIcon?: object;
  onPress?: any;
}
export default React.forwardRef(
  (
    {
      placeholder,
      returnKeyType,
      keyboardType,
      value,
      onChangeText,
      type,
      isSecure,
      blurOnSubmit,
      autoFocus,
      maxLength,
      onFocus,
      viewCustomStyle,
      inputStyle,
      onSubmitEditing,
      leftIcon,
      rightIcon,
      onPress,
    }: IThemeInputProps,
    ref: any,
  ) => {
    return (
      <View style={[styles.vInput, viewCustomStyle]}>
        <Image source={leftIcon} style={styles.iLeftIcon} />
        <TextInput
          value={value}
          onChangeText={(value: string) => {
            onChangeText(value, type);
          }}
          style={[styles.tInput, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={COLOR.light_gray}
          numberOfLines={1}
          returnKeyType={returnKeyType}
          keyboardType={keyboardType}
          secureTextEntry={isSecure}
          ref={ref}
          blurOnSubmit={blurOnSubmit}
          autoFocus={autoFocus ? autoFocus : false}
          spellCheck={true}
          autoCorrect={true}
          maxLength={maxLength}
          onPressIn={onFocus}
          onSubmitEditing={onSubmitEditing}
        />
        {rightIcon && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              if (onPress) {
                onPress(type);
              }
            }}>
            <Image source={rightIcon} style={styles.iLeftIcon} />
          </TouchableOpacity>
        )}
      </View>
    );
  },
);
const styles = StyleSheet.create({
  vInput: {
    backgroundColor: COLOR.gray_input,
    borderRadius: SIZES.countPixelRatio(10),
    paddingVertical: SIZES.countPixelRatio(10),
    paddingHorizontal: SIZES.countPixelRatio(25),
    marginBottom: SIZES.smartScale(25),
    borderColor: COLOR.theme_black_op1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
  },
  tInput: {
    fontSize: SIZES.countPixelRatio(18),
    fontFamily: FONTS.REGULAR,
    color: COLOR.theme_black,

    flex: 1,
  },
  iLeftIcon: {
    height: SIZES.countPixelRatio(24),
    width: SIZES.countPixelRatio(24),
    resizeMode: 'contain',
    marginRight: SIZES.countPixelRatio(10),
  },
});
