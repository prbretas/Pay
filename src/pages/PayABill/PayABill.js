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
  
  export default function PayABill({navigation}) {
  

  
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
  
  Logo:{
    width: 300,
    height:300,
  
  },
   
    button:{
      width: "70%",
      height: 50,
      backgroundColor: '#2b753d',
      borderRadius: 15,
      borderWidth: 1,
      borderColor:'#FFF',
      borderStyle:'solid',
      alignItems:'center',
      justifyContent:'center',
      marginBottom: 20,
      elevation:10,
    },
  
    textHeader: {
      fontSize: 20,
      color: "#FFF",
      fontWeight: "bold",
      textAlign:'center',
    },
  });
  