import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Contact from "../components/Contact";
import { CommonStyle, StyleValues } from "../assets/styles";
import { useContext, useState } from "react";
import { LogContext } from "../App";

const items = [
  {
    name: "Layla Rose",
    lastMsg: "How are you doing?!",
    time: "8:20 PM",
    url: "https://picsum.photos/200/300",
  },
  {
    name: "Saphire Blueshort",
    lastMsg: "That sounds amazing!!",
    time: "tue 9:07 PM",
    url: "https://picsum.photos/200/300",
  },
  {
    name: "Jade River",
    lastMsg: "Lets... do this:?",
    time: "wed 12:04 PM",
    url: "https://picsum.photos/200/300",
  },
  {
    name: "Sophie Road",
    lastMsg: "Why does this always happen...",
    time: "wed 4:01 PM",
    url: "https://picsum.photos/200/300",
  },
];

const MainPage = ({navigation}) => {
  const logValue= useContext(LogContext);
  
  const handleNew=()=>{
    // navigation.navigate('first')
    console.log('new chat!');
    logValue.ContactList.setFunc([...logValue.ContactList.value, {
      name: `Sophie Road${Math.random()*100}`,
      lastMsg: "Why does this always happen...",
      time: "wed 4:01 PM",
      url: "https://picsum.photos/200/300",
    }]);
  }



  const contactHandle=(index)=>{
    navigation.navigate('chatingScreen', logValue.ContactList.value[index]);
    console.log(logValue.ContactList.value[index])
  }
  return (
    <View style={[styles.container, CommonStyle.container, ]}>
      <ScrollView style={styles.scrollcontainer}>
        {logValue.ContactList.value.map((item, index) => (
          <TouchableOpacity key={index} onPress={()=>contactHandle(index)} >
            <Contact contactInfo={item} />
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={{marginTop:7}} onPress={handleNew} >
          <Text style={styles.add}>+</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleValues.color.dark,
    // borderWidth: 1,
    paddingTop: 150,
  },
  scrollcontainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },
  add: {
    alignSelf: "center",
    borderWidth: 1,
    fontSize: 24,
    width: 40,
    height: 40,
    textAlign: "center",
    verticalAlign: "middle",
    borderRadius: 20,
  },
});

export default MainPage;
