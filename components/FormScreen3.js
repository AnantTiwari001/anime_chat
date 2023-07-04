import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import Header from "./Header";

const FormScreen3 = ({navigation}) => {
  const [checked, setChecked] = useState("first");
  // console.log(checked)
  const handleNext = () => {
    console.log("shall implement the navigation later");
    navigation.navigate('fifth')
  };
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      {/* <View style={{ position: "absolute", bottom: 10, alignSelf: "center" }}>
        <Button title="Next" onPress={handleNext} />
      </View> */}
      {/* <Header navigation={navigation} />  */}
      <View style={{ position: "absolute", bottom: 10, alignSelf: "center" }}>
        <Button title="Next" onPress={handleNext} />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-start",
          paddingHorizontal: 25,
          position: "relative",
          bottom: 20,
        }}
      >
        <Text style={styles.textStyle}>The interests</Text>
        <View style={styles.radioContainer}>
          <TouchableOpacity
            onPress={() => {
              setChecked("first");
            }}
            style={
              checked == "first" ? styles.radioItemActive : styles.radioItem
            }
          >
            <Text style={styles.textItem}>anime</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setChecked("second");
            }}
            style={
              checked == "second" ? styles.radioItemActive : styles.radioItem
            }
          >
            <Text style={styles.textItem}>rugby</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    // alignItems: "flex-start",
  },
  textStyle: {
    fontSize: 20,
    marginVertical: 15,
  },
  radioContainer: {
    // borderWidth:2,
    flex: 1,
    flexDirection: "row",
  },
  radioItem: {
    width: 60,
    height: 25,
    marginHorizontal: 4,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 10,
  },
  radioItemActive: {
    width: 60,
    height: 25,
    marginHorizontal: 4,
    backgroundColor: "blue",
    borderRadius: 10,
  },
  textItem: {
    textAlign: "center",
  },
});

export default FormScreen3;
