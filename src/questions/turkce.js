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
let soruNumarasi = 1
export default class turkce extends Component{

  constructor(props){
    super(props);
    //this.getVeri();   // başlangıçtaki çalışacak olan fonksiyon

    this.state={
      errorMessage:'',
      Soru: '',
      A:'',
      B: '',
      C: '',
      D: '',
      pressStatusA:true,
      pressStatusB:true,
      pressStatusC:true,
      pressStatusD:true,
      cevap:'',
      cevapTutucu:'',

    };

    this.veriUpdate = this.veriUpdate.bind(this);
    this.getVeri = this.getVeri.bind(this);
    this.changeStatusA = this.changeStatusA.bind(this);
    this.changeStatusB = this.changeStatusB.bind(this);
    this.changeStatusC = this.changeStatusC.bind(this);
    this.changeStatusD = this.changeStatusD.bind(this);


  }

  static navigationOptions = {
    headerTitle: 'Deneme',
    headerBackTitle:'try',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#808080"
      />
    ),
    headerLeft:null
  };
  changeStatusA(){     // soru seçimi yapıldığında rengi değiştir
    this.setState({
      pressStatusA:!this.state.pressStatusA,
      cevap: this.state.cevap=='A' ? '' : 'A',
      pressStatusB: this.state.pressStatusB ? this.state.pressStatusB : !this.state.pressStatusB,
      pressStatusC: this.state.pressStatusC ? this.state.pressStatusC : !this.state.pressStatusC,
      pressStatusD: this.state.pressStatusD ? this.state.pressStatusD : !this.state.pressStatusD

    });
  }

  changeStatusB(){     // soru seçimi yapıldığında rengi değiştir
    this.setState({
      pressStatusB:!this.state.pressStatusB,
      cevap: this.state.cevap=='B' ? '' : 'B',
      pressStatusA: this.state.pressStatusA ? this.state.pressStatusA : !this.state.pressStatusA,
      pressStatusC: this.state.pressStatusC ? this.state.pressStatusC : !this.state.pressStatusC,
      pressStatusD: this.state.pressStatusD ? this.state.pressStatusD : !this.state.pressStatusD


    });
  }

  changeStatusC(){     // soru seçimi yapıldığında rengi değiştir
    this.setState({
      pressStatusC:!this.state.pressStatusC,
      cevap: this.state.cevap=='C' ? '' : 'C',
      pressStatusA: this.state.pressStatusA ? this.state.pressStatusA : !this.state.pressStatusA,
      pressStatusB: this.state.pressStatusB ? this.state.pressStatusB : !this.state.pressStatusB,
      pressStatusD: this.state.pressStatusD ? this.state.pressStatusD : !this.state.pressStatusD

    });
  }

  changeStatusD(){     // soru seçimi yapıldığında rengi değiştir
    this.setState({
      pressStatusD:!this.state.pressStatusD,
      cevap: this.state.cevap=='D' ? '' : 'D',
      pressStatusA: this.state.pressStatusA ? this.state.pressStatusA : !this.state.pressStatusA,
      pressStatusC: this.state.pressStatusC ? this.state.pressStatusC : !this.state.pressStatusC,
      pressStatusB: this.state.pressStatusB ? this.state.pressStatusB : !this.state.pressStatusB

    });
  }

  getVeri(){
    firebase.database().ref('/Sorular/Turkce/Soru'+soruNumarasi.toString()).on('value', (snapshot) => {
      const userObj = snapshot.val();
      this.setState({
        Soru:userObj.Soru,
        A: userObj.A,
        B: userObj.B,
        C: userObj.C,
        D: userObj.D,
        cevapTutucu: this.state.cevapTutucu+ this.state.cevap+',',
        pressStatusA:true,
        pressStatusB:true,
        pressStatusC:true,
        pressStatusD:true,


      });
      });


    soruNumarasi++;
  }
   veriUpdate(){
    firebase.database().ref('matematik2/001').update({
        soru: 'Onur şşşşşŞen'
    });
    this.setState({
      Soru:'veri update',
    });
  }
  render(){
    return(
      <View>
      <Text style={{fontSize:25,marginTop:100,marginLeft:20}}> Soru : {this.state.Soru} </Text>
      <View>
        <TouchableOpacity  onPress={this.changeStatusA} style={this.state.pressStatusA ? style.CevapA : style.CevapB }>
          <Text style={{fontSize:25}}>A</Text>
        </TouchableOpacity>
        <Text style={{position:'absolute', fontSize:25,marginLeft:60,marginTop:7}}> {this.state.A}</Text>
      </View>
      <View>
        <TouchableOpacity  onPress={this.changeStatusB} style={this.state.pressStatusB ? style.CevapA : style.CevapB }>
          <Text style={{fontSize:25}}>B</Text>
        </TouchableOpacity>
        <Text style={{position:'absolute', fontSize:25,marginLeft:60,marginTop:7}}> {this.state.B}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={this.changeStatusC} style={this.state.pressStatusC ? style.CevapA : style.CevapB }>
          <Text style={{fontSize:25}}>C</Text>
        </TouchableOpacity>
        <Text style={{position:'absolute', fontSize:25,marginLeft:60,marginTop:7}}> {this.state.C}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={this.changeStatusD} style={this.state.pressStatusD ? style.CevapA : style.CevapB }>
          <Text style={{fontSize:25}}>D</Text>
        </TouchableOpacity>
        <Text style={{position:'absolute', fontSize:25,marginLeft:60,marginTop:7}}>  {this.state.D}</Text>
      </View>


      <Button title="Sonraki Soru" onPress={this.getVeri}></Button>

      <Text style={{fontSize:25}}>Cevap: {this.state.cevap}</Text>
      <Text style={{fontSize:25}}>CevapTutucu: {this.state.cevapTutucu}</Text>


      </View>
    );
  }
}
