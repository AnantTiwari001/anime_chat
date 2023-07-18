import { Text, View, StyleSheet, Image, TouchableOpacity, ToastAndroid } from "react-native";
import { useState, useContext } from "react";
import LogButton from "../components/LogButton";
import Inputform from "../components/InputForm";
import { createUserWithEmailAndPassword, sendSignInLinkToEmail } from "firebase/auth";
import auth from "../firebase/auth";
import { LogContext } from "../App";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const logValue = useContext(LogContext);

  const actionCodeSettings = {
    url: 'https://livelinks1234.firebaseapp.com',
    handleCodeInApp: true,
  };

  const handleSignUp = () => {
    console.log("sign up!");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential);
        ToastAndroid.show("SignUp Success!", ToastAndroid.SHORT);
        // console.log('verify email:',auth.currentUser.sendEmailVerification())
        sendSignInLinkToEmail(auth,email,actionCodeSettings).then((res)=>console.log('verification: ', res)).catch((err)=>console.log("error:  ", err))
        ToastAndroid.show("Sending ", ToastAndroid.SHORT);
        // logValue.Login.setFunc()
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error is here!',error);
        ToastAndroid.show("login Failed!", ToastAndroid.SHORT);
        // ..
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.border}></View>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.desc}>Please sign up to continue</Text>
      </View>
      <View style={styles.form}>
        <Inputform
          title={"Email"}
          textInput={email}
          setFunction={(newText) => {
            setEmail(newText);
          }}
        />
        <Inputform
          title={"Password"}
          textInput={password}
          setFunction={(newText) => setPassword(newText)}
        />
        <Inputform
          title={"Conform Password"}
          textInput={conformPassword}
          setFunction={(newText) => setConformPassword(newText)}
        />
      </View>
      <View style={styles.btnGroup}>
        <TouchableOpacity onPress={handleSignUp}>
          <LogButton text={"Sign up"} dark={false} />
        </TouchableOpacity>
        {/* <LogButton text={'Sign in'} dark={true} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#31bbff",
    padding: 35,
  },
  form: {},
  btnGroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: 600,
  },
  desc: {
    opacity: 20,
    color: "#fffffff0",
  },
  textContainer: {
    position: "relative",
    paddingVertical: 5,
    marginVertical: 20,
  },
  border: {
    borderWidth: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "25%",
    borderColor: "#ce3bb4",
  },
});

export default SignUpPage;
