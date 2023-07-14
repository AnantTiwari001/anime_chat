import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Button,
} from "react-native";
import Header from "./Header";
import PointContext from "../context/points/PointContext";

const FormScreen2 = ({navigation}) => {
  const [checked, setChecked] = useState(25);
  let items = new Array(50).fill().map((_, i) => i);
  const handleNext=()=>{
    navigation.navigate('fourth');
    sendData();
  }
  const Context= useContext(PointContext);
  const sendData=()=>{
    let data= Context.rough.value
    console.log(data);
    Context.rough.setFunc([...data, {third:checked}])   
  }
  return (
    <View style={styles.container} >
      <Header navigation={navigation} />
      <View style={{ position: "absolute", bottom: 10, alignSelf: "center" }}>
        <Button title="Next" onPress={handleNext} />
      </View>
      <View style={styles.main}>
        <Text style={styles.textStyle} onPress={()=>{console.log(Context.rough.value)}} >How old is the AI bot...</Text>
      </View>
      <View style={{ overflow: "hidden", position: "relative", paddingHorizontal:30 }}>
        {/* <ImageBackground source={require('../assets/white.png')} blurRadius={6} style={{width:20,height:80, position:'absolute', zIndex:12}}/>
      <ImageBackground source={require('../assets/white.png')} blurRadius={6} style={{width:20,height:80, position:'absolute', right:0, zIndex:12}}/> */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {items.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                setChecked(index);
              }}
              style={
                checked == index ? styles.radioItemActive : styles.radioItem
              }
              key={index}
            >
              <View style={styles.image}>
                <Text style={styles.text}>{index}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20
  },
  main: {
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 18,
  },

  radioItem: {
    width: 80,
    height: 80,
    marginHorizontal: 4,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 10,
  },
  radioItemActive: {
    width: 80,
    height: 80,
    marginHorizontal: 4,
    backgroundColor: "blue",
    borderRadius: 10,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 35,
    position: "relative",
    bottom: 2,
  },
});

export default FormScreen2;
