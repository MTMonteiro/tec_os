
import  React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



class menu extends Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }

  entrar(){}

render(){
  return(
    



    <View style={styles.views}>
   
      <View style={styles.vidash}>

      <View style={styles.view1}>
    <TouchableOpacity style={styles.dash}>
    <MaterialIcons name="dashboard" size={60} color="white" />
     <Text style={styles.texto}>Dashboard</Text>
    </TouchableOpacity>

    </View>

    <View style={styles.view1}>
    <TouchableOpacity style={styles.dash}>
    <Ionicons name="home" size={60} color="white" />
     <Text style={styles.texto}>visitas</Text>
    </TouchableOpacity>
    </View>

    <View style={styles.view1}>
    <TouchableOpacity style={styles.dash}>
    <AntDesign name="profile" size={60} color="white" />
     <Text style={styles.texto}>Oss</Text>
    </TouchableOpacity>
    </View>

    <View style={styles.view1}>
    <TouchableOpacity style={styles.dash}>
    <Ionicons name="ios-person-circle-outline" size={60} color="white" />
     <Text style={styles.texto}>Clientes</Text>
    </TouchableOpacity>
    </View>
    
    <View style={styles.view1}>
    <TouchableOpacity style={styles.dash}>
    <MaterialIcons name="chat" size={60} color="white" />
     
     <Text style={styles.texto}>Chat</Text>
    </TouchableOpacity>
    </View>
    
    
    </View>


    </View>
  )
}
}
const styles = StyleSheet.create({
  logo:{
    width: 60,
    height: 60,
    
  },
  dash:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: 60,
    height: 40,
    elevation: 40
   
   //
    
  },
  bot:{
    flexDirection:'column',
  },
  views:{flex: 1,
    backgroundColor: '#98F',
    flexDirection: 'column',
    paddingBottom: 1,
    
    
       
  },
  view1:{
   backgroundColor: '#6A5ACD',
   flex: 1,
   alignItems: 'center',
   flexDirection: 'row',
   marginVertical: 13,
   margin: 8,
   width: 70,
   height: 75,
   elevation: 1,
  },
  texto:{
    fontSize: 8,
    textAlign: 'center',
    color: 'white',
    marginBottom: 14
  },
  vidash:{
    flex: 1,
    backgroundColor: '#6A5ACD',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    maxHeight: 96,
    marginBottom: -15,
    marginTop: 763,
    width:412


  }
})
export default menu;
