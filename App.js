import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ExerciseList from './ExerciseList';
import WorkoutDetailScreen from './WorkoutDetail';
import WorkoutListScreen from './WorkoutList';

const Stack = createStackNavigator();

const App = () => {
  const handleLogin = (userData, navigation) => {
    console.log('Login successful!', userData);
    navigation.navigate('ExerciseList');
  };

  const handleRegister = (userData, navigation) => {
    console.log('Registration successful!', userData);
    navigation.navigate('Login');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={(props) => (
            <LoginScreen
              {...props}
              onLogin={(userData) => handleLogin(userData, props.navigation)}
              onRegisterPress={() => props.navigation.navigate('Register')}
            />
          )}
        />
        <Stack.Screen
          name="Register"
          component={(props) => (
            <RegisterScreen
              {...props}
              onRegister={(userData) => handleRegister(userData, props.navigation)}
              onLoginPress={() => props.navigation.navigate('Login')}
            />
          )}
        />
        <Stack.Screen name="ExerciseList" component={ExerciseList} />
        <Stack.Screen name="WorkoutDetail" component={WorkoutDetailScreen} />
        <Stack.Screen name="WorkoutList" component={WorkoutListScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
