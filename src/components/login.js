
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
    Picker,


} from 'react-native'
import style from '../style/style'

export default class HelloWorldApp extends Component {
  constructor(props){
      super(props);
      this.timer = null;
      this.state = { language:null};

  }



  navigationButton(){
    this.props.navigation.navigate('tarih'); // try sayfasina yonlendirildi

  }

  render() {


    return (
      <View style={{ flex: 1, backgroundColor:'#222232'}}>
      <View style={{height:'15%',marginLeft:'2.5%',width:'95%',marginTop:100}}>
          <ScrollView horizontal={true}
                style={{flex:1}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Tarih")}>
              <Image style={style.googleimage} source={require('../screens/matematik.jpg')} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={style.facebookimage} source={require('../screens/turkce.png')} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={style.turkiyeimage} source={require('../screens/cografya.jpg')} />
            </TouchableOpacity>
        </ScrollView>
        </View>
        <View style={{height:'15%',marginLeft:'2.5%',width:'95%',marginTop:50}}>
            <ScrollView horizontal={true}
                  style={{flex:1}}>
              <TouchableOpacity>
                <Image style={style.googleimage} source={require('../screens/fizik.jpg')} />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image style={style.facebookimage} source={require('../screens/kimya.jpg')} />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image style={style.turkiyeimage} source={require('../screens/biyoloji.jpg')} />
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{height:'15%',marginLeft:'2.5%',width:'95%',marginTop:50}}>
              <ScrollView horizontal={true}
                    style={{flex:1}}>
                <TouchableOpacity>
                  <Image style={style.googleimage} source={require('../screens/geometri.jpg')} />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image style={style.facebookimage} source={require('../screens/ingilizce.jpg')} />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image style={style.turkiyeimage} source={require('../screens/tarih.jpeg')} />
                </TouchableOpacity></ScrollView>
            </View>



      </View>
    );
  }
}
