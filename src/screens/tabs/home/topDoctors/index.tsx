import React, {useState} from 'react';

import {FlatList, StatusBar, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './style';
import {COLOR} from 'src/theme';
import {ToolbarBackWithTitle} from 'src/component/custom/toolbar';
import {DUMMYSTRING, STRING} from 'src/utils';
import {goBack, navigate} from 'src/navigation/RootNavigation';
import {ItemTopDoctorList} from 'src/component/custom/item';
import {Routes} from 'src/navigation/route';
export default ({route}: any): JSX.Element => {
  const [doctorList, setDoctorList] = useState<Array<any>>(
    DUMMYSTRING.top_doctor_list,
  );

  const renderListContainer = () => {
    return (
      <FlatList
        data={doctorList}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    );
  };
  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <ItemTopDoctorList item={item} index={index} onItemClick={onItemClick} />
    );
  };
  const onItemClick = (item: any) => {
    navigate(Routes.TopDoctorsDetail, {name: item.name});
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
        title={STRING.top_doctor.top_doctors}
        onBackPress={() => goBack()}
      />
      <View style={styles.vMainContainer}>{renderListContainer()}</View>
    </SafeAreaView>
  );
};
