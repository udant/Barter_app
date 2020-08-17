import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import switchNavigator from '../App'
import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';


export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : switchNavigator
    },
  Setting : {
    screen : SettingScreen
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })