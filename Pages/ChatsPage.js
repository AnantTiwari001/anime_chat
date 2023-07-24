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
import { useContext, useEffect, useState, useCallback } from "react";
import Header from "../components/Header";
import { AntDesign } from "@expo/vector-icons";
import PointContext from "../context/points/PointContext";
import { LogContext } from "../App";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import app from "../firebase/config";
import auth from "../firebase/auth";

const ChatingPage = ({ navigation }) => {
  // firestore
  const db = getFirestore(app);

  const Context = useContext(PointContext);
  const logValue = useContext(LogContext);
  const [msgArray, setMsgArray] = useState([]);
  const [text, setText] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [activeMsg, setActiveMsg] = useState(null);
  const [replying, setReplying] = useState([false, ""]);

  const route = useRoute();
  const rough = async () => {
    // const call = await fetch(
    //   "http://api.openweathermap.org/geo/1.0/direct?q=birgunj&appid=fc80203da81b326a508f73b26f9b742e"
    // );
    // console.log(await call.json())
    // console.log(Context.point.value);
  };
  const handleLongPress = (index) => {
    setPopupVisible(true);
    setActiveMsg(index);
  };
  const handleInput = (newText) => {
    setText(newText);
  };

  const formatedTime = () => {
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
    return time;
  };

  // update()

  const handleSubmit = () => {
    // sendMessgae(text);
      // msgArray.push({ msg: text, time: formatedTime(), isReply: replying[1] });
      sendData({msg:text, time:formatedTime(), isReply: false});
      setMsgArray([...msgArray, {msg:text, time:formatedTime(), isReply: false}])
      setText("");
      setReplying(false, "");
      Context.point.setFunc(Context.point.value - 1);
  };

  const docRef = doc(db, "Chat", auth.currentUser.uid);
  const sendData = async (params) => {
    // console.log("send data!");
    const docSnap = await getDoc(docRef);
    if (docSnap.data()) {
      // console.log("the doc exist man", docSnap.data());
      let data = docSnap.data();
      data[route.params.name] = [
        ...msgArray, params
      ];
      // console.log("shree Ram: ", data);
      await setDoc(doc(db, "Chat", auth.currentUser.uid), data);
      // serverResponse(auth.currentUser.uid, route.params.name);
    } else {
      console.log("doc donnot exist");
    }
  };
  const handleReact = (emoji) => {
    msgArray[activeMsg].emoji = emoji;
    setMsgArray([...msgArray]);
    setPopupVisible(false);
  };
  const handleReply = () => {
    setReplying([true, msgArray[activeMsg].msg]);
    setPopupVisible(false);
  };
  useEffect(() => {
    logValue.header.setFunc("hidden");
      const unsub = onSnapshot(docRef, (doc) => {
        // console.log("current data: ", doc.data());
        let data = doc.data()[route.params.name];
        console.log('updating chat Page!');
        if(!(JSON.stringify(data)==JSON.stringify(msgArray))){
          console.log('Same not updating')
          setMsgArray(data);
        }
        })
  }, []);

  // useEffect(()=>{
  //   console.log('change!');
  //   sendData();
  // },[msgArray])

  const serverResponse = async (uid, animeName) => {
    await fetch(
      "https://us-central1-master-streamer-393513.cloudfunctions.net/function-1",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: animeName, uid: uid }),
      }
    );
  };

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
        { msgArray && msgArray.map((item, index) => (
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
      {logValue.tab.value && (
        <View
          style={{
            width: "100%",
            height: 60,
            borderTopWidth: 1,
            borderColor: "gray",
          }}
        ></View>
      )}
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
