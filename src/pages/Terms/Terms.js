import { commonStyles } from "../../styles/commonStyles";
import React, { useState } from "react";

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
  Switch,
} from "react-native";

export default function Terms({ navigation }) {
  function navigateToAdress() {
    console.log("Going from Terms to PayDate");
    navigation.navigate("PayDate");
  }

  function navigateToLogin() {
    console.log("Going from Terms to Home");
    navigation.navigate("Home");
    alert("Conta criada com Sucesso!");
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ScrollView>
      <View style={commonStyles.container}>
        <StatusBar
          style="auto"
          backgroundColor={"#399B53"}
          barStyle={"default"}
        />

        <View>
          <Text style={{ ...commonStyles.textHeader, alignSelf: "center" }}>
            Termos de Uso
          </Text>

          <Text style={styles.textTerms}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            mauris nibh, maximus non arcu finibus, cursus tempus lectus. Nullam
            vel nunc vitae ante egestas efficitur. Sed scelerisque, elit ac
            pulvinar dictum, tortor urna tempor augue, nec auctor purus justo in
            magna. Duis at orci sit amet augue condimentum tincidunt. Praesent
            rhoncus leo vel venenatis cursus. Nunc finibus interdum nibh vitae
            scelerisque. In et turpis odio. Cras feugiat iaculis nunc eget
            dapibus. Quisque mollis orci scelerisque venenatis mollis. Cras nibh
            dolor, dapibus non porttitor nec, pulvinar a augue. Nam magna erat,
            dignissim eu sapien non, sollicitudin lobortis ipsum. Proin vehicula
            facilisis quam, accumsan elementum erat bibendum in. Nam nisi nunc,
            fermentum eget scelerisque non, posuere sit amet arcu. Duis
            sagittis, tortor sit amet convallis fermentum, libero purus interdum
            ligula, vitae eleifend enim libero quis sapien. Sed feugiat ante nec
            neque bibendum, nec facilisis tellus mattis.
          </Text>

          <Text style={styles.textTerms}>
            Quisque vitae nulla gravida, maximus sem nec, feugiat ipsum. Nam
            vitae ipsum imperdiet, feugiat ante sed, sagittis sem. Etiam
            sagittis maximus bibendum. Proin malesuada mollis pulvinar.
            Phasellus quis malesuada libero. Aenean sed dictum purus. Sed vel
            urna enim.
          </Text>

          <Text style={styles.textTerms}>
            Aenean interdum felis id arcu porttitor dictum ut eu lectus.
            Vestibulum mauris nisl, fermentum quis lobortis et, aliquet eu
            felis. Mauris pellentesque nisi sem, id malesuada sapien maximus
            quis. Phasellus molestie ipsum eget eleifend imperdiet. Mauris ac
            augue consectetur, fermentum odio non, consequat tellus. Sed aliquet
            molestie semper. Fusce accumsan risus ut ante vestibulum eleifend.
            Integer eget tincidunt lacus, ut porta nunc. Curabitur eu suscipit
            urna, ac pellentesque lorem. Nulla posuere, leo et mollis eleifend,
            ante risus vulputate risus, id aliquam neque lectus sit amet sapien.
            Vivamus lacinia ante nec enim ultricies, nec convallis est bibendum.
            Vestibulum aliquet rhoncus suscipit.
          </Text>

          <Text style={styles.textTerms}>
            Curabitur tempor auctor mi, a gravida nunc ultricies at. Praesent
            iaculis iaculis velit a venenatis. Donec velit dolor, condimentum ut
            nunc in, mattis venenatis erat. Donec ut sem tincidunt orci rhoncus
            gravida. Donec laoreet massa sed lorem auctor, sed sollicitudin urna
            tempus. Quisque id rutrum felis. Suspendisse varius ultrices
            aliquet. Praesent efficitur ante ut varius aliquet. Curabitur
            lobortis lectus vitae iaculis bibendum. Donec luctus arcu velit,
            varius tincidunt nibh porttitor at. Duis pellentesque turpis dapibus
            efficitur volutpat. Fusce metus sem, dignissim vitae venenatis quis,
            fringilla et mi.
          </Text>
        </View>

        <View style={styles.divSwitch}>
          <Text style={{ marginRight: 10, fontSize: 16 }}>
            Aceito os Termos
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#B1D7B4" }}
            thumbColor={isEnabled ? "#399B53" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        {/* **************************** BUTTONS  ************************** */}
        <View style={commonStyles.divButtons}>
          <TouchableOpacity
            style={{
              ...commonStyles.button,
              backgroundColor: "#FFF",
              borderColor: "#399B53",
            }}
            activeOpacity={0.6}
            onPress={navigateToAdress}
          >
            <Text style={{ ...commonStyles.textButton, color: "#399B53" }}>
              Voltar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ ...commonStyles.button, borderColor: "#FFF" }}
            activeOpacity={0.4}
            onPress={navigateToLogin}
          >
            <Text style={{ ...commonStyles.textButton, fontWeight: "bold" }}>
              Aceitar os Termos
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cards: {
    width: "80%",
    height: "90%",
    elevation: 10,
    backgroundColor: "#FFF",
  },

  textTerms: {
    fontSize: 18,
    color: "#000",
    marginBottom: 20,
    marginHorizontal: 20,
    textAlign: "justify",
  },

  divSwitch: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
