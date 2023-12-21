import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import { Icon } from '@gluestack-ui/themed';

export default Groups = ({ groups }) => {
  
    
const renderGroup = ({ group }) => (
    //Group Item contains Text
    <View style={styles.group}>
      <Text style={styles.groupName}>{group.name}</Text>
    </View>
  );
  
  return (
    <View className="outer-container" style={styles.outerContainer}>
    /* 
    View
        TopMenu
            Add Group Icon (Icon)
            Sniped Text (Text)
            Settings (Icon)
        RestOfContainer
            Group Stack (FlatList Component)
            SnipeButton (TouchableOpacity)
    */
    
    <View className="top-menu" style={styles.topMenu}>
        <Icon>Group Icon</Icon>
        <Text>Sniped!</Text>
        <Icon>Settings</Icon>
    </View>

    <View className="groups-container" style={styles.groupContainer}>
        <FlatList
        data={groups}
        renderItem={renderItem}
        keyExtractor={group => group.id}
        style={styles.list}
        />
        <TouchableOpacity 
        style={styles.createSnipeButton} 
        onPress={onCreateSnipe}>
            <Text>Snipe Button</Text>
      </TouchableOpacity>
    </View>

    </View>
  )
};

const styles = StyleSheet.create({
  
  outerContainer: {/*styles for outer container*/},
  topMenu: {/* styles for top menu */},
  groupContainer: {/* styles for group container */},
  list: { /* styles for group list */ },
  group: { /* styles for each group  */ },
  groupName: {/* styles for group name */},
  avatar: { /* styles for avatar image */ },
  groupName: { /* styles for group name */ },
  createSnipeButton: {/*styles for snipe button */}
});

const groups = [{
      id: '1',
      name: 'For The Plot',
      timestamp: '10:45 AM',
      avatarUrl: 'image-url-1.jpg',
    },
    // more groups...
];
  

