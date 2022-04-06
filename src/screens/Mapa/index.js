import React, { Component, useCallback, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import MapView from "react-native-maps";
import { styles } from "./styles";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export default Mapa = () => {
  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.mainContent}
        source={require("../../assets/images/bgGreenYellow.png")}
      >
        <MapView region={region} style={styles.map}></MapView>
      </ImageBackground>
    </SafeAreaView>
  );
};
