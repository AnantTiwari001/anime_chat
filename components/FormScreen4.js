import { Text, View, StyleSheet, Image } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";

const FormScreen4 = () => {
    const [value, setValue]= useState(100);
    const moveXText= (value>0)? ((value-50)/(100))*220: 0;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>What is the IQ of the AI bot...</Text>
      <View style={styles.sliderContainer}>
        <Text style={[styles.valueText,{transform:[{translateX:moveXText}]}]} > {parseInt(value)} </Text>
        <Slider
          minimumTrackTintColor="blue"
          maximumTrackTintColor="rgba(0,0,0,0.2)"
          thumbTintColor="blue"
          minimumValue={50}
          maximumValue={150}
          value={value}
          onValueChange={(newValue)=> setValue(newValue)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  sliderContainer: {
    width: 250,
  },
  valueText:{
    // borderWidth:1,
    width:30,
  }
});

export default FormScreen4;
