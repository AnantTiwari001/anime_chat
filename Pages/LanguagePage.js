import { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Button,
  } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const LanguagePage=()=>{
    const [language, setLanguage]= useState('English');
    const languages= ['Deutsch', 'English', 'Espanol', 'Francais', 'Portugues'];
    const handleClick=(newState)=>{
        setLanguage(newState);
    }
    return(
        <View style={styles.container} >
            <Text style={styles.txt} >Choose a language:</Text>
            {languages.map((item, index)=>(
            <TouchableOpacity style={styles.item} key={index} onPress={()=>handleClick(item)} >
                <Text style={{fontSize:17}} >{item}</Text>
                {(item==language)&&(<AntDesign name="checkcircle" size={24} color="green" />)}
            </TouchableOpacity>
            ))}
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingHorizontal:20
    },
    txt:{
        textAlign:'center',
        color:'rgba(0,0,0,0.5)',
        fontSize:21,
        marginVertical:20,
        fontWeight:600
    },
    item:{
        backgroundColor:'gray',
        marginBottom:10,
        paddingVertical:20,
        paddingHorizontal:15,
        borderRadius:15,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})

export default LanguagePage;