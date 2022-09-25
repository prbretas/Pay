import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },

  text: {
    color: "green",
    fontSize: 20,
  },

  textHeader:{
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

  inputLabel: {
    alignSelf: "flex-start",
    marginHorizontal: 25,
    marginBottom: 5,
    color: "#399B53",
  },

  divButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
       marginBottom: 20,
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
