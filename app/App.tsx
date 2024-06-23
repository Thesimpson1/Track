/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {Home} from './screens/Home/Home.tsx';
import {colors, MainColorName} from './constants/color.ts';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar barStyle={'light-content'} />
      <Home />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: colors[MainColorName.BLACK],
    flex: 1,
  },
});
export default App;
