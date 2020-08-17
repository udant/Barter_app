import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { YellowBox } from "react-native";
import _ from "lodash";
 YellowBox.ignoreWarnings(["Setting a timer"]);
 const _console = _.clone(console);
 console.warn = (message) => {
   if (message.indexOf("Setting a timer") <= -1) {
     _console.warn(message);
   }
 };

import {createBottomTabNavigator,createAppContainer } from "react-navigation/bottom-tabs"; 
import HomeScreen from "./screens/ExchangeScreen";
import ExchangeScreen from "./screens/ExchangeScreen";
import SignupLoginScreen from './screens/signupLoginScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <SignupLoginScreen/>
    </View>
  );
}
export default switchNavigator=createSwitchNavigator({
  Home:{screen:HomeScreen},
  Exchange:{screen:ExchangeScreen}
})
const AppContainer = createAppContainer(switchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
