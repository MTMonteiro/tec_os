import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Card } from "react-native-paper";

const colorsPriority = {
alta: {color: "#FE2E64", borda: "#FA5882", background: "#F8E0E6" },
media: {color: "#FE2E64", borda: "#FA5882", background: "#F8E0E6" },
baixa: {color: "#FE2E64", borda: "#FA5882", background: "#F8E0E6" },

}
var Acolor
var color
export default function CardOs({ logo, title, time, priority }) {
    Acolor =  colorsPriority[priority]
    color = Acolor.color 

    return (
    <View style={styles.container}>
      <Card>
        <View style={styles.containerFlex}>
          <View style={styles.containerFlexColumn}>
            <View style={styles.logo}>{logo}</View>
          </View>

          <View>
            <Text style={styles.title}>{title}</Text>

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
    backgroundColor: "#ecf0f1",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    padding: 20,
    color: "#58ACFA",
    cursor: "pointer",
  },

  priority: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    paddingHorizontal: 8,
    paddingVertical: 0,
    height: "2.5rem",
    marginLeft: "1rem",
    backgroundColor: "#F8E0E6",
    color: color,
    border: "2px solid #FA5882",
    display: "flex",
    alignItems: "center",
    borderRadius: "15px",
  },

  time: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    paddingHorizontal: 8,
    paddingVertical: 0,
    height: "2.5rem",
    marginLeft: "1rem",
    backgroundColor: "#E0F8F7",
    color: "#00BFFF",
    border: "2px solid #00BFFF",
    display: "flex",
    alignItems: "center",
    borderRadius: "15px",
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
    marginLeft: "2rem",
    // padding: 20,
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    width: "100px",
    height: "100%",
    borderRadius: "50%",
    fontSize: "30px",
  },
});
