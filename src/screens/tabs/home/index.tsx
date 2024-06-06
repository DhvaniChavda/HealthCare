import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import SafeAreaView from 'react-native-safe-area-view';
import {APP_IMAGES} from 'src/assets/images';
import {DUMMYSTRING, STRING} from 'src/utils';
import {SIZES} from 'src/theme';
import {ItemHealthList} from 'src/component/custom/item';
import {navigate} from 'src/navigation/RootNavigation';
import {Routes} from 'src/navigation/route';

export default ({route}: any): JSX.Element => {
  const [name, setName] = useState<string>('Dhvani');
  const [healthList, setHealthList] = useState<Array<any>>(
    DUMMYSTRING.heath_list,
  );
  const renderHeaderInfoContainer = () => {
    return (
      <View style={styles.vHeader}>
        <View>
          <Image
            source={APP_IMAGES.ic_welcome_profile}
            style={styles.iProfile}
          />
          <Text style={styles.tWelcome}>{STRING.home.welcome}</Text>
          <Text style={styles.tName}>{name}</Text>
          <Text style={styles.tGoing}>{STRING.home.how_going}</Text>
        </View>
        <Image source={APP_IMAGES.ic_main_doctor} style={styles.iMainDoctor} />
      </View>
    );
  };

  const renderRowContainer = () => {
    return (
      <View
        style={[
          styles.vRowContainer,
          {marginBottom: SIZES.countPixelRatio(25)},
        ]}>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => {
            navigate(Routes.TopDoctors);
          }}>
          <View style={styles.vImage}>
            <Image source={APP_IMAGES.ic_stethoscope} style={styles.iIcon} />
          </View>
          <Text style={styles.tLable}>{STRING.home.top_doctors}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => {
            navigate(Routes.Pharmacy);
          }}>
          <View style={styles.vImage}>
            <Image source={APP_IMAGES.ic_medicine} style={styles.iIcon} />
          </View>
          <Text style={styles.tLable}>{STRING.home.pharmacy}</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.4}>
          <View style={styles.vImage}>
            <Image source={APP_IMAGES.ic_ambulance} style={styles.iIcon} />
          </View>
          <Text style={styles.tLable}>{STRING.home.ambulance}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderSeaAllContainer = () => {
    return (
      <View style={styles.vRowContainer}>
        <Text style={styles.tHealth}>{STRING.home.health_article}</Text>
        <Text style={styles.tSeaAll}>{STRING.home.see_all}</Text>
      </View>
    );
  };
  const renderListContainer = () => {
    return (
      <FlatList
        data={healthList}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        style={styles.flatlist}
      />
    );
  };

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <ItemHealthList item={item} index={index} onSaveClick={onSaveClick} />
    );
  };
  const onSaveClick = (index: number) => {
    healthList[index].isSave = !healthList[index].isSave;
    setHealthList([...healthList]);
  };
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
        <ImageBackground source={APP_IMAGES.ic_bule_bg} style={styles.iBlueBg}>
          {renderHeaderInfoContainer()}

          <View style={styles.vMainContainer}>
            {renderRowContainer()}
            {renderSeaAllContainer()}
            {renderListContainer()}
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
