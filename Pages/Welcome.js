import { Text, View, StyleSheet, Image, TouchableOpacity, ToastAndroid } from "react-native";
import LogButton from "../components/LogButton";
import { useContext } from "react";
import { SignContext } from "../context/points/Signing";

const Welcome = ({ navigation }) => {
  
  const handleGoogleSign=()=>{
    console.log('google sign in!');
    // signInWithPopup(auth, provider).then(()=>console.log('success!')).catch(()=>console.log('error'));
    
  }

  const signContextValue = useContext(SignContext);
  const signType = signContextValue.account.value;
  return (
    <View style={styles.container}>
      <View style={styles.btnGroup}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            signType == "old"
              ? navigation.navigate("signIn")
              : navigation.navigate("signUp");
          }}
        >
          <LogButton text={"Continue with Email"} dark={true} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={handleGoogleSign}
        >
          <LogButton text={"Continue with Google"} dark={false} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#31bbff",
    padding: 35,
    justifyContent: "flex-end",
  },
  btnGroup: {},
  btn: {
    marginBottom: 15,
  },
});

export default Welcome;
