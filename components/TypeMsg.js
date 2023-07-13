import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { CommonStyle, StyleValues } from "../assets/styles";

const TypeMsg = ({ text, setFunction, placeholderText, icon, submitFunc }) => {
  // const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[ {height:StyleValues.size[0]}, CommonStyle.center]}>
        <FontAwesome5 name={icon} size={20} />
      </TouchableOpacity>
      <TextInput
        style={[CommonStyle.container,{height:StyleValues.size[0], fontSize:StyleValues.font[2],paddingLeft:StyleValues.paddingMargin[3]}]}
        onChangeText={(text) => setFunction(text)}
        value={text}
        placeholder={placeholderText}
        placeholderTextColor="rgba(0,0,0,0.5)"
        underlineColorAndroid="transparent"
        onSubmitEditing={submitFunc}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 45,
    padding: 15,
    borderRadius: 25,
    backgroundColor: "#ecf0f1",
  },
});

export default TypeMsg;
