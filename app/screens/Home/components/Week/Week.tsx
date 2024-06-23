import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {calcFontSize, calcHeight} from '../../../../utils/scaling-system';
import {colors, MainColorName} from '../../../../constants/color.ts';

interface WeekDaysType {
  item: string;
}
const WEEK_DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
export const Week = () => {
  const renderItem = ({item}: WeekDaysType) => {
    return <Text style={styles.weekText}>{item}</Text>;
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
    paddingHorizontal: calcHeight(5),
    marginTop: calcHeight(20),
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: colors[MainColorName.WHITE],
  },
  weekText: {
    fontSize: calcFontSize(16),
    fontFamily: 'Lazzer-Bold',
    color: colors[MainColorName.LIGHTER_GRAY],
    paddingHorizontal: calcHeight(20),
  },
  flatListStyle: {
    alignItems: 'center',
  },
});
