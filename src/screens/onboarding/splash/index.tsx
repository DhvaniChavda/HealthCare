import React, {useEffect} from 'react';
import {Image, ImageBackground, StatusBar, Text, View} from 'react-native';
import styles from './style';
import SafeAreaView from 'react-native-safe-area-view';
import {APP_IMAGES} from 'src/assets/images';
import {SIZES} from 'src/theme';
import {STRING} from 'src/utils';
import {replace} from 'src/navigation/RootNavigation';
import {Routes} from 'src/navigation/route';

export default ({route}: any): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      replace(Routes.Intro);
    }, 2000);
  }, []);
  return (
    <SafeAreaView
      style={styles.SaContainer}
      forceInset={{top: 'never', bottom: 'never'}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent
      />
      <View style={styles.vContainer}>
        <ImageBackground
          source={APP_IMAGES.ic_splash}
          style={[styles.iSplash]}
          imageStyle={[styles.iSplash]}>
          <Image source={APP_IMAGES.ic_logo} style={styles.iLogo} />
          <Text style={styles.tHealth}>{STRING.splash.health_care}</Text>
          <Text style={styles.tMedical}>{STRING.splash.medical_app}</Text>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
