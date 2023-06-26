import { Text, View, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import LogButton from '../components/LogButton';
import Inputform from '../components/InputForm';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    return (
      <View style={styles.container}>
        <View style={styles.textContainer} >
          <View style={styles.border} ></View>
          <Text style={styles.title} >Sign In</Text>
          <Text style={styles.desc} >Please sign in to continue</Text>
        </View>
        <View style={styles.form}>
          <Inputform
            title={'Email'}
            textInput={email}
            setFunction={(newText) => {
              setEmail(newText);
            }}
          />
          <Inputform
            title={'Password'}
            textInput={password}
            setFunction={(newText) => setPassword(newText)}
          />
          <Text style={styles.forgot}>Forgot Password?</Text>
        </View>
        <View style={styles.button} >
          <LogButton text={'Sign in'} dark={true} />
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#31bbff',
      padding: 35,
    },
    form: {
      marginBottom:50
    },
    forgot: {
      alignSelf: 'flex-end',
      color: '#ce3bb4',
    },
    button:{
      alignSelf:'center'
    },
    title:{
      fontSize:32,
      color:'white',
      fontWeight:600
    },
    desc:{
      opacity:20,
      color:'#fffffff0',
    },
    textContainer:{
      position:'relative',
      paddingVertical:5,
      marginVertical:20
    },
    border:{
      borderWidth:1,
      position:'absolute',
      bottom:0,
      left:0,
      width:'25%',
      borderColor:'#ce3bb4'
    }
  });
  
  export default SignInPage;
  