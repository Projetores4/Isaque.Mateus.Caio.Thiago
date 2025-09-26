import React from 'react-native';
import {View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import { styles } from './meu-app/src/style'

// URL de uma imagem exemplo - substitua pela sua logo
const LOGO_IMAGE = 'https://via.placeholder.com/150/2E8B57/FFFFFF?text=MA';

const Home = () => {
  const historicoFeitos = [
    {
      ano: '1986',
      feito: 'Fundação da ONG Mata Atlântica com o objetivo de preservar um dos biomas mais ameaçados do Brasil'
    },
    {
      ano: '1990',
      feito: 'Primeiro grande projeto de reflorestamento com plantio de 50.000 mudas nativas'
    },
    {
      ano: '1998',
      feito: 'Criação do programa de educação ambiental que já atingiu mais de 100.000 estudantes'
    },
    {
      ano: '2005',
      feito: 'Reconhecimento internacional pelo trabalho de conservação de espécies ameaçadas'
    },
    {
      ano: '2012',
      feito: 'Expansão para 10 estados brasileiros com projetos locais de preservação'
    },
    {
      ano: '2020',
      feito: 'Digitalização dos projetos e criação de plataformas online para maior alcance'
    },
    {
      ano: '2023',
      feito: 'Mais de 1 milhão de árvores plantadas e 50.000 hectares de área preservada'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Linha verde no topo */}
      <View style={styles.greenLine} />
      
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image 
            source={{ uri: LOGO_IMAGE }} 
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.headerText}>
          <Text style={styles.title}>Mata Atlântica</Text>
          <Text style={styles.subtitle}>Preservando desde 1986</Text>
        </View>
      </View>

      {/* Conteúdo principal */}
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Nossa História e Conquistas</Text>
        
        {historicoFeitos.map((item, index) => (
          <View key={index} style={styles.historyCard}>
            <Text style={styles.year}>{item.ano}</Text>
            <Text style={styles.achievement}>{item.feito}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;