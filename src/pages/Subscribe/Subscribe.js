
import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function Subscribe({navigation}) {



  function navigateToHome(){

    console.log('Going from Subscribe to Home')
    navigation.navigate('Home')
      }
    
    function navigateToAdress(){
      console.log('Going from Subscribe to Adress')
      navigation.navigate('Adress')
    
    }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style="auto"
        backgroundColor={"#399B53"}
        barStyle={"default"}
      />

<Text style={styles.textAccount}>Abra sua conta!</Text>

<ScrollView>





<Text style={styles.inputLabel}>Nome Completo</Text>
<TextInput
          placeholder="Nome Completo"
          placeholderTextColor={"#399B53"}
          style={styles.input}
          keyboardType={'default'}
          maxLength={40}
          
        />


<Text style={styles.inputLabel}>Telefone</Text>
<TextInput
          placeholder="Telefone"
          placeholderTextColor={"#399B53"}
          style={styles.input}
          keyboardType='numeric'
          maxLength={15}

        />


<Text style={styles.inputLabel}>Email</Text>
<TextInput
          placeholder="Email"
          placeholderTextColor={"#399B53"}
          style={styles.input}
          keyboardType='email-address'
          maxLength={30}

        />
   
   <Text style={styles.inputLabel}>Número do Documento</Text>
        <TextInput
          placeholder="Nº do RG"
          placeholderTextColor={"#399B53"}
          style={styles.input}
          keyboardType='numeric'
          maxLength={20}

        />
<Text style={styles.inputLabel}>Número do CPF</Text>
<TextInput
          placeholder="CPF"
          placeholderTextColor={"#399B53"}
          style={styles.input}
          keyboardType='numeric'
          maxLength={11}

        />

<Text style={styles.inputLabel}>Insira uma Senha</Text>
<TextInput
          placeholder="Senha"
          placeholderTextColor={"#399B53"}
          style={styles.input}
          secureTextEntry={true}
          maxLength={40}
        />

<Text style={styles.inputLabel}>Repita a Senha</Text>
<TextInput
          placeholder="Senha"
          placeholderTextColor={"#399B53"}
          style={styles.input}
          secureTextEntry={true}
          maxLength={40}
        />


<View style={styles.divButtons}>
   <TouchableOpacity style={{...styles.button,backgroundColor:'#FFF', borderColor:'#399B53'}} activeOpacity={0.6} onPress={navigateToHome}>
          <Text style={{...styles.textButton, color:'#399B53'}}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{...styles.button, borderColor:'#FFF'}} activeOpacity={0.4}>
          <Text style={styles.textButton} onPress={navigateToAdress}>Continuar</Text>
        </TouchableOpacity>

</View>
       

</ScrollView>
      
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
    width: 200,
    height:200,
  
  },

  textAccount:{
    fontSize: 26,
    color:'#399B53',
    marginTop: 20,
    marginBottom: 25,
    fontWeight:'bold',
    },

   input: {
    width: "90%",
    height: 50,
    backgroundColor: "#FFF",
    color:'#399B53',
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor:'#DDD',
    borderStyle:'solid',
    paddingLeft:15,
    alignSelf:'center',
    marginBottom: 15,
    elevation:5,
  },

  inputLabel:{
alignSelf:'flex-start',
marginHorizontal: 25,
marginBottom:5,
color:'#399B53',
  },

  divButtons:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical: 20,
  },

  button:{
    width: "40%",
    height: 50,
    backgroundColor: '#399B53',
    borderRadius: 15,
    borderWidth: 1,
    borderColor:'#FFF',
    borderStyle:'solid',
    alignItems:'center',
    justifyContent:'center',
    elevation:10,
    marginHorizontal: 15,
  
    
  },
  textButton:{
    fontSize: 16,
    color: '#FFF',
    fontWeight:'bold',
    
    },

});
