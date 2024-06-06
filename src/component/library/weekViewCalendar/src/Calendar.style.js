/**
 * Created by bogdanbegovic on 8/26/16.
 */

import {StyleSheet} from 'react-native';
import { COLOR } from 'src/theme';

export default StyleSheet.create({
  //CALENDAR STYLES
  calendarContainer: {
    overflow: 'hidden',
  },
  datesStrip: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
  },
  calendarDates: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.theme_op1,
    minHeight: 90,
    // height: 50,
  },
  calendarHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  icon: {
    resizeMode: 'contain',
  },

  //CALENDAR DAY
  dateRootContainer: {
    flex: 1,
  },
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  dateName: {
    textAlign: 'center',
  },
  weekendDateName: {
    color: '#A7A7A7',
    textAlign: 'center',
  },
  dateNumber: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  weekendDateNumber: {
    color: '#A7A7A7',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    marginTop: 1,
    borderRadius: 5,
    opacity: 0,
  },

  // CALENDAR DOTS
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  visibleDot: {
    opacity: 1,
    backgroundColor: 'blue',
  },
  selectedDot: {
    backgroundColor: 'blue',
  },

  // Calendar Lines
  line: {
    height: 4,
    marginTop: 3,
    borderRadius: 1,
    opacity: 0,
  },
  linesContainer: {
    justifyContent: 'center',
  },
  visibleLine: {
    opacity: 1,
    backgroundColor: 'blue',
  },
  selectedLine: {
    backgroundColor: 'blue',
  },
});
