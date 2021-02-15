// // import React in our code
// import React from "react";

// // import all the components we are going to use
// import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";
// //import Card
// import { Card } from "react-native-paper";
// import CardOs from "../components/CardOs";

// export default function Oos() {
//   return (
//     <SafeAreaView style={styles.containerCard}>
//       <Text>Minhas OSs</Text>
//       <CardOs
//         logo="JA"
//         title="120 - Exemplo de OS: Manutenção periódica dos ACs da recepção"
//         time="Aberta há 2 horas"
//         priority="alta"
//       />

//     <CardOs
//         logo="DC"
//         title="122 - Mais uma Os"
//         time="Aberta há 2 dias"
//         priority="media"
//       />

//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   containerCard: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 10,
//     backgroundColor: "red",
//   },
// });

// import React in our code
import React from "react";

// import all the components we are going to use
import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
//import Card
import { Card } from "react-native-paper";
import CardOs from "../components/CardOs";
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


export default function Oos() {
  return (

<View style={{backgroundColor: '#f1f1f1', flex:1}}>
<Card style={estiles2.card}>
<View style={estiles2.header}>

<Octicons name="file" size={35} color="white" />

  <Text style={estiles2.texto}>
    Minhas Oos
  </Text>
 
</View>
 </Card>

    <SafeAreaView style={styles.containerCard}>
      
      <CardOs
        logo="JA"
        title="120 - Manutenção periódica "
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
    </View>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    justifyContent: "center",
    padding: 10,
    // backgroundColor: "#ecf0f1",
  },
});

const estiles2 = StyleSheet.create({
  header:{
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    position: "relative",
    padding: 6,
    // width: "98.4%",
    // height: "15%",
    backgroundColor: '#6A5ACD',
    // marginTop: 13,
    
    // #6A5ACD
   
    // borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
    flexDirection: 'row'
  },
    texto: {
     color: 'white',
     fontWeight: 'bold',
     marginLeft: 15,
     fontSize: 20
     
    },
    card: {
      justifyContent: "center",
      padding: 0.1,
      // backgroundColor: "white",
    }
    
  
})