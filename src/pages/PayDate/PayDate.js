

import React, { Component, useEffect } from 'react';
import { useState } from "react";


import { Calendar } from 'react-native-calendars'

import CalendarPicker from 'react-native-calendar-picker';


import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar,
  SafeAreaView,
  Picker,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Button,
  Platform,
} from "react-native";




export default function PayDate({navigation}) {


 
  function navigateToSubscribe(){
    console.log('Going from PayDate to Adress')
    navigation.navigate('Adress')
      }
    
    function navigateToTerms(){
      console.log('Going from PayDate to Terms')
      navigation.navigate('Terms')
    
    }




  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style="auto"
        backgroundColor={"#399B53"}
        barStyle={"default"}
      />

      <Text style={styles.textAccount}>Data de cobrança</Text>





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
          <Text style={{ ...styles.textButton, color: "#399B53" }}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.button, borderColor: "#FFF" }}
          activeOpacity={0.4}
          onPress={navigateToTerms}
        >
          <Text style={{ ...styles.textButton, fontWeight: "bold" }}>
            Continuar
          </Text>
        </TouchableOpacity>
      </View>
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

      },
    

  divButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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


