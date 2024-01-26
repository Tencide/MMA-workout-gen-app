import React, { useState } from 'react';
import { View, TextInput, Button, ActivityIndicator, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ onLogin, onRegisterPress }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Simple validation
      if (!email || !password) {
        setError('Both email and password are required');
        return;
      }

      // Reset error state when login is attempted
      setError('');

      // Simulate asynchronous login process
      setLoading(true);

      // For testing purposes, simulate a successful login without making a network request
      // You may replace this with actual server authentication logic
      // Assume that email and password are valid for testing
      const simulatedToken = 'simulated-token';

      // Store the token locally
      await AsyncStorage.setItem('userToken', simulatedToken);

      // Call the onLogin prop with user login details
      onLogin({ email, token: simulatedToken });

    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={onRegisterPress} />
      
      {loading && <ActivityIndicator size="small" color="#0000ff" />}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default LoginScreen;
