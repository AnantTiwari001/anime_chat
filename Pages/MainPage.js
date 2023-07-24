import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
  ToastAndroid,
} from "react-native";
import React from "react";
import Contact from "../components/Contact";
import { CommonStyle, StyleValues } from "../assets/styles";
import { useContext, useEffect, useState } from "react";
import { LogContext } from "../App";
import { useFocusEffect } from "@react-navigation/native";
import {
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import app from "../firebase/config";
import auth from "../firebase/auth";

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

const MainPage = ({ navigation }) => {
  const db = getFirestore(app);
  const logValue = useContext(LogContext);
  const name = `Sophie Road${Math.random() * 100}`;

  const handleNew = () => {
    // navigation.navigate('first')
    console.log('new chat!');
    logValue.ContactList.setFunc([...logValue.ContactList.value, {
      name: name,
      lastMsg: "",
      time: time,
      url: "https://picsum.photos/200/300",
    }]);
    handledoc();
  };

  const handledoc = async () => {
    const docRef = doc(db, "Chat", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    // setDoc(docRef, {[name]:[]}).then(()=>console.log('done!')).catch((err)=>console.log(err));
    if (docSnap.data()) {
      let data = docSnap.data();
      data[name] = [];
      await setDoc(docRef, data);
    } else {
      await setDoc(doc(db, "Chat", auth.currentUser.uid), { [name]: [] });
    }
  };

  const rough = async () => {
    const docRef = doc(db, "Chat", "docId");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  };

  const contactHandle = (index) => {
    navigation.navigate("chatingScreen", logValue.ContactList.value[index]);
    console.log(logValue.ContactList.value[index]);
  };
  useFocusEffect(
    React.useCallback(() => {
      // Your event listener code here
      console.log("Main Page!!", logValue.header.value);
      logValue.header.setFunc("default");
    }, [])
  );

  const getChats = async () => {
    const docRef = doc(db, "Chat", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    let data = docSnap.data();
    // console.log('chats: ',data);
    let tempArray=[]
    for (let key in data) {
      console.log(key);
      let chatArray = data[key];

      // console.log('what: ',chatArray[chatArray.length-1])
      // logValue.ContactList.setFunc([
      //   ...logValue.ContactList.value,
        tempArray.push({
          name: key,
          lastMsg: chatArray[chatArray.length - 1]
            ? chatArray[chatArray.length - 1].msg
            : "",
          time: "wed 4:01 PM",
          url: "https://picsum.photos/200/300",
        });
    };
    console.log('ram: ',tempArray);
    logValue.ContactList.setFunc(tempArray)
  };

  // const getChatList= async()=>{
  //   const docRef = doc(db, "Chat", auth.currentUser.uid);
  //   const docSnap = await getDoc(docRef);
  //   const data= docSnap.data();
  //   let tempArray=[];
  //   for (let key in data){
  //     console.log('animeName: ', key);
  //     let chatArray= data[key];
  //     tempArray.push({
  //       name:'key',
  //       lastMsg:'',
  //       time:'whatever PM',
  //       url:"https://picsum.photos/200/300",
  //     });
  //   }
  //   logValue.ContactList.setFunc(tempArray);
  // }

  useEffect(() => {
      getChats()
  }, []);
  return (
    <View style={[styles.container, CommonStyle.container]}>
      <ScrollView style={styles.scrollcontainer}>
        {logValue.ContactList.value.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => contactHandle(index)}>
            <Contact contactInfo={item} />
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={{ marginTop: 7 }} onPress={handleNew}>
          <Text style={styles.add}>+</Text>
        </TouchableOpacity>
      </ScrollView>
      <Button title="click me!" onPress={rough} />
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
