import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Password from "./components/Password";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar barStyle='light-content' backgroundColor={"#2d3436"} />
        <Text style={styles.layoutHeading}>Password Generator Application</Text>
        <Password />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d3436",
    paddingHorizontal: 10,
    paddingVertical: 60,
  },
  layoutHeading: {
    color: "#feca57",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
