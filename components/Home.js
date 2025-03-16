import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.body}>
      <View style={styles.main}>
        <TouchableOpacity style={styles.main__boxLivro} onPress={() => {navigation.navigate("Livro1", {
          title: "O Ceifador",
          imgDir: "../assets/img/ceifador.jpeg",
          sinopse: ""
        })}}>
          <Text style={styles.boxLivro__title}>O Ceifador</Text>
          <Image style={styles.boxLivro__img}source={require('../assets/img/ceifador.jpeg')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.main__boxLivro} onPress={() => {navigation.navigate("Livro1", {
          title: "A Nuvem",
          imgDir: "../assets/img/anuvem.jpeg",
          sinopse: ""
        })}}>
          <Text style={styles.boxLivro__title}>A Nuvem</Text>
          <Image style={styles.boxLivro__img}source={require('../assets/img/anuvem.jpeg')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.main__boxLivro} onPress={() => {navigation.navigate("Livro1", {
          title: "O Timbre",
          imgDir: "../assets/img/otimbre.jpeg",
          sinopse: ""
        })}}>
          <Text style={styles.boxLivro__title}>O Timbre</Text>
          <Image style={styles.boxLivro__img}source={require('../assets/img/otimbre.jpeg')}/>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  main: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginTop: 16,
  },
  main__boxLivro: {
    display: "flex",
    padding: 16,
    marginBottom: 12,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)"
  },
  boxLivro__title: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 8,
  },
  boxLivro__img: {
    height: 299,
    width: 217,
  }
});