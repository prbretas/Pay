import { commonStyles } from "../../styles/commonStyles";
import { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";

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

export default function Adress({ navigation }) {
  const [category, setCategory] = useState("");

  function navigateToSubscribe() {
    console.log("Going from Adress to Subscribe");
    navigation.navigate("Subscribe");
  }

  function navigateToTerms() {
    console.log("Going from Adress to Terms");
    navigation.navigate("Terms");
  }

  function navigateToPayDate() {
    console.log("Going from Adress to PayDate");
    navigation.navigate("PayDate");
  }

  return (
    <SafeAreaView style={commonStyles.container}>
      <StatusBar
        style="auto"
        backgroundColor={"#399B53"}
        barStyle={"default"}
      />

      <Text style={commonStyles.textHeader}>Endereço</Text>

      <ScrollView>
        <Text style={commonStyles.inputLabel}>Insira um CEP</Text>
        <TextInput
          placeholder="CEP"
          placeholderTextColor={"#399B53"}
          style={commonStyles.input}
          keyboardType={"number-pad"}
          maxLength={8}
        />

        <Text style={commonStyles.inputLabel}>Logradouro</Text>
        <TextInput
          placeholder="Rua"
          placeholderTextColor={"#399B53"}
          style={commonStyles.input}
          numberOfLines={1}
          maxLength={40}
        />

        <Text style={commonStyles.inputLabel}>Bairro</Text>
        <TextInput
          placeholder="Bairro"
          placeholderTextColor={"#399B53"}
          style={commonStyles.input}
          numberOfLines={1}
          maxLength={40}
        />

        <Text style={commonStyles.inputLabel}>Cidade</Text>
        <TextInput
          placeholder="Cidade"
          placeholderTextColor={"#399B53"}
          style={commonStyles.input}
          numberOfLines={1}
          maxLength={40}
        />

        <Text style={commonStyles.inputLabel}>Estado</Text>
        <Picker
          selectedValue={category}
          onValueChange={(value) => setCategory(value)}
          style={styles.select}
        >
          <Picker.Item label="Selecione seu Estado" value="" />
          <Picker.Item label="Acre (AC)" value="Acre (AC)" />
          <Picker.Item label="Alagoas (AL)" value="Alagoas (AL)" />
          <Picker.Item label="Amapá (AP)" value="Amapá (AP)" />
          <Picker.Item label="Amazonas (AM)" value="Amazonas (AM)" />
          <Picker.Item label="Bahia (BA)" value="Bahia (BA)" />
          <Picker.Item label="Ceará (CE)" value="Ceará (CE)" />
          <Picker.Item
            label="Distrito Federal (DF)"
            value="Distrito Federal (DF)"
          />
          <Picker.Item
            label="Espírito Santo (ES)"
            value="Espírito Santo (ES)"
          />
          <Picker.Item label="Goiás (GO)" value="Goiás (GO)" />
          <Picker.Item label="Maranhão (MA)" value="Maranhão (MA)" />
          <Picker.Item label="Mato Grosso (MT)" value="Mato Grosso (MT)" />
          <Picker.Item
            label="Mato Grosso do Sul (MS)"
            value="Mato Grosso do Sul (MS)"
          />
          <Picker.Item label="Minas Gerais (MG)" value="Minas Gerais (MG)" />
          <Picker.Item label="Paraíba (PB)" value="Paraíba (PB)" />
          <Picker.Item label="Paraná (PR)" value="Paraná (PR)" />
          <Picker.Item label="Pernambuco (PE)" value="Pernambuco (PE)" />
          <Picker.Item label="Piauí (PI)" value="Piauí (PI)" />
          <Picker.Item
            label="Rio de Janeiro (RJ)"
            value="Rio de Janeiro (RJ)"
          />
          <Picker.Item
            label="Rio Grande do Norte (RN) "
            value="Rio Grande do Norte (RN)"
          />
          <Picker.Item
            label="Rio Grande do Sul (RS)"
            value="Rio Grande do Sul (RS)"
          />
          <Picker.Item label="Rondônia (RO)" value="Rondônia (RO)" />
          <Picker.Item label="Roraima (RR)" value="Roraima (RR)" />
          <Picker.Item
            label="Santa Catarina (SC)"
            value="Santa Catarina (SC)"
          />

          <Picker.Item label="São Paulo (SP)" value="São Paulo (SP)" />
          <Picker.Item label="Sergipe (SE)" value="Sergipe (SE)" />
          <Picker.Item label="Tocantins (TO)" value="Tocantins (TO)" />
        </Picker>

        <Text style={commonStyles.inputLabel}>Número</Text>
        <TextInput
          placeholder="Nº da Residência"
          placeholderTextColor={"#399B53"}
          style={commonStyles.input}
          keyboardType="numeric"
          maxLength={7}
        />
        <Text style={commonStyles.inputLabel}>Complemento</Text>
        <TextInput
          placeholder="Complemento"
          placeholderTextColor={"#399B53"}
          style={commonStyles.input}
          numberOfLines={1}
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
            onPress={navigateToSubscribe}
          >
            <Text style={{ ...commonStyles.textButton, color: "#399B53" }}>
              Voltar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ ...commonStyles.button, borderColor: "#FFF" }}
            activeOpacity={0.4}
            onPress={navigateToPayDate}
          >
            <Text style={{ ...commonStyles.textButton, fontWeight: "bold" }}>
              Continuar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  select: {
    backgroundColor: "#DDD",
    color: "#399B53",
    borderRadius: 40,
    margin: 5,
    width: "90%",
    height: 30,
    alignSelf: "center",
  },
});
