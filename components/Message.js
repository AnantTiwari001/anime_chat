import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';

const Message=({msgInfo, isRecieve})=>{

    return(
        <View style={isRecieve?(styles.containerRecieve):(styles.containerSend)}>
        <View style={[styles.msgContainer, isRecieve?{backgroundColor:'#f0f0fe'}:{backgroundColor:'blue'}]}  >
            <Text style={styles.msgText} >{msgInfo.msg}</Text>
            <Text style={styles.status} >{isRecieve?(null):('⚫')}</Text>
        </View>
            <Text style={isRecieve?(styles.timeRecieve):(styles.timeSend)} >{msgInfo.time}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    containerSend:{
        alignSelf:'flex-end',
        // position:'relative'
    },
    containerRecieve:{
        alignSelf:'flex-start'
    },
    msgContainer:{
        minWidth:170,
        height:60,
        // backgroundColor:'blue',
        padding:10,
        borderRadius:25,
        borderBottomRightRadius:7
    },
    msgText:{
        textAlign:'left'
    },
    status:{
        position:'absolute',
        bottom:5,
        right:5
    },
    timeSend:{
        alignSelf:'flex-end',
        paddingRight:7
    },
    timeRecieve:{
        alignSelf:'flex-start',
        paddingLeft:7
    }
})

export default Message;