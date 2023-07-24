import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import LogButton from "../components/LogButton";
import { useContext, useEffect } from "react";
import { SignContext } from "../context/points/Signing";
import auth from "../firebase/auth";
import { LogContext } from "../App";

const Page0 = ({ navigation }) => {
  const signContextValue= useContext(SignContext);
  const logValue= useContext(LogContext);
  useEffect(()=>{
    // if(auth.currentUser){
    //   // logValue.Login.setFunc();
    //   console.log('hello world')
    // }
    // logValue.Login.setFunc();
  },[])
  return (
    <View style={styles.container}>
      <Text
        style={{
          alignSelf: "center",
        }}
        onPress={()=>console.log(auth.currentUser)}
      >
        Welcome
      </Text>
      <View style={styles.btnGroup}>
        <TouchableOpacity onPress={()=>{navigation.navigate('sChoose'); signContextValue.account.setFunc('new')}} >
          <LogButton text={"Sign up"} dark={false} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('sChoose'); signContextValue.account.setFunc('old')}}>
          <LogButton text={"Sign in"} dark={true} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#31bbff",
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 35,
    justifyContent: "flex-end",
  },
  btnGroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
});

export default Page0;
