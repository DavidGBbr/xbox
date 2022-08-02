import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import imgLogo from '../../assets/logo.png';
import imgConsole from '../../assets/console-1-2.png';
import imgJogos from '../../assets/jogo-1.png';
import imgCloud from '../../assets/xcloud-1.png';

export default function TelaInicial(props) {
 return (
   <View style={styles.container}>

    <Image source={imgLogo} style={styles.logo} />
    <Text style={styles.title}>Xbox</Text>
    <Text style={styles.description}>Xbox é uma marca de consoles criada pela microsoft. Toque nos cards para conhecer.</Text>


    <Pressable 
    style={styles.card} 
    onPress={()=>{props.navigation.navigate('Consoles')}}>
      <Image source={imgConsole} style={styles.icon}/>
      <Text style={styles.cardText}>Conheça os consoles</Text>
    </Pressable>

    <Pressable
    style={styles.card} 
    onPress={ ()=>{ props.navigation.navigate('Jogos') } }>
      <Image source={imgJogos} style={styles.icon}/>
      <Text style={styles.cardText}>Conheça os jogos</Text>
    </Pressable>

    <Pressable 
    style={styles.card} 
    onPress={()=>{props.navigation.navigate('Nuvem')}}>
      <Image source={imgCloud} style={styles.icon}/>
      <Text style={styles.cardText}>Conheça o xCloud</Text>
    </Pressable>
   </View>
  );
}