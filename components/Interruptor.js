import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Interruptor = ({ nome }) => {
  const [ligado, setLigado] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {nome}: {ligado ? 'Ligado' : 'Desligado'}
      </Text>
      <Button
        title={ligado ? 'Desligar' : 'Ligar'}
        onPress={() => setLigado(!ligado)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Interruptor;