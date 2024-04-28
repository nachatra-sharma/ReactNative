import React from "react";
import { StyleSheet, View, Text } from "react-native";

const FlatCrads = () => {
  return (
    <View>
      <Text style={styles.flatCardsHeading}>Flat Cards</Text>
      <View style={styles.flatCardContainer}>
        <View style={[styles.flatCardsbox, styles.flatCardBoxOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.flatCardsbox, styles.flatCardBoxTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.flatCardsbox, styles.flatCardBoxThree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatCardsHeading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  flatCardContainer: {
    paddingTop: 10,
    flexDirection: "row",
    gap: 10,
  },
  flatCardsbox: {
    color: "#34495e",
    width: "31.7%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  flatCardBoxOne: {
    backgroundColor: "#e74c3c",
  },
  flatCardBoxTwo: {
    backgroundColor: "#2ecc71",
  },
  flatCardBoxThree: {
    backgroundColor: "#3498db",
  },
});

export default FlatCrads;
