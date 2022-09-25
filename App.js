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

/* import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'expo/vector-icons/MaterialIcon'; */

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

//-------------------PAGES---------------
import Home from "./src/pages/Home/Home";
import Login from "./src/pages/Login/Login";

import Subscribe from "./src/pages/Subscribe/Subscribe";
import Adress from "./src/pages/Adress/Adress";
import PayDate from "./src/pages/PayDate/PayDate";
import Terms from "./src/pages/Terms/Terms";

import Account from "./src/pages/Account/Account";
import PayABill from "./src/pages/PayABill/PayABill";
import BillDetail from "./src/pages/BillDetail/BillDetail";
import PaidBills from "./src/pages/PaidBills/PaidBills";

function AccountProfile() {
  return (
    <Tab.Navigator initialRouteName="Perfil">
      <Tab.Screen
        name="Pagar uma conta"
        component={PayABill}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={{
                uri: "https://seeklogo.com/images/Q/qr-code-logo-27ADB92152-seeklogo.com.png",
              }}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contas Pagas"
        component={PaidBills}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={{ uri: "https://img.icons8.com/ios-glyphs/344/menu.png" }}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={{
                uri: "https://img.icons8.com/external-icongeek26-outline-icongeek26/452/external-profile-bitcoin-icongeek26-outline-icongeek26.png",
              }}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Subscribe"
          component={Subscribe}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Adress"
          component={Adress}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PayDate"
          component={PayDate}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Terms"
          component={Terms}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Account"
          component={AccountProfile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
