import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [base, setBase] = useState(0);
  const [altura, setAltura] = useState(0);

  const b = parseFloat(base);
  const h = parseFloat(altura);

  const area = Number(b * h / 2).toFixed(2) + " cm²";

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#2dd5fd', '#22c393']}
        style={styles.linearGradient}
      >
        <Text style={styles.title}>Triangle Calculator</Text>

        <View style={styles.inputs}>
          <TextInput
            keyboardType="numeric"
            placeholder="Digite a base"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            style={styles.input}
            value={base}
            onChangeText={setBase}
          />
          <TextInput
            keyboardType="numeric"
            placeholder="Digite a altura"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            style={styles.input}
            value={altura}
            onChangeText={setAltura}
          />
        </View>

        <Text style={styles.subtitle}>Area</Text>
        <Text style={[styles.input, styles.result]}>{area}</Text>

        <StatusBar style="auto" />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    fontFamily: 'Unispace',
  },

  linearGradient: {
    alignItems: 'center',

    height: '100%',
    width: '100%',
  },
  
  title: {
    marginTop: 100,

    fontSize: 26,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
  },

  inputs: {
    alignItems: 'center',

    marginTop: 30,
  },

  input: {
    textAlign: 'center',

    width: 250,

    paddingVertical: 20,
    paddingHorizontal: 60,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 10,
    marginTop: 40,

    fontSize: 20,
  },

  subtitle: {
    marginTop: 80,

    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
  },

  result: {
    marginTop: 8,

    fontSize:28,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});