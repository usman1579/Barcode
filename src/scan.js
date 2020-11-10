import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from './Component/Button';
import { Container } from './Component/Styles';

export default function Scan({ navigation }) {
  return (
    <View style={Container}>
      <Button
        Text='Scan Product'
        onPress={() => navigation.navigate('ItemDetail')}
      />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

