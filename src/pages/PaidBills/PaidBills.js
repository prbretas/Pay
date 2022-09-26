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

export default function PaidBills({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style="auto"
        backgroundColor={"#399B53"}
        barStyle={"default"}
      />
      <Text style={styles.textHeader}>CONTAS PAGAS</Text>

      <ScrollView style={styles.divBills}>
        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
          <View>
            <Text style={styles.infoCard}>Data: 20/03/2022</Text>

            <Text
              style={{
                ...styles.infoCard,
                color: "orange",
                fontWeight: "bold",
              }}
            >
              MERCADO CENTRAL
            </Text>

            <Text style={styles.infoCard}>R$ 48,51</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
          <View>
            <Text style={styles.infoCard}>Data: 20/03/2022</Text>

            <Text
              style={{
                ...styles.infoCard,
                color: "orange",
                fontWeight: "bold",
              }}
            >
              MERCADO CENTRAL
            </Text>

            <Text style={styles.infoCard}>R$ 17,25</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
          <View>
            <Text style={styles.infoCard}>Data: 21/03/2022</Text>

            <Text
              style={{
                ...styles.infoCard,
                color: "orange",
                fontWeight: "bold",
              }}
            >
              MERCADO CENTRAL
            </Text>

            <Text style={styles.infoCard}>R$ 14,87</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
          <View>
            <Text style={styles.infoCard}>Data: 21/03/2022</Text>

            <Text
              style={{
                ...styles.infoCard,
                color: "orange",
                fontWeight: "bold",
              }}
            >
              MERCADO CENTRAL
            </Text>

            <Text style={styles.infoCard}>R$ 14,87</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
          <View>
            <Text style={styles.infoCard}>Data: 21/03/2022</Text>

            <Text
              style={{
                ...styles.infoCard,
                color: "orange",
                fontWeight: "bold",
              }}
            >
              MERCADO CENTRAL
            </Text>

            <Text style={styles.infoCard}>R$ 14,87</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
          <View>
            <Text style={styles.infoCard}>Data: 21/03/2022</Text>

            <Text
              style={{
                ...styles.infoCard,
                color: "orange",
                fontWeight: "bold",
              }}
            >
              MERCADO CENTRAL
            </Text>

            <Text style={styles.infoCard}>R$ 14,87</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
          <View>
            <Text style={styles.infoCard}>Data: 22/03/2022</Text>

            <Text
              style={{
                ...styles.infoCard,
                color: "orange",
                fontWeight: "bold",
              }}
            >
              MERCADO CENTRAL
            </Text>

            <Text style={styles.infoCard}>R$ 256,23</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
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

  textHeader: {
    fontSize: 20,
    marginVertical: 20,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },

  divBills: {
    width: "90%",
  },

  card: {
    backgroundColor: "#FFF",
    width: "95%",
    minHeight: 100,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginVertical: 10,
    elevation: 10,
    alignSelf: "center",
  },

  infoCard: {
    fontSize: 15,
  },
});
