import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function GalaxyScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>

      <Text style={styles.H1}>Galáxias</Text>
      <Image source={require('../assets/galaxy.jpg')} style={styles.imageGalaxy} />
      <Text style={styles.H2}>Galáxias são enormes aglomerados de estrelas, gás, poeira e matéria escura, mantidos unidos pela gravidade. Elas variam em tamanho, forma e composição, e podem conter desde milhões até trilhões de estrelas. A Via Láctea, por exemplo, é a galáxia em que o nosso sistema solar está localizado. As galáxias podem ser espirais, elípticas ou irregulares, e estão espalhadas pelo universo em grande número, formando grupos e superaglomerados. Além das estrelas, as galáxias também abrigam planetas, buracos negros e outros objetos astronômicos, sendo essenciais para a compreensão da formação e evolução do cosmos.</Text>

      <View style={styles.botoesContainer}>
        <Pressable style={styles.botao}
                  onPress={() => navigation.replace('Home')}
                >
                  <Entypo name="home" size={24} color="black" />
                                    <Text style={styles.textoBotao}>Home</Text>
        </Pressable>
        <Pressable style={styles.botao}
        onPress={() => navigation.replace('Planetas')}
        >
          <Ionicons name="planet" size={24} color="black" />
          <Text style={styles.textoBotao}>Planetas</Text>
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
    paddingTop: 120,
    paddingBottom: 20
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
    flexDirection: 'row'
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
    height: 250, 
    marginBottom: 20,
    borderRadius: 20
  }
});