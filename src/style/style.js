import {StyleSheet,} from 'react-native'
const styles=StyleSheet.create({
     firstText:{
         fontSize:25,
         marginLeft:'5%',
         marginTop:'5%',
     },
     timerText:{
       marginTop:'10%',
       fontSize:15,
       marginLeft:'5%',
     }, correctText:{
        marginTop:'10%',
        fontSize:15,
        marginLeft:'5%',
      },
      inCorrectText:{
        marginTop:'10%',
        fontSize:15,
        marginLeft:'5%',
      },
     guesText:{
       fontSize:15,
     },
     guesText2:{
       fontSize:15,
     },
     guesText3:{
       fontSize:15,
    },
     guesText4:{
       fontSize:15,
      },
     guesText5:{
       fontSize:15,
      },

     startGameTouchableView:{
        borderColor:'black',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        left:'15%',
        width:'25%',
        top:'75%'

     },
     startText:{
      textAlign:'center',

     },
     stopGameTouchableView:{
      borderColor:'black',
      borderWidth:1,
      alignItems:'center',
      justifyContent:'center',
      position:'absolute',
      right:'15%',
      width:'25%',
      top:'75%'


   },
    textViewStyle:{
      position:'absolute',
      flex:1,
     // borderColor:'black',
     // borderWidth:2,
      top:'40%',
      width:'40%',
      left:'30%',
      height:'30%',
      alignItems:'center',
    },
    googleimage:{
      width:80,
      height:'75%',
      marginLeft:9

    },
    facebookimage:{
      width:80,
      height:'75%',
      marginLeft:45

    },
    turkiyeimage:{
      width:80,
      height:'73%',
      marginLeft:45
    },
    CevapA:{
      marginLeft:10,
      borderWidth:2,  // kenar kalınlıkları
      borderColor:'gray', // kenar kalınlığı rengi
      alignItems:'center',  // itemleri ortala
      justifyContent:'center',  // itemleri ortala
      width:50,    // genişlik 100px
      height:50, // uzunluk 100px
      backgroundColor:'#fff', // arkafon rengi fff(beyaz)
      borderRadius:25,  // radius 50
    },
    CevapB:{
      marginLeft:10,
      borderWidth:2,  // kenar kalınlıkları
      borderColor:'gray', // kenar kalınlığı rengi
      alignItems:'center',  // itemleri ortala
      justifyContent:'center',  // itemleri ortala
      width:50,    // genişlik 100px
      height:50, // uzunluk 100px
      backgroundColor:'gray', // arkafon rengi fff(beyaz)
      borderRadius:25,  // radius 50
    }

});
module.exports=styles;
