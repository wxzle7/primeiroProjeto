import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Letícia Lopes de Carvalho</Text>
      <StatusBar style="auto" />
       <Text>DDM</Text>
       <Button title='Salvar'></Button>
       <Title/>
      <StatusBar style="auto" />
    </View>
  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
