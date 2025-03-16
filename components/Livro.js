import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function Livro({ route }) {
  const { title, sinopse } = route.params;
  let imgDir;
  if (title == "O Ceifador") {
    imgDir = require('../assets/img/ceifador.jpeg')
  } else if (title == "A Nuvem") {
    imgDir = require("../assets/img/anuvem.jpeg")
  } else {
    imgDir = require("../assets/img/otimbre.jpeg")
  }
  return (
    <ScrollView>
      <View style={styles.main}>
        <Text style={styles.main__title}>{title}</Text>
        <Image style={styles.main__img} source={imgDir}/>
        <Text style={styles.main__text}>{sinopse}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    padding: 32,
  
  },
  main__title: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 8,
  },
  main__img: {
    marginBottom: 16,
  },
  main__text: {
    fontWeight: 500,
  }
});