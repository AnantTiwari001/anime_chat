import { Text, View, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import LogButton from '../components/LogButton';
import Inputform from '../components/InputForm';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conformPassword, setConformPassword] = useState('');
  
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <View style={styles.border}></View>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.desc}>Please sign up to continue</Text>
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
          <Inputform
            title={'Conform Password'}
            textInput={conformPassword}
            setFunction={(newText) => setConformPassword(newText)}
          />
        </View>
        <View style={styles.btnGroup}>
          <LogButton text={'Sign up'} dark={false} />
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
    form: {},
    btnGroup: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-end',
    },
    title: {
      fontSize: 32,
      color: 'white',
      fontWeight: 600,
    },
    desc: {
      opacity: 20,
      color: '#fffffff0',
    },
    textContainer: {
      position: 'relative',
      paddingVertical: 5,
      marginVertical: 20,
    },
    border: {
      borderWidth: 1,
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '25%',
      borderColor: '#ce3bb4',
    },
  });
  
  export default SignUpPage;
  