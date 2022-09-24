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
} from "react-native";

export default function Home({navigation}) {



function navigateToAccount(){
      console.log('Going from Login to Account')
      navigation.navigate('Account')
      
    }


    function navigateToSubscribe(){
      console.log('Going from Login to Subscribe')
      navigation.navigate('Subscribe')
        }
      



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style="auto"
        backgroundColor={"#399B53"}
        barStyle={"default"}
      />


<Image source={require('../../../assets/Logo-PNG.png')} style={styles.Logo}/>
           
   
        <TextInput
          placeholder="CPF"
          placeholderTextColor={"#399B53"}
          style={styles.input}
          keyboardType='numeric'
          maxLength={11}

        />

<TextInput
          placeholder="Senha"
          placeholderTextColor={"#399B53"}
          style={styles.input}
          secureTextEntry={true}
          maxLength={20}
        />

        <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={navigateToAccount}
        >
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.button2}
        activeOpacity={0.4}
        onPress={navigateToSubscribe}
        >
          <Text style={styles.textButton2}>Abra sua conta agora</Text>
        </TouchableOpacity>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },

  Logo:{
    width: 350,
    height:350,
  
  },
   

   input: {
    width: "80%",
    height: 40,
    backgroundColor: "#FFF",
    color:'#399B53',
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor:'#DDD',
    borderStyle:'solid',
    paddingLeft:15,
    alignSelf:'center',
    marginBottom: 20,
    elevation:10,
  },

  button:{
    width: "70%",
    height: 50,
    backgroundColor: '#399B53',
    borderRadius: 15,
    borderWidth: 1,
    borderColor:'#FFF',
    borderStyle:'solid',
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 10,
    elevation:10,
  },
  textButton:{
    fontSize: 20,
    fontWeight:'bold',
    color: '#FFF',
    
    },

  button2:{
    width: "70%",
    height: 20,
     alignItems:'center',
    justifyContent:'center',
    marginVertical:10,
   
  },


  textButton2:{
    fontSize: 16,
    color: '#AAA',
    textDecorationLine:'underline'
   },
});
