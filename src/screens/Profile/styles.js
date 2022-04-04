import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../constans";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    height,
    width,
    backgroundColor: "black",
  },
  mainContent: {
    flex: 1,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    flex: 0.25,
    borderRadius: 15,
    flexDirection: "column",
    borderWidth: 2,
  },
  infoContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  column: {
    flex: 0.6,
  },
  bio: {
    flex: 0.1,
  },
  button: {
    borderRadius: 5,
    backgroundColor: "red",
  },
});
