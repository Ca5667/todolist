import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#141414",
    justifyContent: "space-evenly",
    marginBottom:30,
    // ios //
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // android //
    elevation: 5,
  },
  txt: {
    paddingVertical:25,
    fontSize:20,
    color: "#c2c2c2c2",
  },
});
