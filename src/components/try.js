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
import Deneme from './class'


export default class TryClass extends Component {
    constructor(props){
      super(props);
      this.timer = null;
      //state
      this.state = {
        dynamic_text_1:'1567',
        dynamic_text_2:'3067',
        dynamic_text_3:'6067',
        dynamic_text_4:'8000',
         dynamic_text_5:'9507',
         yanlis_sayisi : 0,
         sayac:0,



      };
      // binds
      this.startGame = this.startGame.bind(this);
      this.timerDurumlari = this.timerDurumlari.bind(this);
      //this.ilkDegerleriYukle = this.ilkDegerleriYukle.bind(this);
      //this.ilkDegerleriYukle()
      }
        static navigationOptions = () =>({
          title: ' Game Page ',
          headerStyle:{
            backgroundColor: '#4169E1',

          }
        });
      timerDurumlari(){
        if(this.state.dynamic_text_1!='Correct'){
          if(this.state.fark<=(this.state.dynamic_text_1+500) &&
          this.state.fark>=(this.state.dynamic_text_1-500)){
                this.setState({
                  dynamic_text_1:'InCorrect',
                  yanlis_sayisi:this.state.yanlis_sayisi+1,
                });

          }
        }

        if(this.state.fark<=(this.state.dynamic_text_2+500) &&
        this.state.fark>=(this.state.dynamic_text_2-500)){
            this.setState({
              dynamic_text_2:'InCorrect',
              yanlis_sayisi: this.state.yanlis_sayisi+1,
            });

        }
        if(this.state.fark<=(this.state.dynamic_text_3+500) &&
        this.state.fark>=(this.state.dynamic_text_3-500)){
            this.setState({
              dynamic_text_3:'InCorrect',
              yanlis_sayisi: this.state.yanlis_sayisi+1,
            });

        }
        if(this.state.fark<=(this.state.dynamic_text_4+500) &&
        this.state.fark>=(this.state.dynamic_text_4-500)){
            this.setState({
              dynamic_text_4:'InCorrect',
              yanlis_sayisi: this.state.yanlis_sayisi+1,
            });

        }
        if(this.state.fark<=(this.state.dynamic_text_5+500) &&
        this.state.fark>=(this.state.dynamic_text_5-500)){
            this.setState({
              dynamic_text_5:'InCorrect',
              yanlis_sayisi: this.state.yanlis_sayisi+1,
            });

        }
      }
      startGame(){
          const farkDeger = this.state.fark;
      if(this.state.timer!=null){


          this.setState({
            sayac:this.state.sayac+1,

          });

      }
      else{
      const myTarget = 10000;
      const start = Date.now();
      const timer = setInterval(() => {
          const now = Date.now();
          const fark = now - start;
          const kalan_zaman = this.state.target - fark;
          // timerDurumlari();
          if(kalan_zaman<=0){
            clearInterval(timer);
          }
          else{
            if(this.state.sayac==1){
              if(farkDeger < (this.state.dynamic_text_1+500)
            && farkDeger> (this.state.dynamic_text_1-500) ){
                this.setState({dynamic_text_1:'Correct'});
              }
              else{
                this.setState({dynamic_text_1:'InCorrect'});
              }
          }
          }
          this.setState({
              kalan_zaman,
              timer,
              fark,

          });
      },16);
      this.setState({
        target : myTarget,
      });


      }
    }

    render(){

      return(
          <View style={{flex:1,borderWidth:2,borderColor:'red'}}>

            <Text style={style.timerText}>
            Sayac Degerim: {this.state.fark}
            </Text>
            <Text style={style.inCorrectText}>
             Yanlis sayisi: {this.state.yanlis_sayisi}
            </Text>

          
            <Deneme name='Deneme class'/>
            <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 100}}
           onValueChange={(itemValue, itemIndex) =>
           this.setState({language: itemValue})
           }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <View style={{borderColor:'black',borderWidth:2,flex:1,top:25}}>

           <View style={style.textViewStyle}>
           <Text style={style.guesText}>
            {this.state.dynamic_text_5}
            </Text>
            <Text style={style.guesText2}>
            {this.state.dynamic_text_4}
            </Text>
            <Text style={style.guesText3}>
            {this.state.dynamic_text_3}
            </Text>
            <Text style={style.guesText4}>
            {this.state.dynamic_text_2}
            </Text>
            <Text style={style.guesText5}>
            {this.state.dynamic_text_1}
            </Text>
           </View>

        <TouchableOpacity style={style.startGameTouchableView}
              onPress={this.startGame}>
                <Text style={style.startText}>Start Game</Text>
        </TouchableOpacity>


        <TouchableOpacity style={style.stopGameTouchableView}
          onPress={this.startGame}>
            <Text style={style.startText}>Stop Game</Text>
        </TouchableOpacity>
        </View>
           </View>
      );
    }



}
