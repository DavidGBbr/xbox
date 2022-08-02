import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import styles from './styles';
import console1 from '../../assets/console-1.png';
import console2 from '../../assets/console-2.png';


export default function TelaConsoles() {
 return (
  <ScrollView style={styles.container}>
    <View style={styles.card}>
      <Image source={console1} style={styles.consoleImg}/>
      <Text style={styles.title}>Xbox series s</Text>
      <Text style={styles.subtitle}>Desempenho de última geração no menor Xbox de todos os tempos.</Text>
      <Text style={styles.description}>O series S é pra quem busca jogos de nova geração gastando pouco, é o console mais barato da nova geração.
      Ele é o equilibrio entre gráfico e performance.</Text>
    </View>

    <View style={styles.card}>
      <Image source={console2} style={styles.consoleImg}/>
      <Text style={styles.title}>Xbox series x</Text>
      <Text style={styles.subtitle}>O Xbox mais rápido e poderoso de todos os tempos.</Text>
      <Text style={styles.description}>O Series X é pra quem quer poder absoluto. O console mais poderoso do mercado, excelência em gráficos e 
      performance.</Text>
    </View>
  </ScrollView>
  );
}