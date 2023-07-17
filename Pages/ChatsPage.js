import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  Touchable,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import Message from "../components/Message";
import TypeMsg from "../components/TypeMsg";
import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { AntDesign } from "@expo/vector-icons";
import PointContext from "../context/points/PointContext";
import { LogContext } from "../App";
import WS from "react-native-websocket";

const domain = 'anime-chatbot.onrender.com';
const endpoint = `ws://${domain}/chat`;

const ChatingPage = ({ navigation }) => {
  const Context = useContext(PointContext);
  const logValue = useContext(LogContext);
  const [msgArray, setMsgArray] = useState([]);
  const [text, setText] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [activeMsg, setActiveMsg] = useState(null);
  const [replying, setReplying] = useState([false, ""]);

  const ws= new WS(endpoint);
  
  const route = useRoute();
  const rough = async () => {
    const call = await fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=birgunj&appid=fc80203da81b326a508f73b26f9b742e"
    );
    // console.log(await call.json())
    console.log(Context.point.value);
  };
  const handleLongPress = (index) => {
    console.log("hello world");
    setPopupVisible(true);
    setActiveMsg(index);
  };
  const handleInput = (newText) => {
    setText(newText);
  };
  const handleSubmit = () => {
    sendMessgae(text);
    if (Context.point.value > 0) {
      console.log("starting!", Context.point.value);
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
      msgArray.push({ msg: text, time: time, isReply: replying[1] });
      setText("");
      setReplying(false, "");
      Context.point.setFunc(Context.point.value - 1);
    } else Alert.alert("not enough credits! consider buying more!");
  };
  const handleReact = (emoji) => {
    msgArray[activeMsg].emoji = emoji;
    setPopupVisible(false);
  };
  const handleReply = () => {
    setReplying([true, msgArray[activeMsg].msg]);
    setPopupVisible(false);
  };
  useEffect(() => {
    logValue.header.setFunc('hidden');

    ws.onmessage = (event) => {
      // Not implementing adding to the screen as in msgArray coz don't know the aspecting value!!

      const data = JSON.parse(event.data);
      if(data.type=="start"){
        // computing the message... thinking!!!
      }else if(data.type=="stream"){
        // send the msg... typing!!!
      }else if(data.type=="info"){
        // the info part
      }else if(data.type=="end"){
        // done with the message
      }else if(data.type=="error"){
        // some error occured
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  const sendMessgae=(msg)=>{
    ws.send(msg);
  }

  const addData=(text)=>{
    fetch(addDataEndpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: text }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(JSON.stringify(response));
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* {popupVisible && <LongPressPop />} */}
      <Modal
        visible={popupVisible}
        animationType="fade"
        transparent
        onRequestClose={() => setPopupVisible(false)}
      >
        <View style={styles.popContainer}>
          <View style={styles.popMain}>
            <View style={styles.emoji}>
              <TouchableOpacity onPress={() => handleReact("like2")}>
                <AntDesign name="like2" size={32} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleReact("heart")}>
                <AntDesign name="heart" size={32} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleReact("smileo")}>
                <AntDesign name="smileo" size={32} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleReact("meh")}>
                <AntDesign name="meh" size={32} color="black" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.reply} onPress={handleReply}>
              <Text style={{ fontSize: 20 }}>Reply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Header navigation={navigation} profile={route.params} absolute={true} />
      {/* {console.log('hello world',route.params)} */}
      <ScrollView style={{ paddingTop: 30 }}>
        {msgArray.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={rough}
            onLongPress={() => handleLongPress(index)}
          >
            <Message
              msgInfo={item}
              isRecieve={item.isRecieve}
              emoji={item.emoji}
              isReply={item.isReply}
            />
          </TouchableOpacity>
        ))}
        <View
          style={{
            borderWidth: 1,
            width: 100,
            height: 40,
            borderColor: "rgba(0,0,0,0)",
          }}
        ></View>
      </ScrollView>
      <View
        style={
          replying[0] && {
            marginVertical: 15,
            borderWidth: 1,
            borderRadius: 25,
          }
        }
      >
        {replying[0] && (
          <View style={styles.replyBlock}>
            <Text style={{ borderLeftWidth: 1 }}> {replying[1]} </Text>
          </View>
        )}
          <TypeMsg
            text={text}
            setFunction={(newText) => handleInput(newText)}
            placeholderText={"message"}
            icon={"images"}
            submitFunc={handleSubmit}
          />
      </View>
      {logValue.tab.value && (<View style={{width:'100%', height:60, borderTopWidth:1, borderColor:'gray', }} ></View>)}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 0,
    paddingTop: 20,
  },
  popMain: {
    flex: 1,
    backgroundColor: "red",
    // alignItems:'center',
    marginHorizontal: 50,
    paddingVertical: 30,
    borderRadius: 20,
  },
  popContainer: {
    flex: 1,
    position: "absolute",
    top: "30%",
    left: 0,
    right: 0,
    zIndex: 18,
  },
  emoji: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
  },
  reply: {
    // borderWidth:1,
    alignItems: "center",
    marginTop: 15,
  },
  replyBlock: {
    // borderWidth:1,
    paddingHorizontal: 35,
    paddingVertical: 10,
  },
});

export default ChatingPage;
