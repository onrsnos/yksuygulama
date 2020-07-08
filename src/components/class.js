import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    View,
    Math,
    TextInput,
    ScrollView,
    Image,


} from 'react-native'
import style from '../style/style'

export default class Deneme extends Component{
  render(){
    return(
      <Text>{this.props.name}</Text>
    );
  }
}
