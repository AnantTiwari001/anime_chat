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
  import { useRoute } from '@react-navigation/native';
  import Message from "../components/Message";
  import TypeMsg from "../components/TypeMsg";
  import { useState } from "react";
  import Header from "../components/Header";
  
  const items = [
    { msg: "whatever man", time: "8:20 PM" },
    { msg: "whatever man", time: "8:20 PM" },
    { msg: "whatever man", time: "8:20 PM" },
    { msg: "whatever man", time: "8:20 PM" },
  ];
  
  const ChatingPage = ({navigation}) => {
      const [text, setText]=useState('')
      const route = useRoute();
      const rough=()=>{
        console.log(route.params.profile);
        // console.log(navigation.getParam('profile'));
        console.log('rough yeah!')
      }
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} profile={route.params.profile} />
        <ScrollView style={{ paddingTop: 30 }}>
          {items.map((item, index) => (
            <TouchableOpacity key={index} onPress={rough}  >
              <Message msgInfo={item} isRecieve={index % 2 == 1 ? true : false} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={{paddingVertical:15}}>
          <TypeMsg text={text} setFunction={(newText)=>setText(newText)} placeholderText={'message'} icon={'images'} />
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
  
  export default ChatingPage;
  