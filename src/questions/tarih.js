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
import firebase from 'firebase';
let sorusayisi = 1


export default class tarih extends Component{

  constructor(props){
    super(props);

    this.state={
      errorMessage:''
    };
  }

  componentWillMount(){
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

  // To Configure react native app with cloud of Google Firebase database !


  firebase.database().ref('matematik2').on('soru', (data) => {
            console.log(data.toJSON());
        })
        // To Await 5 seconds to insert a new user
        setTimeout(() => {
            firebase.database().ref('matematik2/001').set(
                {
                    soru: 'üçgenin iç açıları toplamı kaçtır',
                    a: 180,
                    b: 360,
                    c: 190,
                    value: 200
                }
            ).then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);
            });
        }, 5000);

        // To Update a user
        //firebase.database().ref('matematik/001').update({
        //    soru: 'Onur Şen'
        //});

        firebase.database().ref('matematik2').on('soru', (data) => {
                  console.log(data.toJSON());
              })


        // To Remove a user
        firebase.database().ref('matematik2/001').remove();


    }

  render(){
    return(
      <View>
      <Text style={{fontSize:25,marginTop:100,marginLeft:20}}> Soru</Text>
      <Text style={{fontSize:25,marginLeft:20}}> A</Text>
      <Text style={{fontSize:25,marginLeft:20}}> B </Text>
      <Text style={{fontSize:25,marginLeft:20}}> C </Text>
      <Text style={{fontSize:25,marginLeft:20}}> D </Text>
      <Text>{this.state.errorMessage}</Text>
      <Button onPress={this.handleSignUp} title="handleSignUp"> {sorusayisi++} </Button>

      <Button onPress={this.handleLogin} title="İleri"> {sorusayisi++} </Button>

      </View>
    );
  }
}
