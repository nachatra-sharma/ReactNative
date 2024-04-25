import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

const ElevatedCards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.elevatedCardsHeading}>Elevated Cards </Text>
      <ScrollView horizontal={true} style={styles.elevateMyCards}>
        <View style={styles.elevatedCardContainer}>
          <View style={[styles.elevatedCardBox, styles.elevatedCardBoxOne]}>
            <Text>Scroll</Text>
          </View>
          <View style={[styles.elevatedCardBox, styles.elevatedCardBoxTwo]}>
            <Text>Me</Text>
          </View>
          <View style={[styles.elevatedCardBox, styles.elevatedCardBoxThree]}>
            <Text>Text</Text>
          </View>
          <View style={[styles.elevatedCardBox, styles.elevatedCardBoxFour]}>
            <Text>Text</Text>
          </View>
          <View style={[styles.elevatedCardBox, styles.elevatedCardBoxFive]}>
            <Text>Text</Text>
          </View>
          <View style={[styles.elevatedCardBox, styles.elevatedCardBoxSix]}>
            <Text>Text</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  elevatedCardsHeading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  elevatedCardBox: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  elevatedCardContainer: {
    paddingTop: 10,
    flexDirection: "row",
    gap: 10,
  },
  elevateMyCards: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
  },
  elevatedCardBoxOne: {
    backgroundColor: "#fbc531",
  },
  elevatedCardBoxTwo: {
    backgroundColor: "#9c88ff",
  },
  elevatedCardBoxThree: {
    backgroundColor: "#4cd137",
  },
  elevatedCardBoxFour: {
    backgroundColor: "#487eb0",
  },
  elevatedCardBoxFive: {
    backgroundColor: "#00a8ff",
  },
  elevatedCardBoxSix: {
    backgroundColor: "#ff6b81",
  },
});

export default ElevatedCards;
