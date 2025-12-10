import "react-native-get-random-values";
import "react-native-url-polyfill/auto";
import "react-native-gesture-handler";
import { Buffer } from "buffer";
(global as any).Buffer = (global as any).Buffer || Buffer;

import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816"
  }
});
