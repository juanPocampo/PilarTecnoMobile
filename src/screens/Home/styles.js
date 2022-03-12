import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContent: {
    flex: 1,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  rowContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContent: {
    width: width / 3,
    height: width / 3,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    width: "100%",
    textAlign: "center",
    color: "black",
  },
});
