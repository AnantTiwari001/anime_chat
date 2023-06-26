import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import Profile from '../components/Profile';
import Media from '../components/Media';
import Header from '../components/Header';

const ProfilePage=({navigation})=>{
    return(
        <View style={{flex:1, paddingTop:20}} >
            <Header navigation={navigation} />
            <Profile />
            <Media />
        </View>
    )
}

export default ProfilePage;