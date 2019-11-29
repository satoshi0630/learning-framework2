import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.text1]}>おはよう！</Text>
      <Text style={[styles.text, styles.text2]}>こんにちは！</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text1: {
    color: '#f00',
  },
  text2: {
    color: '#00f',
  }
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
