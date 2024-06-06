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
import {FONTS, SIZES} from 'src/theme';
import {ItemCart, ItemHealthList} from 'src/component/custom/item';
import {goBack, navigate} from 'src/navigation/RootNavigation';
import {Routes} from 'src/navigation/route';
import {ToolbarBackWithTitle} from 'src/component/custom/toolbar';
import {ThemeButton} from 'src/component/custom/button';
import {ModalCheckOut} from 'src/component/custom/modal';

export default ({route}: any): JSX.Element => {
  const [detail, setDetails] = useState(DUMMYSTRING.cart_detail);

  const [isCheckoutModal, setIsCheckoutModal] = useState<boolean>(false);

  const renderListContainer = () => {
    return (
      <View>
        <FlatList data={detail.cart_list} renderItem={renderItem} />
      </View>
    );
  };
  const renderItem = ({item, index}: {item: any; index: number}) => {
    return <ItemCart item={item} index={index} />;
  };
  const renderPaymentDetailContainer = () => {
    return (
      <>
        <Text style={styles.tPayment}>{STRING.cart.payment_detail}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.tSubtotal}>{STRING.cart.subtotal}</Text>
          <Text style={styles.tSubtotal}>
            {'$'}
            {detail.subtotal}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.tSubtotal}>{STRING.cart.taxes}</Text>
          <Text style={styles.tSubtotal}>
            {'$'}
            {detail.taxes}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={[styles.tSubtotal, {fontFamily: FONTS.SEMI_BOLD}]}>
            {STRING.cart.total}
          </Text>
          <Text style={[styles.tSubtotal, {fontFamily: FONTS.SEMI_BOLD}]}>
            {'$'}
            {detail.total}
          </Text>
        </View>
        <View style={styles.vSeprator} />
      </>
    );
  };
  const renderPaymentMethod = () => {
    return (
      <>
        <Text style={styles.tPayment}>{STRING.cart.payment_method}</Text>
        <TouchableOpacity style={styles.vPayment}>
          <Text style={styles.tVisa}>{'VISA'}</Text>
          <Text style={styles.tChange}>{STRING.cart.change}</Text>
        </TouchableOpacity>
      </>
    );
  };

  const renderButtonContainer = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: SIZES.countPixelRatio(20),
        }}>
        <View style={{flex: 1}}>
          <Text style={styles.tSubtotal}>{STRING.cart.total}</Text>
          <Text style={styles.tTotal}>
            {'$'}
            {detail.total}
          </Text>
        </View>
        <ThemeButton
          title={STRING.cart.checkout}
          customStyle={{width: SIZES.countPixelRatio(150)}}
          onPress={() => {
            setIsCheckoutModal(true);
          }}
        />
      </View>
    );
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
        title={STRING.cart.my_cart}
        onBackPress={() => {
          goBack();
        }}
      />
      <View style={styles.vContainer}>
        {renderListContainer()}
        {renderPaymentDetailContainer()}
        {renderPaymentMethod()}
        {renderButtonContainer()}
      </View>
      {isCheckoutModal && (
        <ModalCheckOut
          isModalOpen={isCheckoutModal}
          closeListener={() => {
            setIsCheckoutModal(false);
          }}
          icon={APP_IMAGES.ic_done}
          title={STRING.payment.title}
          info={STRING.payment.info}
          buttonTitle={STRING.payment.btn}
          onButtonClick={() => {
            setIsCheckoutModal(false);
          }}
        />
      )}
    </SafeAreaView>
  );
};
