import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function planetScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#252525ff' }}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.H1}>Planetas</Text>

        <Image source={require('../assets/planeta.jpg')} style={styles.imageGalaxy} />
        <Text style={styles.H2}>O sistema solar é um conjunto de corpos celestes que orbitam o Sol...</Text>

        <Image source={require('../assets/planeta2.jpg')} style={styles.imageGalaxy} />
        <Text style={styles.H2}>Cada planeta possui características únicas...</Text>

        <Image source={require('../assets/planeta3.jpg')} style={styles.imageGalaxy} />
        <Text style={styles.H2}>Além dos planetas e outros corpos celestes...</Text>

        <View style={styles.botoesContainer}>
          <Pressable style={styles.botao} onPress={() => navigation.replace('Home')}>
            <Text style={styles.textoBotao}>Home</Text>
          </Pressable>
          <Pressable style={styles.botao}>
            <Text style={styles.textoBotao}>Galáxias</Text>
          </Pressable>
          <Pressable style={styles.botao}>
            <Text style={styles.textoBotao}>Buraco negro</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#252525ff',
  },
  H1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ee9a2cff',
    textAlign: 'center',
    marginTop: 50,
  },
  H2: {
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 20,
    color: '#acacacff',
    textAlign: 'left',
    lineHeight: 24,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 30,
    marginBottom: 50,
  },
  botao: {
    backgroundColor: '#ee9a2cff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textoBotao: {
    color: '#494949ff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  imageGalaxy: {
    width: '90%',
    height: 250,
    marginBottom: 20,
    borderRadius: 20,
  },
});
