import React, {useState} from 'react';

import {FlatList, Image, ScrollView, StatusBar, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './style';
import {COLOR, FONTS, SIZES} from 'src/theme';
import {ToolbarBackWithTitle} from 'src/component/custom/toolbar';
import {DUMMYSTRING, STRING} from 'src/utils';
import {goBack} from 'src/navigation/RootNavigation';
import {APP_IMAGES} from 'src/assets/images';
import ReadMore from 'src/component/library/readmore';
import CalendarStrip from 'src/component/library/weekViewCalendar/src/CalendarStrip';
import {ItemBookingSlot} from 'src/component/custom/item';
import {ThemeButton} from 'src/component/custom/button';
export default ({route}: any): JSX.Element => {
  const [detail, setDetail] = useState(DUMMYSTRING.doctor_detail);
  const [bookingSlotList, setBookingSlotList] = useState(
    DUMMYSTRING.booking_slot_list,
  );

  const renderDoctorInfo = () => {
    return (
      <View style={styles.vMain}>
        <Image source={{uri: detail.image}} style={styles.iImage} />
        <View>
          <Text style={styles.tName}>{detail.name}</Text>
          <Text style={styles.tSpecialities}>{detail.specialist}</Text>
          <View style={styles.vRowContainer}>
            <Image source={APP_IMAGES.ic_star} style={styles.iStar} />
            <Text style={styles.tRating}>{detail.rating}</Text>
          </View>
          <Text style={styles.tSpecialities}>{detail.away_from}</Text>
        </View>
      </View>
    );
  };
  const renderAboutContainer = () => {
    return (
      <View style={{}}>
        <Text style={styles.tAbout}>{STRING.top_doctor.about}</Text>

        <ReadMore
          descInfo={detail.about}
          textStyle={styles.tAboutInfo}
          maxLine={3}
        />
      </View>
    );
  };
  const renderCalendarContainer = () => {
    return (
      <CalendarStrip
        scrollable
        calendarAnimation={{type: 'sequence', duration: 30}}
        daySelectionAnimation={{
          type: 'background',
          duration: 300,
        }}
        style={{height: 150, marginTop: 20}}
        calendarHeaderStyle={{
          color: COLOR.theme_black,
          fontSize: SIZES.countPixelRatio(20),
        }}
        calendarColor={'transparent'}
        dateNumberStyle={{
          color: COLOR.black,
          fontSize: SIZES.countPixelRatio(20),
          fontFamily: FONTS.SEMI_BOLD,
        }}
        dateNameStyle={{
          color: COLOR.black,
          fontSize: SIZES.countPixelRatio(12),
          opacity: 0.5,
          marginBottom: SIZES.countPixelRatio(5),
          fontFamily: FONTS.REGULAR,
        }}
        iconContainer={{flex: 0.1}}
        customDatesStyles={{}}
        highlightDateNameStyle={{
          color: COLOR.white,
          fontSize: SIZES.countPixelRatio(12),
          marginBottom: SIZES.countPixelRatio(5),
          fontFamily: FONTS.REGULAR,
        }}
        highlightDateNumberStyle={{
          color: COLOR.white,
          fontSize: SIZES.countPixelRatio(20),
          fontFamily: FONTS.SEMI_BOLD,
        }}
        highlightDateContainerStyle={{backgroundColor: COLOR.theme}}
      />
    );
  };
  const renderSperatorContainer = () => {
    return <View style={styles.vSperator} />;
  };
  const renderSlotContainer = () => {
    return (
      <FlatList
        data={bookingSlotList}
        renderItem={renderItem}
        numColumns={3}
        columnWrapperStyle={{columnGap: SIZES.smartWidthScale(35)}}
        contentContainerStyle={{
          rowGap: SIZES.countPixelRatio(20),
          marginTop: SIZES.countPixelRatio(20),
          marginBottom: SIZES.countPixelRatio(30),
        }}
        showsVerticalScrollIndicator={false}
      />
    );
  };
  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <ItemBookingSlot
        item={item}
        index={index}
        available_slot={detail.available_slot}
      />
    );
  };
  const renderButtonContainer = () => {
    return (
      <ThemeButton
        title={STRING.top_doctor.book_apointment}
        customStyle={{marginBottom: SIZES.countPixelRatio(30)}}
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
        title={STRING.top_doctor.doctor_detail}
        onBackPress={() => goBack()}
      />
      <ScrollView
        style={styles.vMainContainer}
        showsVerticalScrollIndicator={false}>
        {renderDoctorInfo()}
        {renderAboutContainer()}
        {renderCalendarContainer()}
        {renderSperatorContainer()}
        {renderSlotContainer()}
        {renderButtonContainer()}
      </ScrollView>
    </SafeAreaView>
  );
};
