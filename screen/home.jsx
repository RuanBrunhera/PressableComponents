import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
      
      {/* <Image source={require('./assets/alo.jpg')} style={styles.imageGalaxy} /> */}
      <Image source={require('../assets/homeImage.jpg')} style={styles.imageGalaxy} />

      <Text style={styles.H1}>Conheça um pouco sobre o universo</Text>
      <Text style={styles.H2}>Toque nos botões abaixo e conheça um pouco mais sobre o que existe no céu</Text>

      <View style={styles.botoesContainer}>
        <Pressable style={styles.botao}
          onPress={() => navigation.replace('Planetas')}
        >
          <Ionicons name="planet" size={24} color="black" />
          <Text style={styles.textoBotao}>Planetas</Text>
        </Pressable>
        <Pressable style={styles.botao}
          onPress={() => navigation.replace('Galaxias')}
          >
          <MaterialCommunityIcons name="atom" size={24} color="black" />
          <Text style={styles.textoBotao}>Galáxias</Text>
        </Pressable>
        <Pressable style={styles.botao}
          onPress={() => navigation.replace('BuracoNegro')}
        >
          <MaterialCommunityIcons name="atom-variant" size={24} color="black" />
          <Text style={styles.textoBotao}>Buraco negro</Text>
        </Pressable>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  H1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ee9a2cff',
    textAlign: 'left'
  },
  H2: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    color: '#acacacff',
    textAlign: 'left'
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: '#ee9a2cff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:  'row'
  },
  textoBotao: {
    color: '#494949ff',
    fontWeight: 'bold',
    fontSize: 17, 
    textAlign: 'center',
  },
  box: {
    marginTop: -100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  imageGalaxy:{
    width: 400, 
    height: 400, 
    marginBottom: 20,
    borderRadius: 20
  }
});