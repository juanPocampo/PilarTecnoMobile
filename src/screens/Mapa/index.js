import React, { Component, useCallback, useState, useEffect } from "react";
import { SafeAreaView, View, Dimensions, Text } from "react-native";
import { Icon, Image } from "react-native-elements";
import Geolocation from "react-native-geolocation-service";
import { ScrollView } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./styles";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ASPECT_RATIO = width / height;
const LATITUDE = -29.412337;
const LONGITUDE = -66.857331;
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default Mapa = () => {
  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [mapaTipo, setMapaTipo] = useState(true);
  const onRegionChange = (reg) => {
    setRegion(reg);
  };
  const onSwitchChange = () => {};
  const _getLocation = async () => {};
  useEffect(() => {
    //_getLocation();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.mapaContainer}
        initialRegion={region}
        userInterfaceStyle="dark"
        mapType={mapaTipo ? "standard" : "satelite"}
        onRegionChangeComplete={onRegionChange}
      />
      {/* <View style={styles.pin}>
        <Icon
          name="crosshairs"
          type="font-awesome"
          color="#8d2d84"
          size={width / 10}
          onPress={() => fitCoordinates()}
        />
      </View> */}
      <View style={styles.markerFixed}>
        <Image
          style={styles.marker}
          source={require("../../assets/images/pin.png")}
        />
      </View>
      <SafeAreaView style={styles.header}>
        <Text style={styles.region}>
          longitud:
          {JSON.stringify(region?.longitude)}
          {"\n"}latitud:
          {JSON.stringify(region?.latitude)}
        </Text>
      </SafeAreaView>
    </SafeAreaView>
  );
};
