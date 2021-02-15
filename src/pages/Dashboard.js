// import React in our code
import React from "react";

// import all the components we are going to use
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from "react-native";

//import Card
import { Card } from "react-native-paper";


import { MaterialCommunityIcons } from '@expo/vector-icons';
import Dadoviews from '../components/Dadoviews';
import Tecnicos from '../components/Tecnicos';
import Prv from '../components/Prv'


export default function Dashboard() {
  return (

    <SafeAreaView style={{ backgroundColor: "#98F", flex: 1, marginTop: 25 }}>
      
     
      <Card style={estiles2.card}>
        <View style={estiles2.header}>
        <MaterialCommunityIcons name="file-table-box-multiple-outline" size={30} color="white" />

          <Text style={estiles2.texto}>Dashboard</Text>
          
        </View>
        </Card>


        <ScrollView>
        <View style={styles.containerCard1}>
        
        <Tecnicos
           nome= "Pe"
          logo="JA"
          title="Técnico: Pedro"
          time="Em visita"
          priority=""
        />
      </View>

      <Text style={{backgroundColor: '#f1f1f1', elevation: 2
    }}>Em endamento:</Text>
      <View style={styles.containerCard}>
        <Dadoviews
          logo="JA"
          title="119 - Visita no IMD"
          time="0:00:55"
          priority=""
          texto= "Os: Troca do roteador"
         
        />

      
      </View>

      <Text style={{backgroundColor: '#f1f1f1'}}>Próximas Visitas:</Text>
    

      <View style={styles.containerCard}>
        <Prv
          logo="JA"
          title="120 -Visita ao PDA"
          time="Aberta há 2 horas"
          priority="media"
          texto="Os: Adicionar agua no  "
        />

        <Prv
          logo="DC"
          title="121 - Visita ao CMI"
          time="Aberta há 2 dias"
          priority="baixa"
          texto="Os: Verificar o motor"
        />
        <Prv 
        logo="JA"
        title="122 - Visita ao Batalhão"
        time= "Aberta há 1 min"
        priority="media"
        texto="Os: verificar o ar"
        />

        <Prv 
        logo="JA"
        title="123 - Visita ao WDC"
        time= "Aberta há 30s"
        priority="media"
        texto="Os: Trocar o cabo"
        />

      </View>
      </ScrollView>
    </SafeAreaView>
    
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
