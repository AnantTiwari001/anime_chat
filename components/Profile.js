import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';

const Profile=({name})=>{
    return(
        <View style={styles.container}>

      <Image source={require('../assets/anime_profile.jpg')} style={styles.image} />
      <Text
        style={{
          fontSize: 25,
          alignSelf: 'center',
        }}>
        {name}
      </Text>
      <Text
        style={{
          fontSize: 12,
          alignSelf: 'center',
          color: 'rgba(0,0,0,0.5)',
        }}>
        Online
      </Text>
    </View>
    )
}

const styles= StyleSheet.create({
    container: {
        // borderWidth:1,
        alignSelf: 'center',
      },
      image: {
        width: 130,
        height: 130,
        borderRadius: 65,
      },
})

export default Profile;