import React,{Component} from 'react';
import {
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    View,
    Math,
    TextInput,
    ScrollView,

} from 'react-native'
import { CheckBox } from 'react-native-elements'

const GAME_STATE={
    INITIAL:0,
    START:1,
    STOP:2,
    OVER:3,
}
 const gradientHeight=500;
 const gradientBackground='green';
 const data=Array.from({length:gradientHeight});
var circleSycle='initial mode active';

var gameState=0;
var temp=0;
var renk='gray';
var renks=['red','yellow','green','brown','blue'];

import { TouchableHighlight } from 'react-native-gesture-handler';
import { Image } from 'react-native';
export default class LearnState extends Component {
    constructor(props){
        super(props);
        this.state={
             nickText:'',
             passText:'',
             controltis:false,

             };
             this.controlChange=this.controlChange.bind(this);
             this.addInput=this.addInput.bind(this);
             this.cllick=this.cllick.bind(this);
            }
    addInput(){
        console.warn('Hello world');

        this.setState({})
    }
    controlChange(){
        this.setState({controltis:!this.state.controltis})
    }
    cllick(){
        if(this.state.nickText.trim()!='' && this.state.passText.trim()!=''){
        if(this.state.nickText=='trim' && this.state.passText=='length'){
            console.warn('you will be an enginear');
        }
        }
        else {
            console.warn('Please check your username or password')
        }
        this.setState({})
    }
render(){
     if( gameState==GAME_STATE.START){
         circleSycle='game is started';
     }
     else if(gameState==GAME_STATE.OVER){
         circleSycle='game is overed'
     }
    return(
        <View style={{flex:1}}>
<View style={{height:'70%'}}>

<Text style={{marginLeft:'35%',marginTop:'10%',fontSize:25}}>Pet Hotel</Text>


<TextInput value={this.state.nickText} onChangeText={(v)=> this.setState({nickText:v})}
style={{borderWidth:0.5,borderRadius:2,height:'8%',width:'90%',margin:10,marginTop:'10%',marginLeft:'5%'}}>
    </TextInput>
<TextInput value={this.state.passText} onChangeText={(v)=> this.setState({passText:v})}
style={{borderWidth:0.5,borderRadius:2,height:'8%',margin:10,width:'90%',marginLeft:'5%'}}></TextInput>


  <Text style={{fontSize:12,marginLeft:'5%'}}> Sign in as:</Text>

  <View style={{position:'absolute',marginLeft:'21%',marginTop:'58.68%'}}>
   <Text style={{fontSize:12,color:'red',marginLeft:0}}> Manager Employee Pet Owner</Text>
   </View>

  <View style={{width:'5%',height:'4%',marginLeft:'5.5%'
  ,marginTop:'5%',backgroundColor:'white',borderWidth:1}}>
  </View>
  <View style={{position:'absolute',marginTop:'65%'
  ,marginLeft:'12%'}}>
      <Text style={{fontSize:12}}>
          Remember me
      </Text>
  </View>
 <View style={{position:'absolute',marginLeft:'64%',marginTop:'65%'}}>
       <Text onPress={()=> this.props.navigation.navigate('LearnState2')} style={{color:'red',fontSize:12}}>Forgot password</Text>
       </View>

   <View style={{marginTop:'10%',width:'90%',marginLeft:'5%',borderRadius:2,
fontSize:12}}>
  <Button title='Sign in' color='red' onPress={this.cllick}></Button>
  </View>

 <View style={{width:'90%',marginTop:'7%',marginLeft:'5%'}}>
 <Text style={{textAlign:'center',fontSize:12}}>   This is a demo application. Do not send/upload sensetive information! All information submited is public! the database is cleaned daily</Text>

 </View>
 </View>

<View style={{height:1,width:'90%',marginLeft:'5%',backgroundColor:'#E8E8E8'}}>

</View>

<View style={{flex:1,alignItems:'center',marginTop:'5%'}}>
<View style={{flexDirection:'row'}}>
<Image style={{width:30,height:30,margin:15}} source={require('../resim/first.png')}></Image>
<Image style={{width:30,height:30,margin:15}} source={require('../resim/google.png')}></Image>
<Image style={{width:30,height:30,margin:15}} source={require('../resim/twitter.png')}></Image>
</View>
<Text style={{marginTop:'5%'}}>Create an account</Text>
<Image style={{width:20,height:20,marginTop:40}} source={require('../resim/tr.png')}></Image>
</View>


        </View>

);
}
}
