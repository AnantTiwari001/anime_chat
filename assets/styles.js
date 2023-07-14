import { StyleSheet } from "react-native";

const CommonStyle = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-between",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  horizontal: {
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  sBtn:{
    justifyContent:'space-between'
  },
  sEven:{
    justifyContent:'space-evenly'
  },
  component: {
    borderWidth: 1,
  },
  selfStart: {
    alignSelf: "flex-start",
  },
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
  },
});

const StyleValues = {
    paddingMargin: [3, 7, 8, 15, 23, 32],
    size: [25, 40, 53, 62, 73, 91, 110, 270],
    color: { light: "white", dark: "#b9bdbd", bright: "red", cool: "tomato", blue:'purple' },
    radius:[5,7,10,13,17,20,25,27,32],
    font:[7,12,17,25]
};
const PageSpecificStyle = StyleSheet.create({});

export { CommonStyle, StyleValues };
