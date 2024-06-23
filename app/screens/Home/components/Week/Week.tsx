import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {
  calcFontSize,
  calcHeight,
  calcWidth,
} from '../../../../utils/scaling-system';
import {colors, MainColorName} from '../../../../constants/color.ts';

interface WeekDaysType {
  item: string;
  index: number;
}
const WEEK_DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
export const Week = () => {
  const renderItem = ({item, index}: WeekDaysType) => {
    console.log('1111', index);
    const marginRightStyle = index === 6 ? 0 : calcWidth(14);
    return (
      <Text style={[styles.weekText, {marginRight: marginRightStyle}]}>
        {item}
      </Text>
    );
  };
  return (
    <View style={styles.mainWrapper}>
      <FlatList
        data={WEEK_DAYS}
        renderItem={renderItem}
        horizontal={true}
        contentContainerStyle={styles.flatListStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    height: calcHeight(38),
    // paddingHorizontal: calcHeight(7),
    marginTop: calcHeight(20),
    // alignItems:'center',
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: colors[MainColorName.WHITE],
    marginHorizontal: calcWidth(22),
  },
  weekText: {
    fontSize: calcFontSize(16),
    fontFamily: 'Lazzer-Bold',
    color: colors[MainColorName.LIGHTER_GRAY],
    width: calcWidth(35),

    textAlign: 'center',
    // paddingHorizontal: calcHeight(18.5),
  },
  flatListStyle: {
    alignItems: 'center',
  },
});
