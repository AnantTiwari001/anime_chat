import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useState } from "react";

const FeedbackPage = () => {
  const items= ['The memory is bad', 'The AI is mean', 'The AI is boring', 'The AI is boring']
  const [activeNo, setActiveNo]= useState(null)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.close}>╳</Text>
      <Text style={styles.mainText} >Please provide some feedback</Text>
      <View style={styles.options} >
      {items.map((item, index) => (
        <TouchableOpacity style={[styles.optionItem, (activeNo==index)?{backgroundColor:'gray'}:{backgroundColor:'#ffff'}]} key={index} onPress={()=> setActiveNo(index)} >
            <Image source={require('../assets/favicon.png')} style={styles.itemImage} />
            <Text style={styles.itemText} >{item}</Text>
        </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    // paddingVertical: 55,
    padding: 25,
    position:'relative'
  },
  close: {
    position: "absolute",
    top: 30,
    right: 20,
    fontSize:25
  },
  mainText:{
    fontSize:25,
    paddingHorizontal:7,
    marginVertical:20
  },
  options:{
    // borderWidth:1,
    flex:1
  },
  optionItem:{
    // borderWidth:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    // backgroundColor: '#ffffff70',
    // backgroundColor: '#ffffffc0',
    padding:12,
    borderRadius:20,
    marginBottom:15
  },
  itemImage:{
    width:30,
    height:30,
    marginRight:10
  },
  itemText:{
    fontSize:15
  }
});

export default FeedbackPage;
