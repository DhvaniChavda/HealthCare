import React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import styles from './style';
import SafeAreaView from 'react-native-safe-area-view';
import {COLOR} from 'src/theme';
import {APP_IMAGES} from 'src/assets/images';
import {STRING} from 'src/utils';
import {ThemeButton} from 'src/component/custom/button';
import {navigate, replace} from 'src/navigation/RootNavigation';
import {Routes} from 'src/navigation/route';

export default ({route}: any): JSX.Element => {
  const renderImageContainer = () => {
    return (
      <View>
        <Image source={APP_IMAGES.ic_logo} style={styles.iLogo} />
        <Text style={styles.tHealth}>{STRING.splash.health_care}</Text>
      </View>
    );
  };
  const renderInfoContainer = () => {
    return (
      <View style={styles.vInfo}>
        <Text style={styles.tTitle}>{STRING.welcome.title}</Text>
        <Text style={styles.tInfo}>{STRING.welcome.info}</Text>
      </View>
    );
  };
  const renderLoginButtonContainer = () => {
    return (
      <ThemeButton
        title={STRING.welcome.login}
        customStyle={styles.toLogin}
        onPress={() => {
          navigate(Routes.Login);
        }}
      />
    );
  };
  const renderSignUpButtonContainer = () => {
    return (
      <ThemeButton
        title={STRING.welcome.sign_up}
        customStyle={styles.toSignUp}
        titleStyle={styles.tSignUp}
        onPress={() => {
          navigate(Routes.Register);
        }}
      />
    );
  };
  return (
    <SafeAreaView
      style={styles.SaContainer}
      forceInset={{top: 'always', bottom: 'never'}}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={COLOR.white}
      />
      <View style={styles.vContainer}>
        {renderImageContainer()}
        {renderInfoContainer()}
        {renderLoginButtonContainer()}
        {renderSignUpButtonContainer()}
      </View>
    </SafeAreaView>
  );
};
