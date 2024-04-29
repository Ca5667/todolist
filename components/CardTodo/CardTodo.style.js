import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  card: {
    backgroundColor: "white",
    flexDirection: "row",
    height: 115,
    borderRadius: 13,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom:20,
    // IOS //
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // ANDROID //
    elevation: 5,
  },
  txt: {
    fontSize: 25,
  },
  img: {
    height: 25,
    width: 25,
  },
});
