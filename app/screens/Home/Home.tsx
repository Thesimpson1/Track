import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {calcFontSize, calcHeight} from '../../utils/scaling-system';
import {colors, MainColorName} from '../../constants/color.ts';
import {Week} from './components/Week/Week.tsx';

import {Calendar} from './components/Calendar/Calendar.tsx';
import {getWeeksInMonth} from 'date-fns';
import {useSharedValue} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import {useGetAnimationStyle} from './hooks/useGetAnimationStyle.ts';
export const Home = () => {
  const amountOfWeek = useSharedValue(getWeeksInMonth(new Date()));
  const {timeZoneAnimatedStyle} = useGetAnimationStyle({amountOfWeek});

  return (
    <View>
      <View style={styles.topWrapper}>
        <Text style={styles.topText}>Availability</Text>
      </View>
      <View>
        <Week />
        <Calendar amountOfWeek={amountOfWeek} />
        <Animated.View style={[styles.timeZoneWrapper, timeZoneAnimatedStyle]}>
          <Text style={styles.topText}>Time zone</Text>
        </Animated.View>
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
  timeZoneWrapper: {
    height: calcHeight(38),
    backgroundColor: colors[MainColorName.BLACK_GRAY],
    justifyContent: 'center',
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: colors[MainColorName.WHITE],
  },
});
