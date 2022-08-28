import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  pin: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  pinLabel: {
    marginHorizontal: 8,
    fontWeight: "bold",
    color: '#FFF',
  },

  calloutContainer: {
    width: 160,
    height: "100%",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 16,
    justifyContent: "center",
  },

  calloutText: {
    color: "#0089a5",
    fontSize: 14,
  },

  calloutSmallText: {
    color: "#005555",
    fontSize: 10,
  },

  footer: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 16,

    backgroundColor: "#fff",
    borderRadius: 8,
    height: 56,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    elevation: 2,
  },
});