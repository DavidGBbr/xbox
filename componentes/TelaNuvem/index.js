import React from 'react';
import { ImageBackground, Image, Text} from 'react-native';
import styles from './styles';
import imgCloud from '../../assets/xcloud-2.png';
import backImg from '../../assets/fundo-xcloud.png';

export default function TelaNuvem() {
 return (
  <ImageBackground source={backImg} style={styles.container}>
    <Text style={styles.title}>Xbox Cloud Gaming</Text>
    <Text style={styles.description}>Serviço de streaming de jogos</Text>
    <Text style={styles.paragraph}>Jogue mais de 100 jogos de console de alta qualidade no seu dispositivo favorito.</Text>
    <Text style={styles.paragraph}>Desktop, Notebook, console ou até mesmo celular pode se tornar um XBOX.</Text>
    <Text style={styles.paragraph}>Através de uma assinatura você terá um XBOX virtual sempre que precisar.</Text>
    <Image source={imgCloud} style={styles.img}/>
  </ImageBackground>
  );
}