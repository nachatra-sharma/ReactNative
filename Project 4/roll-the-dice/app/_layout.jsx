import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import RollTheDice from "./component/RollTheDice";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#b2bec3' />
      <View>
        <RollTheDice></RollTheDice>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfe6e9",
    alignItems: "center",
    justifyContent: "center",
  },
});
