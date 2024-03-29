import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Groups from './components/Groups.js'
import GroupFeed from './components/Group/GroupFeed.js';
import Post from './components/Group/Post.js';

export default function App() {
  return (
    <Post />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
