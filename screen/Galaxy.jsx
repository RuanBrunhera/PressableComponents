import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';

export default function GalaxyScreen({ navigation }) {
  return (
      <ScrollView>
    <View style={styles.container}>
      <View style={styles.box}>

      <Text style={styles.H1}>Planetas</Text>
      <Image source={require('../assets/planeta.jpg')} style={styles.imageGalaxy} />
      <Text style={styles.H2}>O sistema solar é um conjunto de corpos celestes que orbitam o Sol, a estrela localizada no centro desse sistema. Ele é composto por oito planetas principais — Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno — além de seus satélites naturais, como a Lua, que orbita a Terra. Também fazem parte do sistema solar os planetas anões, como Plutão, e uma infinidade de asteroides, cometas e meteoroides.</Text>

      <Image source={require('../assets/planeta2.jpg')} style={styles.imageGalaxy} />
      <Text style={styles.H2}>Cada planeta possui características únicas. Os quatro planetas mais próximos do Sol — Mercúrio, Vênus, Terra e Marte — são chamados de planetas rochosos, pois possuem superfície sólida. Já os mais afastados — Júpiter, Saturno, Urano e Netuno — são conhecidos como planetas gasosos ou gigantes, compostos principalmente por gases e sem uma superfície sólida definida. As órbitas dos planetas ao redor do Sol seguem trajetórias elípticas, e o tempo que cada um leva para completar uma volta varia conforme sua distância do Sol.</Text>

      <Image source={require('../assets/planeta3.jpg')} style={styles.imageGalaxy} />
      <Text style={styles.H2}>Além dos planetas e outros corpos celestes, o sistema solar é envolvido por uma vasta região chamada de heliosfera, onde o vento solar — um fluxo de partículas carregadas emitido pelo Sol — ainda exerce influência. O estudo do sistema solar é essencial para entender a origem e a evolução do nosso planeta, além de nos ajudar a buscar sinais de vida em outros mundos e compreender melhor o funcionamento do universo.</Text>

      <View style={styles.botoesContainer}>
        <Pressable style={styles.botao}
          onPress={() => navigation.replace('Home')}
        >
          <Text style={styles.textoBotao}>Home</Text>
        </Pressable>
        <Pressable style={styles.botao}>
          <Text style={styles.textoBotao}>Galáxias</Text>
        </Pressable>
        <Pressable style={styles.botao}>
          <Text style={styles.textoBotao}>Buraco negro</Text>
        </Pressable>
      </View>
      </View>
    </View>
      </ScrollView>
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