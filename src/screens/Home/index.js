import React, { Component, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { styles } from "./styles";

export default Home = () => {
  const onPressHandle = (action) => {
    console.log(`Se Presionó ${action}`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.mainContent}>
        <View styles={styles.rowContent}>
          <Pressable
            onPress={() => onPressHandle("Home")}
            style={[styles.buttonContent, { backgroundColor: "#CEEE74" }]}
          >
            <Text style={styles.textButton}>Home</Text>
          </Pressable>
          <Pressable
            onPress={() => onPressHandle("Profile")}
            style={[styles.buttonContent, { backgroundColor: "#E13226" }]}
          >
            <Text style={styles.textButton}>Profile</Text>
          </Pressable>
        </View>
        <View styles={styles.rowContent}>
          <Pressable
            onPress={() => onPressHandle("Map")}
            style={[styles.buttonContent, { backgroundColor: "#F0D23D" }]}
          >
            <Text style={styles.textButton}>Map</Text>
          </Pressable>
          <Pressable
            onPress={() => onPressHandle("list")}
            style={[styles.buttonContent, { backgroundColor: "#55D3F7" }]}
          >
            <Text style={styles.textButton}>List</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
