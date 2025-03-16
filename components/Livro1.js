import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Livro1({ route }) {
  const { title, imgDir } = route.params;
  
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{imgDir}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});