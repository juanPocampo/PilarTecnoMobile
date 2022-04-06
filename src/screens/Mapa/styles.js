import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    margin: width / 20,
    height: width / 2.5,
    width: width / 2.5,
    borderRadius: 15,
    justifyContent: "center",
  },
  markerFixed: {
    left: "50%",
    marginLeft: -24,
    marginTop: -48,
    position: "absolute",
    top: "50%",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width,
    height,
    alignSelf: "center",
  },
  marker: {
    height: 48,
    width: 48,
  },
  footer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    bottom: 30,
    position: "absolute",
    width: "100%",
  },
  region: {
    color: "#fff",
    lineHeight: 20,
    margin: 20,
    alignSelf: "center",
  },
});
