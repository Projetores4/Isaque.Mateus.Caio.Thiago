import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView, 
  TouchableOpacity,
  TextInput,
  Alert 
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function DonateScreen() {
  const router = useRouter();
  const [donationAmount, setDonationAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');

  const quickAmounts = ['25', '50', '100', '250'];

  const handleDonate = () => {
    if (!donationAmount) {
      Alert.alert('Erro', 'Por favor, informe um valor para doação.');
      return;
    }

    Alert.alert(
      'Confirmação de Doação',
      `Obrigado por doar R$ ${donationAmount} para a Mata Atlântica!`,
      [
        { 
          text: 'Confirmar', 
          onPress: () => {
            Alert.alert('Sucesso', 'Doação realizada com sucesso!');
            router.back();
          }
        },
        { text: 'Cancelar', style: 'cancel' }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho com botão voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2E7D32" />
        </TouchableOpacity>
        <Text style={styles.logo}>Fazer Doação</Text>
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Sua Doação Faz a Diferença</Text>
        
        <View style={styles.card}>
          <Text style={styles.description}>
            Cada contribuição nos ajuda a proteger e recuperar a Mata Atlântica, 
            um dos biomas mais importantes e ameaçados do mundo.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Escolha o valor:</Text>
          
          <View style={styles.quickAmounts}>
            {quickAmounts.map((amount) => (
              <TouchableOpacity
                key={amount}
                style={[
                  styles.amountButton,
                  selectedAmount === amount && styles.amountButtonSelected
                ]}
                onPress={() => {
                  setSelectedAmount(amount);
                  setDonationAmount(amount);
                }}
              >
                <Text style={[
                  styles.amountText,
                  selectedAmount === amount && styles.amountTextSelected
                ]}>
                  R$ {amount}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.orText}>ou</Text>

          <TextInput
            style={styles.input}
            placeholder="Outro valor (R$)"
            keyboardType="numeric"
            value={donationAmount}
            onChangeText={setDonationAmount}
            onFocus={() => setSelectedAmount('')}
          />
        </View>

        <View style={[styles.card, styles.infoCard]}>
          <Text style={styles.infoTitle}>O que sua doação pode fazer:</Text>
          <Text style={styles.infoItem}>• R$ 25 = 5 mudas nativas plantadas</Text>
          <Text style={styles.infoItem}>• R$ 50 = Monitoramento de rio por 1 mês</Text>
          <Text style={styles.infoItem}>• R$ 100 = Educação ambiental para 10 crianças</Text>
          <Text style={styles.infoItem}>• R$ 250 = Proteção de área por 6 meses</Text>
        </View>
      </ScrollView>

      {/* Botão Confirmar Doação */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirmButton} onPress={handleDonate}>
          <Text style={styles.confirmButtonText}>
            CONFIRMAR DOAÇÃO DE R$ {donationAmount || '0'}
          </Text>
        </TouchableOpacity>
        
        <Link href="/" asChild>
          <TouchableOpacity style={styles.backLink}>
            <Text style={styles.backLinkText}>Voltar para o início</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    padding: 5,
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  placeholder: {
    width: 24,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginBottom: 20,
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
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: '#444',
    textAlign: 'center',
  },
  quickAmounts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  amountButton: {
    width: '48%',
    marginBottom: 10,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#2E7D32',
    alignItems: 'center',
  },
  amountButtonSelected: {
    backgroundColor: '#2E7D32',
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  amountTextSelected: {
    color: 'white',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#666',
    fontSize: 14,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: '#E8F5E8',
    borderLeftWidth: 4,
    borderLeftColor: '#2E7D32',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
  },
  infoItem: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
    lineHeight: 20,
  },
  footer: {
    padding: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  confirmButton: {
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
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backLink: {
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  backLinkText: {
    color: '#666',
    fontSize: 14,
  },
});