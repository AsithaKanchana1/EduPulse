import React from 'react';
import { View, Text, Button } from 'react-native';

const NewsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Latest News and Updates Page</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default NewsScreen;
