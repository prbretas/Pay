

import React, { Component, useEffect } from 'react';
import { useState } from "react";

import { commonStyles } from "../../styles/commonStyles";

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
    <SafeAreaView style={commonStyles.container}>
      <StatusBar
        style="auto"
        backgroundColor={"#399B53"}
        barStyle={"default"}
      />

      <Text style={commonStyles.textHeader}>Data de cobrança</Text>





      <View style={commonStyles.divButtons}>
        <TouchableOpacity
          style={{
            ...commonStyles.button,
            backgroundColor: "#FFF",
            borderColor: "#399B53",
          }}
          activeOpacity={0.6}
          onPress={navigateToSubscribe}
        >
          <Text style={{ ...commonStyles.textButton, color: "#399B53" }}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...commonStyles.button, borderColor: "#FFF" }}
          activeOpacity={0.4}
          onPress={navigateToTerms}
        >
          <Text style={{ ...commonStyles.textButton, fontWeight: "bold" }}>
            Continuar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({


});


