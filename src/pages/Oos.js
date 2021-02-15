import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View> 
          
        <Text styles={styles.text}>Minhas Oos</Text>

          <TouchableOpacity>
          <MaterialCommunityIcons name="file-alert-outline" size={30} color="black" />
          <Text>Serviço 1</Text>
          </TouchableOpacity>


        </View>
      
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  text:{
  fontSize: 20
  }
 
});