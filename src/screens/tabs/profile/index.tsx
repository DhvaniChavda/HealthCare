import React, {useState} from 'react';
import {FlatList, Image, StatusBar, Text, View} from 'react-native';
import styles from './style';
import SafeAreaView from 'react-native-safe-area-view';
import {APP_IMAGES} from 'src/assets/images';
import {DUMMYSTRING, STRING} from 'src/utils';
import {ItemProfile} from 'src/component/custom/item';

export default ({route}: any): JSX.Element => {
  const [name, setName] = useState<string>('Dhvani');
  const renderProfileContainer = () => {
    return (
      <View style={styles.vProfile}>
        <Image source={APP_IMAGES.ic_dummy_profile} style={styles.iProfile} />
        <Text style={styles.tName}>{name}</Text>
      </View>
    );
  };

  const renderRowContainer = () => {
    return (
      <View style={styles.vRow}>
        <View>
          <Image source={APP_IMAGES.ic_heartbeat} style={styles.iIcon} />
          <Text style={styles.tTitle}>{STRING.profile.heart_rate}</Text>
          <Text style={styles.tCal}>{'215bpm'}</Text>
        </View>
        <View style={styles.vSeprator} />
        <View>
          <Image source={APP_IMAGES.ic_heartbeat} style={styles.iIcon} />
          <Text style={styles.tTitle}>{STRING.profile.heart_rate}</Text>
          <Text style={styles.tCal}>{'215bpm'}</Text>
        </View>
        <View style={styles.vSeprator} />

        <View>
          <Image source={APP_IMAGES.ic_heartbeat} style={styles.iIcon} />
          <Text style={styles.tTitle}>{STRING.profile.heart_rate}</Text>
          <Text style={styles.tCal}>{'215bpm'}</Text>
        </View>
      </View>
    );
  };

  const renderListContainer = () => {
    return (
      <FlatList
        data={DUMMYSTRING.profile_list}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        style={styles.flatlist}
        ItemSeparatorComponent={renderSeprator}
      />
    );
  };
  const renderItem = ({item, index}: {item: any; index: number}) => {
    return <ItemProfile item={item} index={index} />;
  };
  const renderSeprator = () => {
    return <View style={styles.vItemSeprator} />;
  };
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
        {renderProfileContainer()}
        {renderRowContainer()}
        {renderListContainer()}
      </View>
    </SafeAreaView>
  );
};
