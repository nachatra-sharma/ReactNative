import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FlatCrads from "./components/FlatCards.jsx";
import ElevatedCards from "./components/ElevatedCards.jsx";
import FancyCard from "./components/FancyCard.jsx";
import BlogCard from "./components/BlogCard.jsx";
import Contacts from "./components/Contacts.jsx";

const _layout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardContainer}>
          <FlatCrads />
          <ElevatedCards />
          <FancyCard />
          <BlogCard />
          <Contacts />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default _layout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ecf0f1",
    flex: 1,
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  cardContainer: {},
});
