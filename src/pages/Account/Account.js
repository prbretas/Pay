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

export default function Account({ navigation }) {
  function navigateToLogin() {
    console.log("Going from HomeScreen  to Login");
    navigation.navigate("Login");
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style="auto"
        backgroundColor={"#399B53"}
        barStyle={"default"}
      />

      <View style={styles.header}>
        <Text style={styles.textHeader}>PERFIL</Text>
        <Text style={styles.textHeader}>Dados da Conta</Text>
      </View>

      <View style={styles.divProfile}>
        <Text style={styles.ProfileName}>#user9774410</Text>

        <TouchableOpacity activeOpacity={0.6}>
          <Image
            source={require("../../../assets/Logo-PNG.png")}
            style={styles.ProfileImg}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.divAccountDetails}>
        <Text style={{ ...styles.textAccountDetails, color: "#FFF" }}>
          Nome Completo: ___________
        </Text>
        <Text style={{ ...styles.textAccountDetails, color: "#FFF" }}>
          CPF: ***.519.155-**
        </Text>
        <Text style={{ ...styles.textAccountDetails, color: "#FFF" }}>
          RG: 999.5588.1525-31
        </Text>
        <Text style={{ ...styles.textAccountDetails, color: "#FFF" }}>
          Telefone:+55 99999-8888
        </Text>
        <Text style={{ ...styles.textAccountDetails, color: "#FFF" }}>
          Nº da Conta: 1188224
        </Text>
      </View>

      <TouchableOpacity
        style={{
          ...styles.button,
          backgroundColor: "#FFF",
          borderColor: "#ccc",
        }}
        activeOpacity={0.6}
        onPress={navigateToLogin}
      >
        <Text style={{ ...styles.textButton, color: "#399B53" }}>
          Sair da Conta
        </Text>
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

  header: {
    marginVertical: 30,
  },

  textHeader: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },

  divProfile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    width: "80%",
  },

  ProfileName: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },

  ProfileImg: {
    width: 80,
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 150,
  },

  divAccountDetails: {
    padding: 10,
    width: "80%",
    minHeight: 200,
  },

  button: {
    width: "70%",
    height: 50,
    backgroundColor: "#2b753d",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#FFF",
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 20,
    elevation: 10,
  },

  textButton: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});
