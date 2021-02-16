import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Alert,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Card } from "react-native-paper";
import * as Location from "expo-location";
import { AntDesign } from '@expo/vector-icons';

export default function Visitas() {
  const [location, setLocation] = useState({coords: {latitude: -22.9000000, longitude: -42.9000000}});
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // Alert.alert("teste " + JSON.stringify(location.coords.latitude) +" "+ JSON.stringify(location.coords.longitude));
      setLocation(location);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Card style={estiles2.card}>
        <View style={estiles2.header}>
          {/* <Octicons name="file" size={35} color="white" /> */}
          <AntDesign name="enviromento" size={35} color="white" />
          <Text style={estiles2.texto}>Visitas</Text>
        </View>
      </Card>

      <ScrollView>
        
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title={"title"}
            description={"tete"}
          />
        </MapView>

        <View style={styles.blockInfo}>
          <View style={{ flexDirection: "row", display: "flex" }}>
            <View style={styles.containerFlexColumn}>
              <View style={styles.logo}>
                <Text style={styles.logoTitle}>Bra</Text>
              </View>
            </View>
            <Text style={styles.logoInfo}>Banco Bradesco</Text>
          </View>
        </View>

        <View style={styles.blockInfo}>
          <Text style={styles.title}>Meios de Contato:</Text>
        </View>

        <View style={styles.blockInfo}>
          <View>
            <Text style={styles.title}>Endereço:</Text>
            <Text style={styles.subTitle}>
              R. João Negrão, 487 - Centro, Curitiba - PR, 80010-200, Brazil
            </Text>
          </View>
        </View>

        <View style={styles.blockInfo}>
          <Text style={styles.title}>Responsáveis:</Text>
        </View>
        <View style={styles.blockInfo}>
          <View>
            <Text style={styles.title}>Deslocamento:</Text>
            <Text style={styles.subTitle}>Começar a contar KMs rodados</Text>
          </View>

          <Button
            onPress={() => Alert.alert("Função ainda não implementada")}
            title="Iniciar"
            color="#6A5ACD"
          />
        </View>

        <View style={styles.blockInfo}>
          <View>
            <Text style={styles.title}>Visitas:</Text>
            <Text style={styles.subTitle}>
              Inicie a visita ao chegar no cliente
            </Text>
          </View>

          <Button
            onPress={() => Alert.alert("Função ainda não implementada")}
            title="Check-in"
            color="#6A5ACD"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 25
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 3,
    marginBottom: 3,
  },
  title: {
    color: "black",
    fontWeight: "bold",
    marginLeft: 15,
    fontSize: 20,
  },
  subTitle: {
    color: "#A4A4A4",
    fontWeight: "normal",
    marginLeft: 15,
    fontSize: 15,
  },
  blockInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderColor: "#A4A4A4",
    borderBottomWidth: 0.8,
    // borderTopWidth: 0.5,
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
    backgroundColor: "#DBA901",
    width: 80,
    height: 80,
    borderRadius: 10,
    fontSize: 30,
  },

  logoTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  logoInfo: {
    marginTop: 5,
    padding: 5,
    fontWeight: "bold",
    fontSize: 20,
  },
});

const estiles2 = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    position: "relative",
    padding: 6,
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
