import React, {useState} from 'react';

import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './style';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {ToolbarBackWithTitle} from 'src/component/custom/toolbar';
import {DUMMYSTRING, STRING} from 'src/utils';
import {goBack, navigate} from 'src/navigation/RootNavigation';
import {APP_IMAGES} from 'src/assets/images';
import ReadMore from 'src/component/library/readmore';
import CalendarStrip from 'src/component/library/weekViewCalendar/src/CalendarStrip';
import {ItemBookingSlot} from 'src/component/custom/item';
import {ThemeButton} from 'src/component/custom/button';
import {Routes} from 'src/navigation/route';
export default ({route}: any): JSX.Element => {
  const [detail, setDetails] = useState(DUMMYSTRING.pharmacy_detail);
  const [qty, setQty] = useState<number>(1);

  const renderImageContainer = () => {
    return <Image source={{uri: detail.image}} style={styles.iProduct} />;
  };
  const renderNameContainer = () => {
    return (
      <View style={styles.vRow}>
        <View>
          <Text style={styles.tName}>{detail.name}</Text>
          <Text style={styles.tQty}>{detail.qty}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={APP_IMAGES.ic_star} style={styles.iStar} />
              <Image source={APP_IMAGES.ic_star} style={styles.iStar} />
              <Image source={APP_IMAGES.ic_star} style={styles.iStar} />
              <Image source={APP_IMAGES.ic_star} style={styles.iStar} />
            </View>
            <Text style={styles.tRating}>{detail.rating}</Text>
          </View>
        </View>
        <Image source={APP_IMAGES.ic_heart} style={styles.iHeart} />
      </View>
    );
  };
  const renderQtyContainer = () => {
    return (
      <View style={styles.vMainRow}>
        <View style={styles.vAdd}>
          <TouchableOpacity style={styles.toMinus} />
          <Text
            style={[
              styles.tPrice,
              {marginHorizontal: SIZES.smartWidthScale(30)},
            ]}>
            {qty}
          </Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Image source={APP_IMAGES.ic_add} style={styles.iAdd} />
          </TouchableOpacity>
        </View>
        <Text style={styles.tPrice}>
          {'$'}
          {detail.price}
        </Text>
      </View>
    );
  };

  const renderDescContainer = () => {
    return (
      <View style={{marginTop: SIZES.countPixelRatio(20)}}>
        <Text style={styles.tDesc}>{STRING.pharmacy.description}</Text>
        <ReadMore descInfo={detail.desc} maxLine={5} textStyle={styles.tInfo} />
      </View>
    );
  };
  const renderButtonContainer = () => {
    return (
      <ThemeButton
        title={STRING.pharmacy.buy}
        customStyle={{marginVertical: SIZES.countPixelRatio(25)}}
        onPress={() => {
          navigate(Routes.MyCart);
        }}
      />
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
        title={STRING.pharmacy.Pharmacy}
        onBackPress={() => goBack()}
      />
      <ScrollView
        style={styles.vMainContainer}
        showsVerticalScrollIndicator={false}>
        {renderImageContainer()}
        {renderNameContainer()}
        {renderQtyContainer()}
        {renderDescContainer()}
        <View style={{flex: 1}} />
        {renderButtonContainer()}
      </ScrollView>
    </SafeAreaView>
  );
};
