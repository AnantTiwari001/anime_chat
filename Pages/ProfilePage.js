import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight, Button } from 'react-native';
import Profile from '../components/Profile';
import Media from '../components/Media';
import Header from '../components/Header';
import { useRoute } from '@react-navigation/native';
import { LogContext } from '../App';
import { useContext } from 'react';

const ProfilePage=({navigation})=>{
    const route= useRoute();
    const logValue= useContext(LogContext);
    const rough= ()=>{
        console.log('start!')
        // console.log(route.params);
        // console.log(logValue.ContactList.setFunc)
        // console.log(logValue.ContactList.value);
        deleteAccount();
    }

    const deleteAccount=()=>{
        let items=logValue.ContactList.value
        items=items.filter(item=>item.name!==route.params.name)
        logValue.ContactList.setFunc([...items])
        navigation.navigate('home')
    }

    return(
        <View style={{flex:1}} >
            <Header navigation={navigation} />
            <Profile name={route.params.name} />
            <Media />
            <Button title='delete this account!' onPress={rough}/>
        </View>
    )
}

export default ProfilePage;