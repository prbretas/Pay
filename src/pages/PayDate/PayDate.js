import { useState, useEffect } from "react";

import { commonStyles } from "../../styles/commonStyles";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

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
} from "react-native";

export default function PayDate({ navigation }) {
  const [item, setItem] = useState("");
  const [date, setDate] = useState("");

  function navigateToSubscribe() {
    console.log("Going from PayDate to Adress");
    navigation.navigate("Adress");
  }

  function navigateToTerms() {
    console.log("Going from PayDate to Terms");
    navigation.navigate("Terms");
  }

  return (
    <SafeAreaView style={commonStyles.container}>
      <StatusBar
        style="auto"
        backgroundColor={"#399B53"}
        barStyle={"default"}
      />

      <Text style={commonStyles.textHeader}>Data de cobrança</Text>
      <Text style={styles.textCalendar}>Selecione um dia</Text>

      <Calendar
        style={styles.calendarStyle}
        onDayPress={(day) => {
          setItem(day.dateString);
          console.log(day);
        }}
        hideExtraDays={true}
        minDate={"2022-09-25"}
        // Collection of dates that have to be marked. Default = {}
        markedDates={{
          [item]: {
            selected: true,
            marked: true,
            selectedColor: "red",
            dotColor: "#FFF",
          },
        }}
        theme={{
          calendarBackground: "#399B53",
          selectedDayTextColor: "#FFF",
          todayTextColor: "#00FF0E",
          dayTextColor: "#FFF",
          arrowColor: "#00FF0E",
          monthTextColor: "#FFF",
          textDayFontWeight: "400",
        }}
      />

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
          <Text style={{ ...commonStyles.textButton, color: "#399B53" }}>
            Voltar
          </Text>
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
  textCalendar: {
    color: "#000",
    fontSize: 18,
    marginBottom: 10,
  },
  calendarStyle: {
    backgroundColor: "#399B53",
    height: 400,
    width: 300,
    borderRadius: 20,
    padding: 10,
    marginBottom: 50,
  },
});
