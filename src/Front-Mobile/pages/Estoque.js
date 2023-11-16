import { View, Text, StyleSheet } from 'react-native';

export default function Estoque() {
  return (
    <View>
      <Text style={styles.mainTitle}>Estoque</Text>
      <Text style={styles.mainSubtitle}>Gerencie seus Produtos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
})