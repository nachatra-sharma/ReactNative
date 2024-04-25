import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const FancyCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fancyCardHeading}>Fancy Cards</Text>
      <View style={styles.fancyCardBox}>
        <Image
          source={{
            uri: "https://lh3.googleusercontent.com/p/AF1QipN-_aJHzlgjKMWxGlyY_so8bj2vjOlOgKjr_Yo5=s680-w680-h510",
          }}
          style={styles.fancyCardImage}
        />
        <View style={styles.fancyCardText}>
          <Text style={styles.fancyCardHead}>Hawa Mahal</Text>
          <Text style={styles.fancyCardLocation}>Jaipur, Rajasthan</Text>
          <Text style={styles.fancyCardDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India.
            Built from red and pink sandstone, it is on the edge of the City
            Palace, Jaipur, and extends to the Zenana, or women's chambers.
          </Text>
          <Text style={styles.fancyCardTime}>12 min left</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  fancyCardHeading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  fancyCardText: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  fancyCardHead: {
    color: "#2f3542",
    letterSpacing: 1,
    fontSize: 22,
    fontWeight: "bold",
  },
  fancyCardLocation: {
    fontSize: 15,
    letterSpacing: 0.7,
    fontWeight: "bold",
    color: "#2f3542",
  },
  fancyCardDescription: {
    marginTop: 4,
    fontSize: 13,
    textAlign: "justify",
    letterSpacing: 1,
    fontWeight: "bold",
    color: "#57606f",
  },
  fancyCardTime: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "justify",
    fontWeight: "bold",
    color: "#57606f",
  },
  fancyCardBox: {
    paddingBottom: 10,
    marginTop: 10,
    backgroundColor: "#ffffff",
  },
  fancyCardImage: {
    height: 260,
  },
});

export default FancyCard;
