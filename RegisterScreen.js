// RegisterScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, ActivityIndicator, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({ onRegister, onLoginPress }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      // Simple validation
      if (!email || !password) {
        setError('Both email and password are required');
        return;
      }

      // Reset error state when registration is attempted
      setError('');

      // Simulate asynchronous registration process
      setLoading(true);

      // For testing purposes, simulate a successful registration without making a network request
      // You may replace this with actual server registration logic
      const simulatedToken = 'simulated-token';

      // Store the token locally
      await AsyncStorage.setItem('userToken', simulatedToken);

      // Call the onRegister prop with user registration details
      onRegister({ email, token: simulatedToken });

    } catch (error) {
      console.error('Error during registration:', error);
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
      <Button title="Register" onPress={handleRegister} />

      {/* Add a login button */}
      <Button title="Login" onPress={onLoginPress} />

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

export default RegisterScreen;
