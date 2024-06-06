import React, {useRef, useState} from 'react';
import {
  Image,
  Keyboard,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import SafeAreaView from 'react-native-safe-area-view';
import {COLOR} from 'src/theme';
import {ToolbarBackWithTitle} from 'src/component/custom/toolbar';
import {ENUM, METHOD, STRING} from 'src/utils';
import {goBack, navigate} from 'src/navigation/RootNavigation';
import {ThemeInput} from 'src/component/custom/input';
import {APP_IMAGES} from 'src/assets/images';
import {ThemeButton} from 'src/component/custom/button';
import {Routes} from 'src/navigation/route';

export default ({route}: any): JSX.Element => {
  const nameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const [isHidePassword, setHidePassword] = useState<boolean>(true);
  const onBackPress = () => {
    goBack();
  };
  const onHideShowPassword = () => {
    setHidePassword(!isHidePassword);
  };
  const onCheckChange = () => {
    setIsAgree((prevAgree: boolean) => !prevAgree);
  };
  const onSignUpClick = () => {
    if (name.trim().length <= 0) {
      METHOD.showToast(STRING.register.bl_name);
    } else if (email.trim().length <= 0) {
      METHOD.showToast(STRING.login.bl_email);
    } else if (password.trim().length <= 0) {
      METHOD.showToast(STRING.login.bl_pass);
    } else if (METHOD.isEmailInvalid(email)) {
      METHOD.showToast(STRING.login.vl_email);
    } else if (password.length < 6) {
      METHOD.showToast(STRING.login.vl_pass);
    } else if (!isAgree) {
      METHOD.showToast(STRING.register.vl_agree);
    } else {
      navigate(Routes.Dashboard);
    }
  };
  const onChangeText = (text: string, type: number): void => {
    switch (type) {
      case ENUM.register.name:
        setName(text);
        break;
      case ENUM.register.email:
        setEmail(text);
        break;
      case ENUM.register.password:
        setPassword(text);
        break;
    }
  };
  const renderNameContainer = () => {
    return (
      <ThemeInput
        ref={nameRef}
        value={name}
        onChangeText={onChangeText}
        placeholder={STRING.register.ph_name}
        returnKeyType={'next'}
        keyboardType={'default'}
        onSubmitEditing={() => emailRef?.current?.focus()}
        blurOnSubmit={false}
        type={ENUM.register.name}
        leftIcon={APP_IMAGES.ic_user}
      />
    );
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
        type={ENUM.register.email}
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
        type={ENUM.register.password}
        leftIcon={APP_IMAGES.ic_lock}
        rightIcon={
          isHidePassword ? APP_IMAGES.ic_eye_slash : APP_IMAGES.ic_hide
        }
        isSecure={isHidePassword}
        onPress={onHideShowPassword}
      />
    );
  };
  const renderAgreeContainer = () => {
    return (
      <View style={styles.vRowContainer}>
        <TouchableOpacity activeOpacity={0.8} onPress={onCheckChange}>
          <Image
            source={isAgree ? APP_IMAGES.ic_check_square : APP_IMAGES.ic_square}
            style={styles.iCheck}
          />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <Text style={styles.tAgree}>
            {STRING.register.agree}
            <Text style={styles.tTnc}> {STRING.register.tnc} </Text>
            {'and '}
            <Text style={styles.tTnc}>{STRING.register.policy}</Text>
          </Text>
        </View>
      </View>
    );
  };
  const renderButtonContainer = () => {
    return (
      <ThemeButton
        title={STRING.welcome.sign_up}
        customStyle={styles.toButton}
        onPress={onSignUpClick}
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
            navigate(Routes.Login);
          }}>
          {STRING.register.sign_in}
        </Text>
      </Text>
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
        title={STRING.welcome.sign_up}
        onBackPress={onBackPress}
      />
      <View style={styles.vContainer}>
        {renderNameContainer()}
        {renderEmailContainer()}
        {renderPasswordContainer()}
        {renderAgreeContainer()}
        <View style={{flex: 1}} />
        {renderButtonContainer()}
        {renderDoNotHaveAcc()}
      </View>
    </SafeAreaView>
  );
};
