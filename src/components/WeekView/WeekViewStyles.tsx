import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    width: 360,
    alignItems: 'center',
  },
  weekHeader: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  weekDaysWrapper: {
    flexDirection: 'row',
    width: 360,
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  weekDayContainer: {
    alignItems: 'center',
    width: 45,
    paddingVertical: 8,
    borderRadius: 15,
  },
  activeWeekDay: {
    backgroundColor: '#1A2B57',
  },
  weekDayText: {
    fontSize: 15,
    marginBottom: 5,
  },
  weekDateText: {
    fontSize: 17,
    fontWeight: '700',
  },
  activeDayText: {
    color: '#fff',
  },
});
