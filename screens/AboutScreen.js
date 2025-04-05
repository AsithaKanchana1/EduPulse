import React from 'react';
import { View, Text, Button } from 'react-native';

const AboutScreen = ({ navigation }) => {
  return (
    <View>
      <Text>This is the About page.</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default AboutScreen;
