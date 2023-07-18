import { Text, View, StyleSheet, Image, TouchableOpacity, ToastAndroid } from "react-native";
import { useContext, useState } from "react";
import LogButton from "../components/LogButton";
import Inputform from "../components/InputForm";
import { LogContext } from "../App";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/auth";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logValue = useContext(LogContext);

  const handleLogin = () => {
    // console.log(logValue.Login.setFunc());
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        ToastAndroid.show("Login Success!", ToastAndroid.SHORT);
        logValue.Login.setFunc()
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
        ToastAndroid.show("login Failed!", ToastAndroid.SHORT);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.border}></View>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.desc}>Please sign in to continue</Text>
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
        <Text style={styles.forgot} onPress={()=>ToastAndroid.show("hello world", ToastAndroid.SHORT)} >Forgot Password?</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <LogButton text={"Sign in"} dark={true} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#31bbff",
    padding: 35,
  },
  form: {
    marginBottom: 50,
  },
  forgot: {
    alignSelf: "flex-end",
    color: "#ce3bb4",
  },
  button: {
    alignSelf: "center",
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

export default SignInPage;
