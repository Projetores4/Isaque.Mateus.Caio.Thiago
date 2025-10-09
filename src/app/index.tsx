import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.logo}>🌿 SOS Mata Atlântica</Text>
      </View>
      
      {/* Conteúdo Principal */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Proteja a Mata Atlântica</Text>
        
        <View style={styles.card}>
          <Text style={styles.description}>
            A <Text style={styles.highlight}>Fundação SOS Mata Atlântica</Text> é uma organização 
            brasileira que atua há mais de 30 anos na proteção deste bioma tão importante 
            e ameaçado.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Nossa Missão</Text>
          <Text style={styles.description}>
            Defender e conservar a Mata Atlântica, promover o desenvolvimento 
            sustentável e engajar a sociedade na causa ambiental.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Nossas Conquistas</Text>
          <View style={styles.achievements}>
            <Text style={styles.achievement}>🌱 40M+ árvores plantadas</Text>
            <Text style={styles.achievement}>💧 2.500 municípios monitorados</Text>
            <Text style={styles.achievement}>👥 3M+ pessoas impactadas</Text>
            <Text style={styles.achievement}>🛡️ 100+ áreas protegidas</Text>
          </View>
        </View>

        <View style={[styles.card, styles.urgentCard]}>
          <Text style={styles.urgentTitle}>Por que sua ajuda é importante?</Text>
          <Text style={styles.urgentText}>
            A Mata Atlântica originalmente cobria 1,3 milhões de km², mas hoje 
            restam apenas <Text style={styles.highlight}>12.4%</Text> da floresta original. 
            Sua doação ajuda a reverter este quadro!
          </Text>
        </View>
      </ScrollView>

      {/* Botão Doar Fixo na Parte Inferior */}
      <View style={styles.footer}>
        <Link href="/donate" asChild>
          <TouchableOpacity style={styles.donateButton}>
            <Text style={styles.donateButtonText}>DOAR AGORA</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: '#2E7D32',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginBottom: 24,
    marginTop: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: '#444',
  },
  achievements: {
    marginTop: 8,
  },
  achievement: {
    fontSize: 15,
    color: '#333',
    marginBottom: 8,
    paddingLeft: 8,
  },
  urgentCard: {
    backgroundColor: '#FFF3E0',
    borderLeftWidth: 6,
    borderLeftColor: '#FF9800',
  },
  urgentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E65100',
    marginBottom: 8,
  },
  urgentText: {
    fontSize: 15,
    lineHeight: 21,
    color: '#555',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  footer: {
    padding: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  donateButton: {
    backgroundColor: '#2E7D32',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  donateButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});