import React from 'react';
import { View, StyleSheet } from 'react-native';
import PainelDeControleScreen from './screens/PainelDeControleScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <PainelDeControleScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});