import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight, Button } from 'react-native';
import Profile from '../components/Profile';
import Media from '../components/Media';
import Header from '../components/Header';
import { useRoute } from '@react-navigation/native';
import { LogContext } from '../App';
import { useContext } from 'react';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import app from '../firebase/config';
import auth from '../firebase/auth';

const ProfilePage=({navigation})=>{
    const db=getFirestore(app);
    const route= useRoute();
    const logValue= useContext(LogContext);
    const rough= ()=>{
        console.log('start!')
        // console.log(route.params);
        // console.log(logValue.ContactList.setFunc)
        // console.log(logValue.ContactList.value);
        deleteAccount();
    }

    const deleteAccount= async()=>{
        let items=logValue.ContactList.value
        items=items.filter(item=>item.name!==route.params.name)
        logValue.ContactList.setFunc([...items])
        navigation.navigate('home')

        // deleting from the server
        const docRef= doc(db, "Chat",auth.currentUser.uid);
        const docSnap= await getDoc(docRef);
        if(docSnap.data()){
            let data= docSnap.data();
            console.log('before: ', data)
            delete data[route.params.name]
            console.log('after :', data);
            await setDoc(docRef,data)
        }
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