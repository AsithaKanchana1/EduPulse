import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to EduPulse!</Text>
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
      <Button title="Go to Eligibility Calculation" onPress={() => navigation.navigate('EligibilityChecker')} />
      <Button title="Go to Payment Calculation" onPress={() => navigation.navigate('Payment')} />
      <Button title="Go to News" onPress={() => navigation.navigate('News')} />
      <Button title="Go to Updates" onPress={() => navigation.navigate('Updates')} />
    </View>
  );
};

export default HomeScreen;
