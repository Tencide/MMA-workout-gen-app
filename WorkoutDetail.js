// WorkoutDetail.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';

const WorkoutDetail = ({ route, navigation }) => {
  const { workout } = route.params;
  const [completed, setCompleted] = useState(false);
  const [timer, setTimer] = useState(60); // Set your desired workout duration in seconds

  useEffect(() => {
    let interval;

    if (timer > 0 && !completed) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setCompleted(true);
      playCompletionSound();
    }

    return () => clearInterval(interval);
  }, [timer, completed]);

  const handleMarkAsComplete = () => {
    setCompleted(true);
    playCompletionSound();
  };

  const playCompletionSound = () => {
    const sound = new Sound('completion_sound.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.error('Error loading sound:', error);
        return;
      }
      sound.play((success) => {
        if (success) {
          console.log('Sound played successfully');
        } else {
          console.error('Error playing sound');
        }
      });
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{workout}</Text>
      <Text>{timer > 0 ? `Time Remaining: ${formatTime(timer)}` : 'Workout Completed!'}</Text>
      <TouchableOpacity
        onPress={handleMarkAsComplete}
        style={[
          styles.button,
          completed && styles.completedButton,
        ]}
        disabled={completed}
      >
        <Text style={styles.buttonText}>{completed ? 'Completed!' : 'Mark as Complete'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  completedButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default WorkoutDetail;
