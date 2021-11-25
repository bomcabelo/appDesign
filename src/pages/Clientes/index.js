import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Clientes({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Clientes</Text>
      <StatusBar style="auto" />
      <Button 
      title="Produtos"
      onPress={() => navigation.navigate('Produtos', {nome: 'Hugo Vasconcelos'})}>

      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
