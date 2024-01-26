// WorkoutList.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const WorkoutList = ({ route, navigation }) => {
  const { generatedWorkouts } = route.params;

  const handleWorkoutSelect = (workout) => {
    navigation.navigate('WorkoutDetail', { workout });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Generated Workouts</Text>
      {generatedWorkouts.map((workout, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleWorkoutSelect(workout)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{workout}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default WorkoutList;
