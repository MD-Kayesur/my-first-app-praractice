// import { Button, Pressable, StyleSheet, Text, View ,Image} from 'react-native';
// import React from 'react';
// import { ImageBackground } from 'react-native';
// export default function WelcomeScreen() {
    
//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         style={styles.image}
//         source={require('../assets/mantle-client.jpg')}
//       >
//        <View style={styles.logotext}>
//          <Image  source={require('../assets/favicon.png')}></Image>
//          <Text style={styles.logoText}>Kayes</Text>
//        </View>

//         <Text style={styles.text}> Weclome Back </Text>
//         <Text style={styles.text}> Login to continue </Text>

  
//             <Pressable
//           style={styles.button}
//           onPress={() => console.log('Login pressed')}
//         >
//           <Text style={styles.buttonText}>Login</Text>
//         </Pressable>
//           <Text style={styles.signUpText}>if dont have accoutn  <Pressable onPress={() => console.log('sign up pressed')}><Text style={styles.signUpText}>sign up</Text></Pressable> please</Text> 
        
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     width: '65%',
//     height: 45,
//     backgroundColor: '#2563eb',
//     borderRadius: 10,
//     marginTop: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     hoverOpacity: 0.8,
    
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   signUpText: {
//     color: 'white',
//     fontSize: 16,
//     marginTop: 10,
//   },
//   text: {
//     color: 'white',
//     fontSize: 40,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//     logotext: {
//     position: 'absolute',
//     display:'',
//      flexDirection: 'row',    
//     alignItems: 'center',    
//     justifyContent: 'center',  
//     gap: 8, 
//     top: 30,
//     left: 30,
//     },
//     logoText:{
//         fontSize:30,
//         fontWeight:'bold',
//         color:'white',
//         textAlign:'center',
//     }

// });
