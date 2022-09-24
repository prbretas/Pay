import LottieView from 'lottie-react-native';
import React, { useRef, useEffect } from 'react';

import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Button,
} from "react-native";

export default function Home({ navigation }) {


const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);


function navigateToLogin(){
console.log('Going from HomeScreen  to Login')
navigation.navigate('Login')
  }

function navigateToSubscribe(){
  console.log('Going from HomeScreen to Subscribe')
  navigation.navigate('Subscribe')

}

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style="auto"
        backgroundColor={"#399B53"}
        barStyle={"default"}
      />








{/***************animation container************/}
<View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#399B53',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../../../assets/83234-mobile-payments-lottie-animation.json')}
      />
    </View>


<Text style={styles.logoText}>
  PAY
</Text>

<Text style={{...styles.logoText, fontSize:13, marginTop:-65, color:'#00FF0E'}}>
  MAKIN' MONEY
</Text>

    {/*   <Image source={require('../../../assets/Logo-PNG-green.png')} style={styles.Logo}/>
    */}
        
        <TouchableOpacity style={{...styles.button, backgroundColor:'#FFF', borderColor:'#ccc' }} activeOpacity={0.6} onPress={navigateToSubscribe}>
          <Text style={{...styles.textButton, color:'#399B53'}}>Crie sua conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} activeOpacity={0.6}  onPress={navigateToLogin}>
          <Text style={styles.textButton}>Log In</Text>
        </TouchableOpacity>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#399B53",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },

Logo:{
  width: 300,
  height:300,

},


logoText:{
  fontSize:30,
  fontWeight:'bold',
  color:'white',
  marginTop:-40,
  marginBottom:60,

},
 
  button:{
    width: "70%",
    height: 50,
    backgroundColor: '#2b753d',
    borderRadius: 15,
    borderWidth: 1,
    borderColor:'#FFF',
    borderStyle:'solid',
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 20,
    elevation:10,
  },

  textButton:{
fontSize: 20,
color: '#FFF',
fontWeight:'bold',


  },


//animation
  animationContainer: {
    backgroundColor: '#399B53',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
