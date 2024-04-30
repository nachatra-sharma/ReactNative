import React, { useState } from "react";
import { Image, Pressable, View, Text, StyleSheet } from "react-native";
import * as Haptics from "expo-haptics";
import diceOne from "../../assets/One.png";
import diceTwo from "../../assets/Two.png";
import diceThree from "../../assets/Three.png";
import diceFour from "../../assets/Four.png";
import diceFive from "../../assets/Five.png";
import diceSix from "../../assets/Six.png";

const RollTheDice = () => {
  const [diceImage, setDiceImage] = useState(diceOne);

  const selectDiceImage = () => {
    let diceNumber = Math.floor(Math.random() * 6 + 1);
    switch (diceNumber) {
      case 1:
        setDiceImage(diceOne);
        break;
      case 2:
        setDiceImage(diceTwo);
        break;
      case 3:
        setDiceImage(diceThree);
        break;
      case 4:
        setDiceImage(diceFour);
        break;
      case 5:
        setDiceImage(diceFive);
        break;
      case 6:
        setDiceImage(diceSix);
        break;
      default:
        setDiceImage(diceOne);
        break;
    }
  };

  return (
    <>
      <View>
        <Image source={diceImage} style={styles.rollTheDiceImage} />
        <Pressable
          onPress={() => {
            Haptics.selectionAsync();
            selectDiceImage();
          }}
          style={styles.rollTheDiceBtn}>
          <Text style={styles.rollTheDiceText}>Roll the dice</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  rollTheDiceImage: {
    width: 200,
    height: 200,
  },
  rollTheDiceBtn: {
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: "#74b9ff",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  rollTheDiceText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.7,
    color: "#2d3436",
  },
});

export default RollTheDice;
