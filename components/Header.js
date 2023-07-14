import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Dimensions } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

const Header=({navigation, profile, absolute})=>{
      // <Ionicons name="ios-add-circle-outline" size={40} color="black" />
    const handleBack=()=>{
      console.log(navigation.goBack());
    //   console.log('back done lol!');
    }
    const rough=()=>{
      // console.log('logging rough!');
      // console.log(profile)
      // navigation.navigate('profile');
    }
  return(
    <View style={[styles.container, absolute&&{position:'absolute', top:0, width:Dimensions.get('window').width }]}>
    <TouchableOpacity onPress={handleBack} >
      <Text style={styles.arrow}>←</Text> 
    </TouchableOpacity>
    {profile?(
    <TouchableOpacity style={styles.profile} onPress={rough} >
      <Image source={{uri: profile.url}} style={styles.image} />
      <View>
        <Text>{profile.name}</Text>
        <Text style={{color:'rgba(0,0,0,0.5)', fontSize:12}} >{profile.status}</Text>
      </View>
    </TouchableOpacity>
    ):(null)}
    
    <TouchableOpacity  >
    <Text style={styles.dropDown} >⋮</Text>
    </TouchableOpacity>
    </View>
  )
}




const styles= StyleSheet.create({
  container:{
    maxHeight:60,
    flexDirection:'row',
    // width:'100%',
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:15,
    backgroundColor:'white',
    zIndex:7,
    // position:'absolute',
    // top:0
    // borderWidth:1
  },
  arrow:{
    fontSize:30,
    color:'grey',
    flex:1
  },
  dropDown:{
    fontSize:20
  },
  image:{
    width:50,
    height:50,
    borderRadius:25,
    marginRight:12,
    borderWidth:1
  },
  profile:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  }
})

export default Header;