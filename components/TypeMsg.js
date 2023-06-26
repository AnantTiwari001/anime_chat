import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native';
import { useState } from 'react';

const TypeMsg=({text, setFunction})=>{
    // const [text, setText] = useState('');
    return(
        <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('../assets/favicon.png')} style={{
          width:30,
          height:30,
          marginRight:7,
          }} />
      </TouchableOpacity>
      <TextInput
        style={{
          flex: 1,
          height: 25,
          borderLeftWidth:1,
          fontSize:17,
          paddingLeft:15
        }}
        onChangeText={text => setFunction(text)}
        value={text}
        placeholder='Message'
        placeholderTextColor="rgba(0,0,0,0.5)"
        underlineColorAndroid="transparent"
      />
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
        borderWidth:1,
        flexDirection: 'row',
        alignItems: 'center',
        height:45, 
        padding:15,
        borderRadius:25,
        backgroundColor:'#ecf0f1'
      }
})

export default TypeMsg;