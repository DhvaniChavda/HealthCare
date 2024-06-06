import React from 'react';
import {FlatList, Image, ScrollView, StatusBar, Text, View} from 'react-native';
import styles from './style';
import SafeAreaView from 'react-native-safe-area-view';
import {DUMMYSTRING, STRING} from 'src/utils';
import {APP_IMAGES} from 'src/assets/images';
import {COLOR} from 'src/theme';
import {ItemReport} from 'src/component/custom/item';

export default ({route}: any): JSX.Element => {
  const renderHeartRateContainer = () => {
    return (
      <View style={styles.vHeartRate}>
        <View style={{flex: 1}}>
          <Text style={styles.tHeartRate}>{STRING.reports.heart_rate}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'baseline',
            }}>
            <Text style={styles.tBpmNumber}>{'97'}</Text>
            <Text style={styles.tBpm}>{'bpm'}</Text>
          </View>
        </View>
        <Image source={APP_IMAGES.ic_vector} style={styles.iVector} />
      </View>
    );
  };

  const renderRowContainer = () => {
    return (
      <View style={styles.vRow}>
        <View style={styles.vPink}>
          <Image source={APP_IMAGES.ic_blood_drop} style={styles.iIcon} />
          <Text style={styles.tLabel}>{STRING.reports.blood_group}</Text>
          <Text style={styles.tValue}>{'A+'}</Text>
        </View>
        <View style={[styles.vPink, {backgroundColor: COLOR.light_yellow}]}>
          <Image source={APP_IMAGES.ic_weight_lifting} style={styles.iIcon} />
          <Text style={styles.tLabel}>{STRING.reports.weight}</Text>
          <Text style={styles.tValue}>{'103lbs'}</Text>
        </View>
      </View>
    );
  };

  const renderReportContainer = () => {
    return (
      <View>
        <Text style={styles.tReport}>{STRING.reports.latest_report}</Text>
        <FlatList
          data={DUMMYSTRING.latest_report_list}
          renderItem={renderItem}
        />
      </View>
    );
  };
  const renderItem = ({item, index}: {item: any; index: number}) => {
    return <ItemReport item={item} index={index} />;
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
      <ScrollView
        style={styles.vContainer}
        showsVerticalScrollIndicator={false}>
        {renderHeartRateContainer()}
        {renderRowContainer()}
        {renderReportContainer()}
      </ScrollView>
    </SafeAreaView>
  );
};
