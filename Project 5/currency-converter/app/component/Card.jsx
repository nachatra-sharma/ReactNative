import React from "react";
import { Text, View, StyleSheet } from "react-native";
const Card = (props) => {
  const { name, flag } = props.details.item;
  return (
    <View style={styles.cardBoxContainer}>
      <Text>{flag}</Text>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBoxContainer: {
    backgroundColor: "white",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    gap: 5,
    paddingVertical: 5,
  },
});

export default Card;
