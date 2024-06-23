import React, {useMemo} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  calcFontSize,
  calcHeight,
  calcWidth,
} from '../../../../utils/scaling-system';
import {colors, MainColorName} from '../../../../constants/color.ts';
import {CalendarList} from 'react-native-calendars';
import moment from 'moment';
import {format} from 'date-fns';

interface RenderHeaderProps {
  date: string;
}
export const Calendar = () => {
  const today = moment();
  const renderHeader = (date: string) => {
    const displayedDate = format(new Date(date), 'MMMM yyyy');
    return (
      <View style={styles.calendarHeaderWrapper}>
        <Text style={styles.calendarHeaderText}>{displayedDate}</Text>
      </View>
    );
  };
  const dayComponent = ({date}: any) => {
    const {day, dateString} = date;
    const isAfter = moment(today).isBefore(dateString);
    const isToday = moment(today).format('YYYY-MM-DD') === dateString;
    const dayStyle =
      !isAfter && !isToday
        ? styles.calendarPrevDayComponentText
        : styles.calendarDayComponentText;
    const dayWrapperStyle = isToday
      ? styles.calendarCurrentDayComponentWrapper
      : styles.calendarDayComponentWrapper;

    return (
      <TouchableOpacity style={dayWrapperStyle} disabled={!isAfter && !isToday}>
        <Text style={dayStyle}>{day}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <CalendarList
      pastScrollRange={0}
      // enableSwipeMonths={true}
      style={styles.calendarMainWrapper}
      hideDayNames={true}
      pagingEnabled={true}
      calendarStyle={styles.calendarStyle}
      indicatorStyle={'black'}
      calendarHeight={calcHeight(358)}
      scrollEnabled={true}
      renderHeader={renderHeader}
      dayComponent={dayComponent}
    />
  );
};

const styles = StyleSheet.create({
  calendarMainWrapper: {
    height: calcHeight(358),
    backgroundColor: colors[MainColorName.BLACK],
  },
  calendarStyle: {
    backgroundColor: colors[MainColorName.BLACK],
  },
  calendarHeaderWrapper: {
    height: calcHeight(28),
    marginBottom: calcHeight(15),
    justifyContent: 'flex-end',
  },
  calendarHeaderText: {
    fontSize: calcFontSize(16),
    fontFamily: 'Lazzer-SemiBold',
    color: colors[MainColorName.WHITE],
  },
  calendarDayComponentWrapper: {
    height: calcHeight(35),
    width: calcWidth(35),
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarDayComponentText: {
    fontSize: calcFontSize(16),
    fontFamily: 'Lazzer-SemiBold',
    color: colors[MainColorName.LIGHT_GRAY],
  },
  calendarCurrentDayComponentWrapper: {
    height: calcHeight(35),
    width: calcWidth(35),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors[MainColorName.RED],
    borderRadius: calcWidth(26),
  },
  calendarPrevDayComponentText: {
    fontSize: calcFontSize(16),
    fontFamily: 'Lazzer-SemiBold',
    color: colors[MainColorName.WHITE],
    opacity: 0.32,
  },
  // flatListStyle: {
  //   alignItems: 'center',
  // },
});
