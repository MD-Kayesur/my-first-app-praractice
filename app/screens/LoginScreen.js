import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.signUpText}>
        If you don’t have an account,
      </Text>

      <Pressable onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signUpLink}> Sign up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 14,
  },
  signUpLink: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
