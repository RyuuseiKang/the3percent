import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import ReadyScreen from './screens/ReadyScreen.js';
import HistoryScreen from './screens/HistoryScreen.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          pagingEnabled={true}
          bounces={false}
        >
          <ReadyScreen />
          <HistoryScreen />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 0,
  },
});
