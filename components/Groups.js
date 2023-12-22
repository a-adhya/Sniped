import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import { Icon } from '@gluestack-ui/themed';
import Ionicons from '@expo/vector-icons/Ionicons'
import AntDesign from '@expo/vector-icons/AntDesign'



//Groups Component
const Groups = () => {

  //Helper to render each group item
  const renderGroup = ({ item }) => (
  //Group Item contains Text
  <TouchableOpacity style={styles.group}>
    <Text style={styles.groupName}>{item.name}</Text>
  </TouchableOpacity>
);

  return (
    <View className="outer-container" style={styles.outerContainer}>  
    <View className="top-menu" style={styles.topMenu}>
        <TouchableOpacity styles={styles.iconContainer}>
          <AntDesign name='pluscircleo' size={38} color="#5b5b5b"/>
        </TouchableOpacity>
        <View style={styles.snipedTextContainer}>
          <Text style={styles.snipedText}>Sniped!</Text>
        </View>
        <TouchableOpacity styles={styles.iconContainer}>
          <Ionicons name='ios-settings' size={38} color="#5b5b5b"/>
        </TouchableOpacity>
    </View>

    <View className="groups-container" style={styles.groupContainer}>
        <FlatList
        data={groups}
        renderItem={renderGroup}
        keyExtractor={group => group.id}
        style={styles.list}
        />
        <TouchableOpacity style={styles.createSnipeButton}>
            <Text style={styles.snipeButtonText}>New Snipe</Text>
      </TouchableOpacity>
    </View>

    </View>
  )
};

export const styles = StyleSheet.create({
 outerContainer:{
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'stretch',
  width: '100%'
 },
 topMenu:{
  flex: 2,
  width: '100%',
  backgroundColor: '#999999',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 10
 },
 groupContainer:{
  flex: 8,
  width: '100%',
  backgroundColor: '#F9F9F9',
 },
 snipedTextContainer:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
 },
 iconContainer: {
  width: 50,
  alignItems: 'center'
 },
 snipedText: {
  fontSize: 50,
  fontWeight: 'bold',
  color: '#fff',
 },

  list: { 
    paddingHorizontal: '5%', // Centering the items and covering 80% width
    paddingTop: 50, // Space at the top
    paddingBottom: 20, // Space at the bottom
   },
  group: { 
    backgroundColor: '#c8c2c2', // Example background color
    borderRadius: 10, // Rounded corners
    width: '100%', // 80% of screen width (taking paddingHorizontal into account)
    padding: 45, // Padding inside each item
    marginBottom: 15, // Space between items
    alignItems: 'center', // Center content horizontally
   },
  groupName: {/* styles for group name */},
  avatar: { /* styles for avatar image */ },
  groupName: { 
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
   },
  createSnipeButton: {
    position: 'absolute',
    bottom: 20, 
    alignSelf: 'center', 
    backgroundColor: '#ff6347', // Example color
    borderRadius: 30, // Rounded corners
    paddingVertical: 20,
    paddingHorizontal: 50,
    elevation: 5, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1.41,

  },
  snipeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

const groups = [{
      id: '1',
      name: 'For The Plot',
    },
    {
      id: '2',
      name: 'Buck it We Fall'
    },
    {
      id: '3',
      name: 'Plegends'
    },
    {
      id: '4',
      name: 'asr buds'
    },
    {
      id: '5',
      name: 'Main Lin'
    },
    {
      id: '6',
      name: 'QAM',
    }
    // more groups...
];
  

export default Groups;