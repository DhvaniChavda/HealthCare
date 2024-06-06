import React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import styles from './style';
import SafeAreaView from 'react-native-safe-area-view';
import {APP_IMAGES} from 'src/assets/images';

export default ({route}: any): JSX.Element => {
  return (
    <SafeAreaView
      style={styles.SaContainer}
      forceInset={{top: 'always', bottom: 'never'}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent
      />
      <View style={styles.vContainer}>
        <Image source={APP_IMAGES.ic_no_data} style={styles.iNoData}/>
      </View>
    </SafeAreaView>
  );
};
