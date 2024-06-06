import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import {ToastAndroid} from 'react-native';

export default {
  savePref: (key: string, value: any) => {
    AsyncStorage.setItem(key, JSON.stringify(value), err => {});
  },
  getPref: (key: string) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (err, result) => {
        if (result) {
          resolve(JSON.parse(result));
        } else {
          reject(false);
        }
      });
    });
  },
  isEmailInvalid: (text: any) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      return true;
    }
    return false;
  },
  showToast: (msg: string) => {
    if (msg) {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    }
  },
  convertDateMMMDDYYYY: (date: string) => {
    return moment(date, 'YYYY-MM-DD HH:mm:ss').format('MMM DD YYYY');
  },
  getSubStr: (title: any, lastPosition: number) => {
    let size = title.length;
    if (size > lastPosition) {
      return title.substring(0, lastPosition) + '...';
    } else {
      return title;
    }
  },
  convertStartEndTime: (time: string) => {
    return moment(time).format('hh:mm A');
  },
};
