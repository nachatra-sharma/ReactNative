import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const ChangeBackgroundColor = (props) => {
  const { onColorChange } = props;
  const [randomColor, setRandomColor] = useState("#0be881");

  function generateColor() {
    let color = "#";
    const hexCode = "0123456789abcdef";
    for (let i = 0; i < 6; i++) {
      color += hexCode[Math.floor(Math.random() * 16)];
    }
    setRandomColor(color);
    onColorChange(color);
  }

  return (
    <>
      <View
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: randomColor,
        }}>
        <TouchableOpacity onPress={generateColor} style={styles.bgChangerBtn}>
          <Text style={styles.bgChangerText}>Change Background</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bgChangerBtn: {
    backgroundColor: "#485460",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  bgChangerText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default ChangeBackgroundColor;
