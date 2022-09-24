import SelectDropdown from 'react-native-select-dropdown'
const countries = [
  "Acre (AC)",
  "Alagoas (AL)",
  "Amapá (AP)",
  "Amazonas (AM)",
  "Bahia (BA)",
  "Ceará (CE)",
  "Distrito Federal (DF)",
  "Espírito Santo (ES)",
  "Goiás (GO)",
  "Maranhão (MA)",
  "Mato Grosso (MT)",
  "Mato Grosso do Sul(MS) ",
  "Minas Gerais (MG)",
  "Pará (PA)",
  "Paraíba (PB)",
  "Paraná (PR)",
  "Pernambuco (PE)",
  "Piauí (PI)",
  "Rio de Janeiro (RJ)",
  "Rio Grande do Norte (RN)",
  "Rio Grande do Sul (RS)",
  "Rondônia (RO)",
  "Roraima (RR)",
  "Santa Catarina (SC)",
  "São Paulo (SP)",
  "Sergipe (SE)",
  "Tocantins (TO)",
]

import { useState } from "react";





import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function Adress({navigation}) {


  function navigateToSubscribe(){

    console.log('Going from Adress to Subscribe')
    navigation.navigate('Subscribe')
      }
    
    function navigateToTerms(){
      console.log('Going from Adress to Terms')
      navigation.navigate('Terms')
    
    }

    function navigateToPayDate(){
      console.log('Going from Adress to PayDate')
      navigation.navigate('PayDate')
    
    }



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style="auto"
        backgroundColor={"#399B53"}
        barStyle={"default"}
      />

      <Text style={styles.textAccount}>Endereço</Text>


<ScrollView>



      <Text style={styles.inputLabel}>Insira um CEP</Text>
      <TextInput
        placeholder="CEP"
        placeholderTextColor={"#399B53"}
        style={styles.input}
        keyboardType={"number-pad"}
        maxLength={8}
      />

<Text style={styles.inputLabel}>Logradouro</Text>
      <TextInput
        placeholder="Rua"
        placeholderTextColor={"#399B53"}
        style={styles.input}
        numberOfLines={1}
        maxLength={40}
      />



<Text style={styles.inputLabel}>Bairro</Text>
      <TextInput
        placeholder="Bairro"
        placeholderTextColor={"#399B53"}
        style={styles.input}
        numberOfLines={1}
        maxLength={40}

      />

<Text style={styles.inputLabel}>Cidade</Text>
      <TextInput
        placeholder="Cidade"
        placeholderTextColor={"#399B53"}
        style={styles.input}
        numberOfLines={1}
        maxLength={40}
      />











<Text style={styles.inputLabel}>Estado</Text>
      <TextInput
        placeholder="Estado"
        placeholderTextColor={"#399B53"}
        style={styles.input}
        numberOfLines={1}
        maxLength={40}
      />

<Text style={styles.inputLabel}>Número</Text>
      <TextInput
        placeholder="Nº da Residência"
        placeholderTextColor={"#399B53"}
        style={styles.input}
        keyboardType="numeric"
        maxLength={7}
      />
  <Text style={styles.inputLabel}>Complemento</Text>
      <TextInput
        placeholder="Complemento"
        placeholderTextColor={"#399B53"}
        style={styles.input}
        numberOfLines={1}
        maxLength={40}
        
      />



      <View style={styles.divButtons}>
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: "#FFF",
            borderColor: "#399B53",
          }}
          activeOpacity={0.6}
          onPress={navigateToSubscribe}
        >
          <Text style={{...styles.textButton, color: "#399B53"}}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.button, borderColor: "#FFF" }}
          activeOpacity={0.4}
          onPress={navigateToPayDate}
        >
          <Text style={{ ...styles.textButton, fontWeight: "bold" }}>
            Continuar
          </Text>
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

  Logo: {
    width: 200,
    height: 200,
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
    color: "#399B53",
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DDD",
    borderStyle: "solid",
    paddingLeft: 15,
    alignSelf: "center",
    marginBottom: 15,
    elevation: 5,
  },

  inputLabel:{
    alignSelf:'flex-start',
    marginHorizontal: 25,
    marginBottom:5,
    color:'#399B53',
      },


      dropdown:{
        width: "90%",
        backgroundColor: 'red',
        alignSelf:'center',

      },
    

  divButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
       marginBottom: 20,
  },

  button: {
    width: "40%",
    height: 50,
    backgroundColor: "#399B53",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#FFF",
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    marginHorizontal: 15,
    marginTop: 20,
  },
  textButton: {
    fontSize: 16,
    color: "#FFF",
  },
});
