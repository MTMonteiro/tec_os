// import React in our code
import React from "react";

// import all the components we are going to use
import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
//import Card
import { Card } from "react-native-paper";
import CardOs from "../components/CardOs";

export default function Oos() {
  return (
    <SafeAreaView style={styles.containerCard}>
      <Text>Minhas OSs</Text>
      <CardOs
        logo="JA"
        title="120 - Exemplo de OS: Manutenção periódica dos ACs da recepção"
        time="Aberta há 2 horas"
        priority="alta"
      />

    <CardOs
        logo="DC"
        title="122 - Mais uma Os"
        time="Aberta há 2 dias"
        priority="media"
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#ecf0f1",
  },
});
