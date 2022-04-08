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
    flexDirection: "column",
    justifyContent: "space-around",
  },
  header: {
    flex: 0.4,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
  },
  imageContainer: {
    flex: 1,
    resizeMode: "contain",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  abilitiesContainer: {
    flex: 0.1,
    borderRadius: 5,
  },
  abilityText: {
    marginVertical: 5,
    backgroundColor: theme.colors.primary,
    color: "black",
    borderRadius: 5,
  },
  movesContainer: {
    flex: 0.4,
    flexGrow: 0.4,
    borderRadius: 15,
    backgroundColor: theme.colors.inactive,
    opacity: 0.7,
  },
});
