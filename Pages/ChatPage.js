import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Message from "../components/Message";
import TypeMsg from "../components/TypeMsg";
import { useState } from "react";
import Header from "../components/Header";

const items = [
  { msg: "whatever man0", time: "8:20 PM" },
  { msg: "whatever man", time: "8:20 PM" },
  { msg: "whatever man", time: "8:20 PM" },
  { msg: "whatever man", time: "8:20 PM" },
];

const ChatPage = ({navigation}) => {
    const [text, setText]=useState('')
    const rough=()=>{
      console.log(navigation.getParam('profile'));
    };
    const handleInput=(newText)=>{
      setText(newText);
      console.log(newText);
    }
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} profile={navigation.getParam('profile')} />
      <ScrollView style={{ paddingTop: 30 }}>
        {items.map((item, index) => (
          <TouchableOpacity key={index} onPress={rough} >
            <Message msgInfo={item} isRecieve={index % 2 == 1 ? true : false} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{paddingVertical:15}}>
        <TypeMsg text={text} setFunction={(newText)=>handleInput(newText)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingTop:20
  },
});

export default ChatPage;
