// GenerateWorkout.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GenerateWorkout = ({ navigation, route }) => {
    const { workouts, martialArt } = route.params;
  
    // Add a null check for workouts
    if (!workouts) {
      return (
        <View style={styles.container}>
          <Text style={styles.heading}>No workouts available</Text>
        </View>
      );
    }
  
    const handleWorkoutSelect = (workout) => {
      navigation.navigate('WorkoutDetail', { workout });
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Generated Workouts</Text>
        {workouts.map((workout, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleWorkoutSelect(workout)}
            style={styles.workoutButton}
          >
            <Text style={styles.workout}>{workout}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  workoutButton: {
    backgroundColor: '#3498db',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  workout: {
    fontSize: 16,
    color: 'white',
  },
});

export default GenerateWorkout;
