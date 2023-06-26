import { Text, View, StyleSheet, Image } from 'react-native';
import LogButton from '../components/LogButton';

const Page0 = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          alignSelf: 'center',
        }}>
        Welcome
      </Text>
      <View style={styles.btnGroup}>
        <LogButton text={'Sign up'} dark={false} />
        <LogButton text={'Sign in'} dark={true} />
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#31bbff',
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 35,
    justifyContent: 'flex-end',
  },
  btnGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
});

export default Page0;
