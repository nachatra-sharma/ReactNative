import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView, StyleSheet } from "react-native";
import App from "./component/App";
const _layout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appContainer}>
        <App />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 20,
    backgroundColor: "#c8d6e5",
  },
  appContainer: {
    marginTop: 10,
  },
});

export default _layout;
