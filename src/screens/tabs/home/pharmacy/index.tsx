import React, {useState} from 'react';
import {FlatList, Image, ScrollView, StatusBar, Text, View} from 'react-native';
import styles from './style';
import SafeAreaView from 'react-native-safe-area-view';
import {ToolbarBackWithTitle} from 'src/component/custom/toolbar';
import {DUMMYSTRING, STRING} from 'src/utils';
import {goBack, navigate} from 'src/navigation/RootNavigation';
import {ThemeButton} from 'src/component/custom/button';
import {APP_IMAGES} from 'src/assets/images';
import {ItemPopular} from 'src/component/custom/item';
import {SIZES} from 'src/theme';
import {Routes} from 'src/navigation/route';

export default ({route}: any): JSX.Element => {
  const renderPrescriptionContainer = () => {
    return (
      <View style={styles.vPrescription}>
        <View style={{flex: 1}}>
          <Text style={styles.tInfo}>{STRING.pharmacy.info}</Text>
          <ThemeButton
            title={STRING.pharmacy.upload_prescription}
            customStyle={styles.toButton}
          />
        </View>
        <Image
          source={APP_IMAGES.ic_medicine_packets}
          style={styles.iPackets}
        />
      </View>
    );
  };
  const renderPopularProduct = () => {
    return (
      <View>
        <View style={styles.vRowContainer}>
          <Text style={styles.tHealth}>{STRING.pharmacy.popular_product}</Text>
          <Text style={styles.tSeaAll}>{STRING.home.see_all}</Text>
        </View>
        <FlatList
          data={DUMMYSTRING.popular_product_list}
          renderItem={renderPopularItem}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{marginVertical: SIZES.countPixelRatio(20)}}
        />
      </View>
    );
  };
  const renderPopularItem = ({item, index}: {item: any; index: number}) => {
    return <ItemPopular item={item} index={index} onItemClick={onItemClick} />;
  };
  const renderProductOnSale = () => {
    return (
      <View>
        <View style={styles.vRowContainer}>
          <Text style={styles.tHealth}>{STRING.pharmacy.product_on_sale}</Text>
          <Text style={styles.tSeaAll}>{STRING.home.see_all}</Text>
        </View>
        <FlatList
          data={DUMMYSTRING.product_on_sale_list}
          renderItem={renderSaleItem}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{marginVertical: SIZES.countPixelRatio(20)}}
        />
      </View>
    );
  };
  const renderSaleItem = ({item, index}: {item: any; index: number}) => {
    return (
      <ItemPopular
        item={item}
        index={index}
        isForSale={true}
        onItemClick={onItemClick}
      />
    );
  };
  const onItemClick = (item: any) => {
    navigate(Routes.PharmacyDetail);
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
      <ToolbarBackWithTitle
        title={STRING.pharmacy.Pharmacy}
        onBackPress={() => goBack()}
      />
      <ScrollView
        style={styles.vContainer}
        showsVerticalScrollIndicator={false}>
        {renderPrescriptionContainer()}
        {renderPopularProduct()}
        {renderProductOnSale()}
      </ScrollView>
    </SafeAreaView>
  );
};
