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
import { useRoute } from "@react-navigation/native";
import Message from "../components/Message";
import TypeMsg from "../components/TypeMsg";
import { useState } from "react";
import Header from "../components/Header";

const items = [
  { msg: "whatever man", time: "8:20 PM", isRecieve:true },
  { msg: "whatever man", time: "8:20 PM" },
  { msg: "whatever man", time: "8:20 PM", isRecieve:true },
  { msg: "whatever man", time: "8:20 PM", isRecieve:true },
  { msg: "whatever man", time: "8:20 PM", isRecieve:true },
  { msg: "whatever man", time: "8:20 PM", isRecieve:true },
  { msg: "whatever man", time: "8:20 PM", isRecieve:true },
  { msg: "whatever man", time: "8:20 PM", isRecieve:true },
  { msg: "whatever man", time: "8:20 PM", isRecieve:true },
  { msg: "whatever man", time: "8:20 PM", isRecieve:true },
];

const ChatingPage = ({ navigation }) => {
  const [msgArray,setMsgArray]= useState(items);
  const [text, setText] = useState("");
  const route = useRoute();
  const rough = () => {
    console.log(route.params.profile);
    // console.log(navigation.getParam('profile'));
    // console.log('rough yeah!')
  };
  const handleInput = (newText) => {
    setText(newText);
  };
  const handleSubmit = () => {
    const timeObj = new Date();
    let time = "";
    timeObj.getHours() > 12
      ? (time =
          (timeObj.getHours() - 12).toString() +
          ":" +
          timeObj.getMinutes().toString() +
          " PM")
      : (time =
          timeObj.getHours().toString() +
          ":" +
          timeObj.getMinutes().toString() +
          "AM");
    msgArray.push({ msg: text, time: time });
    setText("");
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={{position:"absolute", top:0}}> */}
      <Header navigation={navigation} profile={route.params.profile} absolute={true} />
      {/* </View> */}
      <ScrollView style={{ paddingTop: 30 }}>
        {msgArray.map((item, index) => (
          <TouchableOpacity key={index} onPress={rough}>
            <Message msgInfo={item} isRecieve={item.isRecieve} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{ paddingVertical: 15 }}>
        <TypeMsg
          text={text}
          setFunction={(newText) => handleInput(newText)}
          placeholderText={"message"}
          icon={"images"}
          submitFunc={handleSubmit}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});

export default ChatingPage;
