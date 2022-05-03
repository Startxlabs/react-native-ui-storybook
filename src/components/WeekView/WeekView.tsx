import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  add,
  addDays,
  format,
  getDate,
  isSameDay,
  startOfWeek,
  sub,
} from 'date-fns';
import {v4 as uuidv4} from 'uuid';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {WeekDayI, WeekViewI} from './WeekViewInterface';
import {styles} from './WeekViewStyles';

export const WeekView = ({
  initialDate = new Date(),
  onDateChange,
  weekDaysContainerStyle,
}: WeekViewI) => {
  const [date, setDate] = useState(initialDate);
  const [week, setWeek] = useState<WeekDayI[]>([]);

  useEffect(() => {
    const weekDays = getWeekDays(date);

    setWeek(weekDays);
  }, []);

  // * callback with selected date
  useEffect(() => {
    if (onDateChange) {
      onDateChange(date);
    }
  }, [date]);

  const getPreviousWeek = () => {
    const previousDate = sub(date, {days: 7});
    const previous = getWeekDays(previousDate);
    setWeek(previous);
    setDate(previousDate);
  };

  const getNextWeek = () => {
    const nextDate = add(date, {days: 7});
    const next = getWeekDays(nextDate);
    setWeek(next);
    setDate(nextDate);
  };

  return (
    <View style={styles.root}>
      <View style={styles.weekHeader}>
        <TouchableOpacity activeOpacity={0.85} onPress={getPreviousWeek}>
          <Icon name="chevron-left" size={20} color={'#000'} />
        </TouchableOpacity>
        <Text>{format(date, 'PP')}</Text>
        <TouchableOpacity activeOpacity={0.85} onPress={getNextWeek}>
          <Icon name="chevron-right" size={20} color={'#000'} />
        </TouchableOpacity>
      </View>

      <View style={[styles.weekDaysWrapper, weekDaysContainerStyle]}>
        {week.length > 0 &&
          week.map(weekDay => {
            const isSame = isSameDay(weekDay.date, date);

            return (
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => setDate(weekDay.date)}
                style={[
                  styles.weekDayContainer,
                  isSame ? styles.activeWeekDay : {},
                ]}
                key={uuidv4()}>
                <Text
                  style={[
                    styles.weekDayText,
                    isSame ? styles.activeDayText : {},
                  ]}>
                  {weekDay.formatted}
                </Text>
                <Text
                  style={[
                    styles.weekDateText,
                    isSame ? styles.activeDayText : {},
                  ]}>
                  {weekDay.day}
                </Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

/**
 *
 * @param date
 * @returns week data
 */
export const getWeekDays = (date: Date) => {
  const start = startOfWeek(date);

  const weekData = [];

  for (let i = 0; i < 7; i++) {
    const date = addDays(start, i);

    weekData.push({
      formatted: format(date, 'EEEEE'),
      date,
      day: getDate(date),
    });
  }

  return weekData;
};
