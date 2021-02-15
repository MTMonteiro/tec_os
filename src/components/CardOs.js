import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';

const colorsPriority = {
alta: {color: "#FE2E64", borda: "#FA5882", background: "#F8E0E6" },
media: {color: "#FE2E64", borda: "#FA5882", background: "#F8E0E6" },
baixa: {color: "#FE2E64", borda: "#FA5882", background: "#F8E0E6" },
"": {color: "#F8E0E6", borda: "#F8E0E6", background: "#F8E0E6"},
}
var Acolor
var color
export default function CardOs({ logo, title, time, priority, texto, icon }) {
    Acolor =  colorsPriority[priority]
    color = Acolor.color 
   icon = <AntDesign name="right" size={30} color="black" />
    return (
    <View style={styles.container}>
      <Card>
        <View style={styles.containerFlex}>
          <View style={styles.containerFlexColumn}>
            <View style={styles.logo}> 
            <Text >la</Text>
            </View>
          </View>

          <View>
            <Text style={styles.title}>{title}</Text>

          <View style={{alignItems: 'stretch',
           flexDirection: 'row'
        }}>

          
            <View style={styles.title2}>
              
              <TouchableOpacity>
              {icon}
              </TouchableOpacity>
              
              
              </View>
            <View>
              <Text>
                {texto}
              </Text>
            </View>


             </View>


            <View style={styles.containerFlex2}>
              <Text style={styles.priority}>{priority}</Text>
              <Text style={styles.time}>
                <MaterialIcons name="watch-later" size={24} color="#00BFFF" />
                {time}
              </Text>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#f1f1f1",
  },
  title2: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
    padding: 0,
    color: "#58ACFA",
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
    // alignContent: 'flex-end',
    // flexDirection: 'row',
    right: -237

  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
    padding: 20,
    color: "#58ACFA",
    // cursor: "pointer"
  },

  priority: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    paddingHorizontal: 8,
    paddingVertical: 0,
    height: 30,
    marginLeft: 6,
    backgroundColor: "#F8E0E6",
    color: color,
    // border: "2px solid #FA5882",
    borderWidth: 2,
    borderColor: "#FA5882",
    display: "flex",
    alignItems: "center",
    borderRadius: 15,
  },

  time: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    paddingHorizontal: 8,
    paddingVertical: 0,
    height: 30,
    marginLeft: 4,
    backgroundColor: "#E0F8F7",
    color: "#00BFFF",
    // border: "2px solid #00BFFF",
    borderWidth: 2,
    borderColor: "#00BFFF",
    display: "flex",
    alignItems: "center",
    borderRadius: 15,
  },

  containerFlex: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    position: "relative",
    padding: 20,
    // justifyContent: "center"
  },
  containerFlex2: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    position: "relative",
    // justifyContent: "center"
  },
  containerFlexColumn: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    position: "relative",
    justifyContent: "center",
    marginLeft: 4,
    // padding: 20,
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BCA9F5",
    width: 80,
    height: 80,
    borderRadius: 50,
    fontSize: 30,
  },
});
