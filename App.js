/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React,{Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './src/components/login'
import Try from './src/components/try'
//import toDo from './src/components/toDo';
import tarih from './src/questions/tarih'
const MainNavigator = createStackNavigator({
  Home: {
    screen: tarih,//Login,
  },
  Try:{
    screen: Try
  },
  Tarih:{
    screen: tarih
  }
},{headerMode:'none'}); // burada header'i kaldirdik

const App = createAppContainer(MainNavigator);

export default App;
