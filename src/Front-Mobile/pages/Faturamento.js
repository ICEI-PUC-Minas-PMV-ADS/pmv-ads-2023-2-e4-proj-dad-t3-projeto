import { View, Text, StyleSheet } from 'react-native';

export default function Faturamento() {
  return (
    <View>
      <Text style={styles.mainSubtitle}>Gerencie suas Vendas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
  mainSubtitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#a9',
  }
})