import { Text, View, StyleSheet, Image, Button } from "react-native";
import Slider from "@react-native-community/slider";
import { useCallback, useContext, useState } from "react";
import Header from "./Header";
import PointContext from "../context/points/PointContext";

const FormScreen4 = ({ navigation }) => {
  const [value, setValue] = useState(100);
  const moveXText = value > 0 ? ((value - 50) / 100) * 220 : 0;
  const Context= useContext(PointContext);
  const sendData=()=>{
    let data= Context.rough.value
    console.log(data);
    Context.rough.setFunc([...data, {fifth:value}])
  }
  const handleNext=()=>{
    sendData();
    // navigation.navigate('home')
    console.log(Context.rough.value)
  }
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", bottom: 10, alignSelf: "center" }}>
        <Button title="Next" onPress={handleNext} />
      </View>
      <View style={{position:'absolute', top:20, right:0, left:0, height:50}} >
        <Header navigation={navigation} />
      </View>
      <Text style={styles.text}>What is the IQ of the AI bot...</Text>
      <View style={styles.sliderContainer}>
        <Text
          style={[styles.valueText, { transform: [{ translateX: moveXText }] }]}
        >
          {" "}
          {parseInt(value)}{" "}
        </Text>
        <Slider
          minimumTrackTintColor="blue"
          maximumTrackTintColor="rgba(0,0,0,0.2)"
          thumbTintColor="blue"
          minimumValue={50}
          maximumValue={150}
          value={value}
          onValueChange={(newValue) => setValue(newValue)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'row',
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
  valueText: {
    // borderWidth:1,
    width: 30,
  },
});

export default FormScreen4;
