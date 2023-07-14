import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LogButton from '../components/LogButton';


const Welcome = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.btnGroup}>
          <TouchableOpacity  style={styles.btn} onPress={()=>{navigation.navigate('signIn')}} >
            <LogButton text={'Continue with Email'} dark={true} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} >
            <LogButton text={'Continue with Google'} dark={false} />
          </TouchableOpacity>
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
  