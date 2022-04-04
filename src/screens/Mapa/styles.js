import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    height,
    width,
    flex: 1,
    backgroundColor: "black",
  },
  mainContent: {
    width,
    height,
    flex: 1,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
