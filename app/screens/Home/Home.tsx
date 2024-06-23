/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {calcFontSize, calcHeight, calcWidth} from '../../utils/scaling-system';
import {colors, MainColorName} from '../../constants/color.ts';
import {Week} from './components/Week/Week.tsx';
import {CalendarList} from 'react-native-calendars/src';
import {Calendar} from './components/Calendar/Calendar.tsx';

export const Home = () => {
  return (
    <View>
      <View style={styles.topWrapper}>
        <Text style={styles.topText}>Availability</Text>
      </View>
      <View>
        <Week />
        <Calendar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topWrapper: {
    height: calcHeight(52),
    justifyContent: 'center',
  },
  topText: {
    fontSize: calcFontSize(16),
    fontFamily: 'Lazzer-Bold',
    textAlign: 'center',
    color: colors[MainColorName.WHITE],
  },
});
