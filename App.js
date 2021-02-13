import * as React from "react";
import { View } from "react-native";
import MenuBottom from './src/components/MenuBottom'

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <MenuBottom/>

    </View>
  );
}
