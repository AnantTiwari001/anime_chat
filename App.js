import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/HomeStack';
import FeedbackPage from './components/Feedback';

export default function App() {
  return (
    <>
      {/* <Navigator /> */}
      <FeedbackPage />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
