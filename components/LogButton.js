import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const LogButton=({text, dark})=>{
  return(
    <TouchableOpacity style={[styles.container, dark?(styles.darkContainer):(null)]} >
      <Text style={[styles.text, dark?(styles.darkText):(null)]} >{text}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
  container:{
    paddingHorizontal:15,
    paddingVertical:6,
    borderWidth:2,
    borderRadius:12,
    borderColor:'white',
    backgroundColor:'#b5c5ccf0'
  },
  text:{
    textAlign:'center',
    textAlignVertical:'center',
    fontSize:16,
    color:'white',
    fontWeight:500
  },
  darkContainer:{
    backgroundColor:'white',
    
  },
  darkText:{
    color:'black'
  }
})

export default LogButton;