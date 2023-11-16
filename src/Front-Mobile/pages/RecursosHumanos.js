import { View, Text, StyleSheet } from 'react-native';

export default function RecursosHumanos() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Recursos Humanos</Text>
      <Text style={styles.mainSubtitle}>Gerencie suas Despesas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    border: '1px solid red',
  },

  mainTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#191970',
  },

  mainSubtitle: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'lighter',
    textAlign: 'center',
    color: '#a9',
  }
});
