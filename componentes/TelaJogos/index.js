import React from 'react';
import { ScrollView ,View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import imgCyber from '../../assets/jogo-2.png';
import imgForza from '../../assets/jogo-3.png';
import imgHalo from '../../assets/jogo-4.png';

export default function TelaJogos() {
 return (
   <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Jogos em 4k</Text>
      <Text style={styles.description}>Os principais jogos estão aqui. Veja abaixo três exemplos de grande sucesso.</Text>

      <View style={styles.box}>
        <ImageBackground source={imgForza} style={styles.card}>
          <Text style={styles.cardTitle}>Forza Horizon 5</Text>
        </ImageBackground>
        <Text style={styles.paragraph}>Forza Horizon 5 é um jogo de corrida. É o quinto jogo da série Forza Horizon e o décimo segundo título 
        principal da franquia Forza. O jogo se passa em uma representação ficcional do México.</Text>
      </View>

      <View style={ styles.box }>
        <ImageBackground source={ imgCyber } style={ styles.card }>
          <Text style={ styles.cardTitle }>Cyberpunk 2077</Text>
        </ImageBackground>

        <Text style={ styles.paragraph }>Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado 
        pela CD Projekt.</Text>
      </View>

      <View style={ styles.box }>
        <ImageBackground source={ imgHalo } style={ styles.card }>
          <Text style={ styles.cardTitle }>Halo 5</Text>
        </ImageBackground>

        <Text style={ styles.paragraph }>Halo 5: Guardians é um videojogo de tiro em primeira pessoa, parte da franquia Halo e sequência de Halo 4.</Text>
      </View>
    </View>
   </ScrollView>
  );
}