import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {calcFontSize, calcHeight, calcWidth} from '../../utils/scaling-system';
import {colors, MainColorName} from '../../constants/color.ts';
import {Week} from './components/Week/Week.tsx';

import {Calendar} from './components/Calendar/Calendar.tsx';
import {getWeeksInMonth} from 'date-fns';
import {useSharedValue} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import {useGetAnimationStyle} from './hooks/useGetAnimationStyle.ts';

import {useGetTimeZone} from '../../hooks/useGetTimeZone.ts';

export const Home = () => {
  const amountOfWeek = useSharedValue(getWeeksInMonth(new Date()));
  const {timeZoneAnimatedStyle} = useGetAnimationStyle({amountOfWeek});

  const {currentTimeZone} = useGetTimeZone();

  return (
    <View>
      <View style={styles.topWrapper}>
        <Text style={styles.topText}>Availability</Text>
      </View>
      <View>
        <Week />
        <Calendar amountOfWeek={amountOfWeek} />
        <Animated.View style={[styles.timeZoneWrapper, timeZoneAnimatedStyle]}>
          <Image
            source={require('../../assets/image/img.png')}
            style={styles.imageStyle}
          />
          <Text style={styles.topText}>{currentTimeZone}</Text>
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
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageStyle: {
    width: calcWidth(16),
    height: calcHeight(16),
    marginRight: calcWidth(10),
  },
});
