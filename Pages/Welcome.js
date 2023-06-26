import { Text, View, StyleSheet, Image } from 'react-native';
import LogButton from '../components/LogButton';


const Welcome = () => {
    return (
      <View style={styles.container}>
        <View style={styles.btnGroup}>
          <View  style={styles.btn} >
            <LogButton text={'Continue with Email'} dark={true} />
          </View>
          <View style={styles.btn} >
            <LogButton text={'Continue with Google'} dark={false} />
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#31bbff',
      padding: 35,
      justifyContent: 'flex-end',
    },
    btnGroup: {},
    btn:{
      marginBottom:15
    }
  });
  
  export default Welcome;
  