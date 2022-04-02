import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component, useCallback } from "react";
import { SafeAreaView, ImageBackground, Text, View } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { setUserAction } from "../../store/actions/user.action";
import { styles } from "./styles";

export default Profile = () => {
  const usr = useSelector((state) => state.userReducer.user);
  const dispatcher = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.mainContent}
        source={require("../../assets/images/bgGreenYellow.png")}
      >
        <View containerStyle={styles.cardContainer}>
          <Avatar
            size="large"
            rounded
            source={require("../../assets/images/ErenJaeger.jpg")}
          ></Avatar>
          <Text style={styles.usrName}>{usr?.userName}</Text>
          <Text style={styles.names}>
            {usr?.lastName}, {usr?.name}
          </Text>
          <Text>
            {usr?.email}
          </Text>
          <ScrollView>
            <Text>{usr?.bio}</Text>
          </ScrollView>
          <Button
            title="Cerrar Sesión"
            buttonStyle={styles.buttonStyle}
            onPress={() => {
              AsyncStorage.removeItem("@user");
              dispatcher(setUserAction(null));
            }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
