import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import Oos from './src/pages/Oos'
import Dashboard from './src/pages/Dashboard'
import Chat from './src/pages/Chat'
import Qrcode from './src/pages/Qrcode'
import Visitas from "./src/pages/Visitas";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer style={{backgroundColor: '#6A5ACD'}}>
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="white"
        barStyle={{ backgroundColor: "#6A5ACD" }}
      >
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color }) => (
              <Ionicons name="chatbubbles-outline" size={26} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: "Dashboard",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="dashboard" size={26} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Visitas"
          component={Visitas}
          options={{
            tabBarLabel: "Visitas",
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-home" size={26} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Oos"
          component={Oos}
          options={{
            tabBarLabel: "Oos",
            tabBarIcon: ({ color }) => (
              <AntDesign name="profile" size={24} color={color} />
            ),
          }}
        />


<Tab.Screen
          name="Qrcode"
          component={Qrcode}
          options={{
            tabBarLabel: "Qrcode",
            tabBarIcon: ({ color }) => (
              <AntDesign name="qrcode" size={24} color={color} />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
