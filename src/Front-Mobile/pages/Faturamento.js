import { View, Text, StyleSheet } from 'react-native';

export default function Faturamento() {
  return (
    <View>
      <Text style={styles.mainTitle}>Faturamento</Text>
      <Text style={styles.mainSubtitle}>Gerencie suas Vendas</Text>
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