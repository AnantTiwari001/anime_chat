import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { useContext, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { CommonStyle, StyleValues } from "../assets/styles";
import { LogContext } from "../App";

const TypeMsg = ({ text, setFunction, placeholderText, icon, submitFunc }) => {
  const logValue= useContext(LogContext);
  // const [text, setText] = useState('');
  return (
    <View style={[styles.container, logValue=='hidden' && {transform:[{translateY:-20}], backgroundColor:'red'} ]}>
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
        onSubmitEditing={ (text!='') && submitFunc}
        onFocus={()=>{logValue.header.setFunc('hidden'); console.log('input active!')}}
        blurOnSubmit={false}
        onBlur={()=>{console.log('focus out!'); logValue.header.setFunc('blank')}}
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
    marginBottom:10
  },
});

export default TypeMsg;
