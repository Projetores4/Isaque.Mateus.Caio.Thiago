import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EspecieCard = ({ nome, imagem, status }) => (
  <View style={styles.card}>
    <Image source={{uri: imagem}} style={styles.image} />
    <Text style={styles.nome}>{nome}</Text>
    <Text style={styles.status}>{status}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: { padding: 15, backgroundColor: '#fff', margin: 10 },
  image: { width: 100, height: 100 },
  nome: { fontSize: 18, fontWeight: 'bold' }
});