// import React in our code
import React from "react";

// import all the components we are going to use
import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
//import Card
import { Card } from "react-native-paper";
import CardOs from "../components/CardOs";
import { Ionicons } from "@expo/vector-icons";

export default function Oos() {
  return (
    <View style={{ backgroundColor: "#98F", flex: 1 }}>
      <Card style={estiles2.card}>
        <View style={estiles2.header}>
          <Ionicons name="menu" size={40} color="white" />

          <Text style={estiles2.texto}>Dashboard</Text>
        </View>
        <SafeAreaView style={styles.containerCard1}>
        <CardOs
          logo="JA"
          title="Técnico: Pedro"
          time="Em visita"
          priority=""
        />
      </SafeAreaView>

      <Text style={{backgroundColor: '#98F',
    }}>Em endamento:</Text>
      <SafeAreaView style={styles.containerCard}>
        <CardOs
          logo="JA"
          title="119 - Visita no IMD"
          time="0:00:55"
          priority=""
          texto= "Os: Troca do roteador"
         
        />

      
      </SafeAreaView>

      <Text style={{backgroundColor: '#98F'}}>Próximas Visitas:</Text>
      
      
      
      </Card>

      <SafeAreaView style={styles.containerCard}>
        <CardOs
          logo="JA"
          title="120 -Visita ao PDA"
          time="Aberta há 2 horas"
          priority="media"
          texto="Os: Adicionar agua no  "
        />

        <CardOs
          logo="DC"
          title="121 - Visita ao CMI"
          time="Aberta há 2 dias"
          priority="baixa"
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    justifyContent: "center",
    padding: 0,
     backgroundColor: "#98F",
  },
  containerCard1: {
    justifyContent: "center",
    padding: 0,
     backgroundColor: "#98F",
       
    }
});

const estiles2 = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    position: "relative",
    padding: 7,
    // width: "98.4%",
    // height: "15%",
    backgroundColor: "#6A5ACD",
    // marginTop: 13,

    // #6A5ACD

    // borderWidth: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "flex-start",
    flexDirection: "row",
  },
  texto: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 15,
    fontSize: 20,
  },
  card: {
    justifyContent: "center",
    padding: 0.1,
    // backgroundColor: "white",
  },
});
