import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {LinearGradient} from 'expo';

class ReadyScreen extends React.Component {
  props = {
    batteryRate: 30,
  };
  render() {
    return (
      <View>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Text style={styles.title}>
            {`옷깃에 스치려면\n${String(this.props.batteryRate)}%\n남았어요`}
          </Text>
          <View style={styles.batteryOuter}>
            <LinearGradient
              colors={['#fb7874', '#f5344a']}
              style={styles.batteryView}
            />
            <Image
              style={styles.batteryFrame}
              source={require('../assets/big_battery_frame/big_battery_frame.png')}
            />
          </View>
        </SafeAreaView>
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
    marginTop: 43,
    marginRight: 91,
  },
  batteryOuter: {
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 'auto',
    alignItems: 'center',
  },
  batteryView: {
    borderRadius: 10,
    position: 'absolute',
    width: 173,
    height: 60,
    bottom: 157,
    top: 'auto',
  },
  batteryFrame: {
    height: 526,
    width: 199,
    resizeMode: 'stretch',
  },
});

export default ReadyScreen;
