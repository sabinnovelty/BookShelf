import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigator from './src/app/route/index';
import { createStackNavigator, createAppContainer  } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';

// import Login from './src/app/component/Login';
// import Registration from './src/app/component/Registration';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Text>Hello world</Text>
      </View>
    );
  }
}


// const AppRoute = createStackNavigator({
//     Login: { screen: Login },
//     Registration: { screen: Registration },
//   },{
//     initialRouteName: 'Login'
//   });
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default createAppContainer( AppNavigator );
