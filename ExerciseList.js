// ExerciseList.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ExerciseList = ({ navigation }) => {
  const [selectedMartialArt, setSelectedMartialArt] = useState('wrestling');
  const [showWorkouts, setShowWorkouts] = useState(false);

  const generateRandomWorkouts = (martialArt) => {
    const workoutsByMartialArt = {
      wrestling: ['Double Leg Takedown', 'Single Leg Takedown', 'Sprawls', 'Front Headlock', 'Fireman\'s Carry', 'Ankle Pick'],
      boxing: ['Jab', 'Cross', 'Hook', 'Uppercut', 'Bob and Weave', 'Slip and Counter', 'Body Hook'],
      muayThai: ['Jab', 'Cross', 'Teep Kick', 'Elbow Strike', 'Knee Strike', 'Clinch Knees', 'Low Kick', 'High Kick'],
      jiuJitsu: ['Shrimp', 'Single x', 'Back Takes', 'Knee Cuts', 'Triangle Choke', 'Armbar from Guard', 'Omoplata', 'Kimura'],
    };

    const selectedWorkouts = workoutsByMartialArt[martialArt] || [];
    const shuffledWorkouts = selectedWorkouts.sort(() => Math.random() - 0.5);
    return shuffledWorkouts.slice(0, 4);
  };

  const handleGenerateWorkout = () => {
    setShowWorkouts(true);

    // Navigate to the new screen passing generated workouts
    navigation.navigate('WorkoutList', { generatedWorkouts: generateRandomWorkouts(selectedMartialArt) });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Martial Art</Text>
      <Picker
        selectedValue={selectedMartialArt}
        onValueChange={(martialArt) => setSelectedMartialArt(martialArt)}
        style={styles.picker}
        itemStyle={styles.pickerItem}
      >
        <Picker.Item label="Wrestling" value="wrestling" />
        <Picker.Item label="Boxing" value="boxing" />
        <Picker.Item label="Muay Thai" value="muayThai" />
        <Picker.Item label="Jiu Jitsu" value="jiuJitsu" />
      </Picker>
      <TouchableOpacity onPress={handleGenerateWorkout} style={styles.button}>
        <Text style={styles.buttonText}>Generate Workout</Text>
      </TouchableOpacity>
      
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
  picker: {
    height: 70,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    marginTop:20,
    backgroundColor: '#ffffff',
  },
  pickerItem: {
    backgroundColor: '#ffffff',
    marginBottom: 20,
    marginTop:5,
    height:60,
  },
  button: {
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 200,
    marginTop:200,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  generatedWorkoutText: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },
});

export default ExerciseList;
