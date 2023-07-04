import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import Header from './Header';

const FormScreen0=({navigation})=>{
    const [checked, setChecked] = useState('second');
    const handleNext= ()=>{
        console.log('shall implement the navigation later');
        navigation.navigate('second')
    }
    return(
        <View style={styles.container}>
          <Header navigation={navigation} />
    <View style={{position:'absolute', bottom:10,alignSelf:'center'}} >
      <Button title='Next' onPress={handleNext} />
    </View>
    <View style={{justifyContent:'center', alignItems:'center', paddingHorizontal:15}}>
      <Text style={styles.textStyle}>
        What gender is the AI bot...
      </Text>
      <View style={styles.radioContainer} >
        <TouchableOpacity onPress={()=>{setChecked('first')}} style={checked=='first'? styles.radioItemActive :styles.radioItem}>
          <Image source={require('../assets/female_probaly.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setChecked('second')}} style={checked=='second'? styles.radioItemActive :styles.radioItem}>
          <Image source={require('../assets/male_probaly.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setChecked('third')}} style={checked=='third'? styles.radioItemActive :styles.radioItem}>
          <Image source={require('../assets/non-binary_probably.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingVertical:20
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    textStyle: {
      fontSize: 16,
      marginVertical:15,
      alignSelf:'center'
    },
    radioContainer:{
      // borderWidth:2,
      flex:1,
      flexDirection:'row'
    },
    radioItem:{
      width:60,
      height:60,
      marginHorizontal:4,
      backgroundColor:'rgba(0,0,0,0.2)',
      borderRadius:10
    },
    radioItemActive:{
      width:60,
      height:60,
      marginHorizontal:4,
      backgroundColor:'blue',
      borderRadius:10,
    },
  
    image:{
      width:'100%',
      height:'100%',
      borderRadius:10,
    }
  });

export default FormScreen0;