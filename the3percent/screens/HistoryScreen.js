import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, Dimensions} from 'react-native';

class HistoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{`인연이라면\n다시\n만나겠죠`}</Text>
      </View>
    );
  }
}

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    height: deviceHeight,
  },
  title: {
    color: '#ffffff',
    fontFamily: 'AppleSDGothicNeo-UltraLight',
    fontSize: 40,
    marginLeft: 31,
    marginBottom: 59,
    marginRight: 160,
    marginTop: 'auto',
  },
});

export default HistoryScreen;
