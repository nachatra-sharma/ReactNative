import React, { useState } from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import ChangeBackgroundColor from "./component/ChangeBackgroundColor";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("#0be881");

  function updatedBackgroundColor(updatedColor) {
    setBackgroundColor(updatedColor);
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: backgroundColor,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}>
      <View>
        <StatusBar backgroundColor='#1e272e' barStyle='light-content' />
        <ChangeBackgroundColor
          onColorChange={updatedBackgroundColor}></ChangeBackgroundColor>
      </View>
    </SafeAreaView>
  );
}
