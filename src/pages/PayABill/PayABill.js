import { commonStyles } from "../../styles/commonStyles";

import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState, useEffect } from "react";

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
  Button,
} from "react-native";

export default function PayABill({ navigation }) {

  function navigateToBillDetail() {
    console.log("Going from PayABill to BillDetail");
    navigation.navigate("BillDetail");
  }

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigateToBillDetail()
  };

  if (hasPermission === null) {
    return <Text>Aguardando permissão para utilizar a câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso a câmera</Text>;
  }







  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style="auto"
        backgroundColor={"#399B53"}
        barStyle={"default"}
      />

      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text style={styles.textHeader}>PAGAR CONTA</Text>

        
      </TouchableOpacity>

  
      <BarCodeScanner
      barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
   

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

  Logo: {
    width: 300,
    height: 300,
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
    marginBottom: 20,
    elevation: 10,
  },

  textHeader: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});
