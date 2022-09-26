import { commonStyles } from "../../styles/commonStyles";

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

export default function Subscribe({ navigation }) {
  function navigateToHome() {
    console.log("Going from Subscribe to Home");
    navigation.navigate("Home");
  }

  function navigateToAdress() {
    console.log("Going from Subscribe to Adress");
    navigation.navigate("Adress");
  }

  return (
    <SafeAreaView style={commonStyles.container}>
      <StatusBar
        style="auto"
        backgroundColor={"#399B53"}
        barStyle={"default"}
      />

      <Text style={commonStyles.textHeader}>Abra sua conta!</Text>

      <ScrollView>
        <Text style={commonStyles.inputLabel}>Nome Completo</Text>
        <TextInput
          placeholder="Nome Completo"
          placeholderTextColor={"#399B53"}
          style={commonStyles.input}
          keyboardType={"default"}
          maxLength={40}
          autoCapitalize={"words"}
        />

        <Text style={commonStyles.inputLabel}>Telefone</Text>
        <TextInput
          placeholder="Telefone"
          placeholderTextColor={"#399B53"}
          style={commonStyles.input}
          keyboardType="numeric"
          maxLength={15}
        />

        <Text style={commonStyles.inputLabel}>Email</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor={"#399B53"}
          style={commonStyles.input}
          keyboardType="email-address"
          maxLength={30}
        />

        <Text style={commonStyles.inputLabel}>Número do Documento</Text>
        <TextInput
          placeholder="Nº do RG"
          placeholderTextColor={"#399B53"}
          style={commonStyles.input}
          keyboardType="numeric"
          maxLength={20}
        />
        <Text style={commonStyles.inputLabel}>Número do CPF</Text>
        <TextInput
          placeholder="CPF"
          placeholderTextColor={"#399B53"}
          style={commonStyles.input}
          keyboardType="numeric"
          maxLength={11}
        />

        <Text style={commonStyles.inputLabel}>Data de Nascimento</Text>
        <TextInput
          placeholder="Data de Nascimento"
          placeholderTextColor={"#399B53"}
          style={commonStyles.input}
          keyboardType="number-pad"
          maxLength={10}
        />

        <Text style={commonStyles.inputLabel}>Insira uma Senha</Text>
        <TextInput
          placeholder="Senha"
          placeholderTextColor={"#399B53"}
          style={commonStyles.input}
          secureTextEntry={true}
          maxLength={40}
        />

        {/* **************************** BUTTONS  ************************** */}
        <View style={commonStyles.divButtons}>
          <TouchableOpacity
            style={{
              ...commonStyles.button,
              backgroundColor: "#FFF",
              borderColor: "#399B53",
            }}
            activeOpacity={0.6}
            onPress={navigateToHome}
          >
            <Text style={{ ...commonStyles.textButton, color: "#399B53" }}>
              Voltar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ ...commonStyles.button, borderColor: "#FFF" }}
            activeOpacity={0.4}
          >
            <Text style={commonStyles.textButton} onPress={navigateToAdress}>
              Continuar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
