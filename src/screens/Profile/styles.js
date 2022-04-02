import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../constans";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  mainContent: {
    width,
    height: height - 55,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    height: "80%",
    width: "100%",
    borderRadius: 15,
    flexDirection: "column",
    borderWidth: 2,
  },
  column: {
    height: "100%",
    width: "50%",
  },
  usrName: {
    width: "50%",
  },
  names: { width: "50%" },
});
