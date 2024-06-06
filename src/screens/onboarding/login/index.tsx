import React, {useRef, useState} from 'react';
import {
  Image,
  Keyboard,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import SafeAreaView from 'react-native-safe-area-view';
import {COLOR, SIZES} from 'src/theme';
import {ToolbarBackWithTitle} from 'src/component/custom/toolbar';
import {ENUM, METHOD, STRING} from 'src/utils';
import {goBack, navigate} from 'src/navigation/RootNavigation';
import {ThemeInput} from 'src/component/custom/input';
import {APP_IMAGES} from 'src/assets/images';
import {ThemeButton} from 'src/component/custom/button';
import {Routes} from 'src/navigation/route';

export default ({route}: any): JSX.Element => {
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isHidePassword, setHidePassword] = useState<boolean>(true);
  const onBackPress = () => {
    goBack();
  };
  const onHideShowPassword = () => {
    setHidePassword(!isHidePassword);
  };
  const onSignInClick = () => {
    if (email.trim().length <= 0) {
      METHOD.showToast(STRING.login.bl_email);
    } else if (password.trim().length <= 0) {
      METHOD.showToast(STRING.login.bl_pass);
    } else if (METHOD.isEmailInvalid(email)) {
      METHOD.showToast(STRING.login.vl_email);
    } else if (password.length < 6) {
      METHOD.showToast(STRING.login.vl_pass);
    } else {
      navigate(Routes.Dashboard);
    }
  };

  const onChangeText = (text: string, type: number): void => {
    switch (type) {
      case ENUM.login.email:
        setEmail(text);
        break;
      case ENUM.login.password:
        setPassword(text);
        break;
    }
  };

  const renderEmailContainer = () => {
    return (
      <ThemeInput
        ref={emailRef}
        value={email}
        onChangeText={onChangeText}
        placeholder={STRING.register.ph_email}
        returnKeyType={'next'}
        keyboardType={'email-address'}
        onSubmitEditing={() => passwordRef?.current?.focus()}
        blurOnSubmit={false}
        type={ENUM.login.email}
        leftIcon={APP_IMAGES.ic_email}
      />
    );
  };
  const renderPasswordContainer = () => {
    return (
      <ThemeInput
        ref={passwordRef}
        value={password}
        onChangeText={onChangeText}
        placeholder={STRING.register.ph_password}
        returnKeyType={'next'}
        keyboardType={'default'}
        onSubmitEditing={() => Keyboard.dismiss()}
        blurOnSubmit={false}
        type={ENUM.login.password}
        leftIcon={APP_IMAGES.ic_lock}
        rightIcon={
          isHidePassword ? APP_IMAGES.ic_eye_slash : APP_IMAGES.ic_hide
        }
        isSecure={isHidePassword}
        onPress={onHideShowPassword}
      />
    );
  };
  const renderForgotPass = () => {
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <Text style={styles.tForgot}>{STRING.login.forgot_password}</Text>
      </TouchableOpacity>
    );
  };
  const renderButtonContainer = () => {
    return (
      <ThemeButton
        title={STRING.login.sign_in}
        customStyle={styles.toButton}
        onPress={onSignInClick}
      />
    );
  };
  const renderDoNotHaveAcc = () => {
    return (
      <Text style={styles.tDoNot}>
        {STRING.register.do_not_have_acc}
        <Text
          style={styles.tSignIn}
          onPress={() => {
            navigate(Routes.Register);
          }}>
          {STRING.welcome.sign_up}
        </Text>
      </Text>
    );
  };
  const renderORcontainer = () => {
    return (
      <View
        style={[
          styles.vRowContainer,
          {justifyContent: 'space-between', marginBottom: SIZES.smartScale(20)},
        ]}>
        <View style={styles.vLine} />
        <Text style={styles.tOR}>{STRING.login.or}</Text>
        <View style={styles.vLine} />
      </View>
    );
  };
  const renderGoogleContainer = () => {
    return (
      <TouchableOpacity style={styles.vSocial} activeOpacity={0.8}>
        <Image source={APP_IMAGES.ic_google} style={styles.iGoogle} />
        <Text style={styles.tSocial}>{STRING.login.google}</Text>
      </TouchableOpacity>
    );
  };
  const renderFacebookContainer = () => {
    return (
      <TouchableOpacity style={styles.vSocial} activeOpacity={0.8}>
        <Image source={APP_IMAGES.ic_fb} style={styles.iGoogle} />
        <Text style={styles.tSocial}>{STRING.login.facebook}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={styles.SaContainer}
      forceInset={{top: 'always', bottom: 'never'}}>
      <StatusBar
        backgroundColor={COLOR.white}
        barStyle={'dark-content'}
        translucent
      />
      <ToolbarBackWithTitle
        title={STRING.login.sign_in}
        onBackPress={onBackPress}
      />
      <ScrollView
        style={styles.vContainer}
        showsVerticalScrollIndicator={false}>
        {renderEmailContainer()}
        {renderPasswordContainer()}
        {renderForgotPass()}
        {renderButtonContainer()}
        {renderDoNotHaveAcc()}
        {renderORcontainer()}
        {renderGoogleContainer()}
        {renderFacebookContainer()}
      </ScrollView>
    </SafeAreaView>
  );
};
