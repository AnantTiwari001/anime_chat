import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'

const NotificationPage=({navigation})=>{
    const items= [
        {name:'Mindful moments',link:'Mindful moment'},
        {name:'Recommendations', link:'Recommendations'},
        {name:'Meditation reminders', link:'Set a reminder'},
        {name:'Wake Up Reminders',link:'Set a reminder'},
        {name:'Bedtime reminders', link:'Set a reminder'}
    ]
    const handleClick=(page)=>{
        page&&navigation.navigate(page);
    }
    return(
        <ScrollView style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity style={styles.item} key={index} onPress={()=>handleClick(item.link)} >
          <Text style={{ fontSize: 17, fontWeight: 600 }}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
      // backgroundColor:'#b9bdbd',
      backgroundColor: "white",
      flex: 1,
    },
    item: {
      paddingVertical: 20,
      paddingHorizontal: 25,
      borderBottomColor: "#ecf0f1",
      borderBottomWidth: 2,
    }
  });

export default NotificationPage;