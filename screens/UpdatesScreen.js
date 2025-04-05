import React from 'react';
import { View, Text, Button } from 'react-native';

const UpdatesScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Recent Updates Page</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default UpdatesScreen;
