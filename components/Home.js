import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.body}>
      <View style={styles.main}>
        <TouchableOpacity style={styles.main__boxLivro} onPress={() => {navigation.navigate("Livro", {
          title: "O Ceifador",
          sinopse: 'A humanidade venceu todas as barreiras: fome, doenças, guerras, miséria… Até mesmo a morte. Agora os ceifadores são os únicos que podem pôr fim a uma vida, impedindo que o crescimento populacional vá além do limite e a Terra deixe de comportar a população por toda a eternidade. Citra e Rowan são adolescentes escolhidos como aprendizes de ceifador - um papel que nenhum dos dois quer desempenhar. Para receberem o anel e o manto da Ceifa, os adolescentes precisam dominar a "arte" da coleta, ou seja, precisam aprender a matar. Porém, se falharem em sua missão - ou se a cumplicidade no treinamento se tornar algo mais -, podem colocar a própria vida em risco.',
        })}}>
          <Text style={styles.boxLivro__title}>O Ceifador</Text>
          <Image style={styles.boxLivro__img}source={require('../assets/img/ceifador.jpeg')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.main__boxLivro} onPress={() => {navigation.navigate("Livro", {
          title: "A Nuvem",
          sinopse: 'No segundo volume da série Scythe, a Ceifa está mais corrompida do que nunca, e cabe a Citra e Rowan descobrir como impedir que os ceifadores que não seguem os mandamentos da instituição acabem com o futuro da humanidadeEm um mundo perfeito em que a humanidade venceu a morte, tudo é regulado pela incorruptível Nimbo-Cúmulo, uma evolução da nuvem de dados. Mas a perfeição não se aplica aos ceifadores, os humanos responsáveis por controlar o crescimento populacional. Quem é morto por eles não pode ser revivido, e seus critérios para matar parecem cada vez mais imorais. Até a chegada do ceifador Lúcifer, que promete eliminar todos os que não seguem os mandamentos da Ceifa. E como a Nimbo-Cúmulo não pode interferir nas questões dos ceifadores, resta a ela observar.Enquanto isso, Citra e Rowan também estão preocupados com o destino da Ceifa. Um ano depois de terem sido escolhidos como aprendizes, os dois acreditam que podem melhorar a instituição de maneiras diferentes. Citra pretende inspirar jovens ceifadores ao matar com compaixão e piedade, enquanto Rowan assume uma nova identidade e passa a investigar ceifadores corruptos. Mas talvez as mudanças da Ceifa dependam mais da Nimbo-Cúmulo do que deles. Será que a nuvem irá quebrar suas regras e intervir, ou apenas verá seu mundo perfeito desmoronar?'
        })}}>
          <Text style={styles.boxLivro__title}>A Nuvem</Text>
          <Image style={styles.boxLivro__img}source={require('../assets/img/anuvem.jpeg')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.main__boxLivro} onPress={() => {navigation.navigate("Livro", {
          title: "O Timbre",
          sinopse: 'No aguardado desfecho da trilogia Scythe, ditadores, profetas e novas tensões sociais surgem no suposto planeta perfeito. Será que a humanidade será dilacerada justamente por causa da imortalidade que conquistou?A humanidade alcançou um mundo ideal em que não há fome, doenças, guerras, miséria… nem morte. Mas, mesmo com todo o esforço da inteligência artificial da Nimbo-Cúmulo, parece que alguns problemas humanos, como a corrupção e a sede de poder, também são imortais. Desde que o ceifador Goddard começou a ganhar seguidores da nova ordem, entusiastas do prazer de matar, a Nimbo-Cúmulo decidiu se silenciar, deixando o mundo cada vez mais de volta às mãos dos humanos.Depois de três anos que Citra e Rowan desapareceram e Perdura afundou, parece que não existe mais nada no caminho de Goddard rumo à dominação absoluta da Ceifa ― e do mundo. Mas reverberações das mudanças na Ceifa e da Grande Ressonância ainda estremecem o planeta, e uma pergunta permanece: será que sobrou alguém capaz de detê-lo?A resposta talvez esteja na nova e misteriosa tríade de tonistas: o Tom, o Timbre e a Trovoada.'
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