import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';

export default function BlackHoleScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>

      <Text style={styles.H1}>Buracos negros</Text>
      <Image source={require('../assets/buracoNegro.jpg')} style={styles.imageGalaxy} />
      <Text style={styles.H2}>Buracos negros são regiões do espaço-tempo com uma gravidade tão intensa que nada, nem mesmo a luz, consegue escapar de sua atração. Eles se formam quando estrelas muito massivas colapsam ao fim de seu ciclo de vida, concentrando toda sua massa em um ponto extremamente denso, chamado de singularidade. A área ao redor da singularidade, onde a atração gravitacional é mais forte, é chamada de horizonte de eventos. Embora buracos negros não possam ser observados diretamente, os astrônomos detectam sua presença através dos efeitos que causam em objetos ao redor, como a distorção da luz ou a movimentação de estrelas próximas. Existem diferentes tipos de buracos negros, como os estelares, formados pelo colapso de estrelas, e os supermassivos, que residem no centro das galáxias e podem ter milhões ou até bilhões de vezes a massa do Sol.</Text>

      <View style={styles.botoesContainer}>
        <Pressable style={styles.botao}
          onPress={() => navigation.replace('Home')}
        >
          <Text style={styles.textoBotao}>Home</Text>
        </Pressable>
        <Pressable style={styles.botao}
        onPress={() => navigation.replace('Planetas')}
        >
          <Text style={styles.textoBotao}>Planeta</Text>
        </Pressable>
        <Pressable style={styles.botao}
        onPress={() => navigation.replace('Galaxias')}
        >
          <Text style={styles.textoBotao}>Galáxias</Text>
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
    justifyContent: 'center'
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