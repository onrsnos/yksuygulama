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
import firebase from 'firebase';
import Login from './src/components/login'
import Try from './src/components/try'
//import toDo from './src/components/toDo';
import tarih from './src/questions/tarih'
import turkce from './src/questions/turkce'

var firebaseConfig = {
apiKey: "AIzaSyCeJi8irF4HxfpYU5j1bFt-7lR4Uy0F6j4",
authDomain: "react-d4405.firebaseapp.com",
databaseURL: "https://react-d4405.firebaseio.com",
projectId: "react-d4405",
storageBucket: "react-d4405.appspot.com",
messagingSenderId: "190536319971",
appId: "1:190536319971:web:9958b654e4e29c00b156d6",
measurementId: "G-FWZLP5RHLJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const MainNavigator = createStackNavigator({

  Home: {
    screen:Login,
  },
  Try:{
    screen: Try
  },
  Tarih:{
    screen: tarih
  },
  Turkce:{
    screen: turkce
  }
},{defaultNavigationOptions:{
    headerStyle:{},
    headerBackTitle:'Hello'
  }}); // burada header'i kaldirdik




const App = createAppContainer(MainNavigator);

export default App;
