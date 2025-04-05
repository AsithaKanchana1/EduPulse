import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to EduPulse!</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#4CAF50' }]}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.buttonText}>Go to About</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#2196F3' }]}
        onPress={() => navigation.navigate('EligibilityChecker')}
      >
        <Text style={styles.buttonText}>Go to Eligibility Calculation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#FF9800' }]}
        onPress={() => navigation.navigate('Payment')}
      >
        <Text style={styles.buttonText}>Go to Payment Calculation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#9C27B0' }]}
        onPress={() => navigation.navigate('News')}
      >
        <Text style={styles.buttonText}>Go to News</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#F44336' }]}
        onPress={() => navigation.navigate('Updates')}
      >
        <Text style={styles.buttonText}>Go to Updates</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  heading: {
    fontSize: 30,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color:'red'
  },
  button: {
    marginVertical: 10,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    width: '95%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5, // for Android shadow
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
