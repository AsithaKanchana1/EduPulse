import React from 'react';
import { View, Text, Button } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Payment Calculation Page</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default PaymentScreen;
