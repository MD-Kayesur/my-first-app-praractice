import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image,TouchableWithoutFeedback, TouchableOpacity, Text, View,Button } from 'react-native';
import { useDimensions,useDeviceOrientation } from '@react-native-community/hooks';
// import { StyleSheet, Text, View, Button } from 'react-native';
export default function App() {
    
  return (
 <View
  style={{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-evenly',
      flexShrink:1,
  }}
>
  <View
    style={{
      width: 100,
      height: 100,
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center',
    
    }}
  />

  <View
    style={{
      width: 120,
      height: 100,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  />
  <View
    style={{
      width: 120,
      height: 100,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  />
   
 

  <StatusBar style="auto" />
</View>

  );
}

 
   
 
