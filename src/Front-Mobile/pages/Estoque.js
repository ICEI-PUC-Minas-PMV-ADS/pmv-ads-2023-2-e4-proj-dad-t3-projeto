import { View, Text, StyleSheet } from 'react-native';

export default function Estoque() {
  return (
    <View>      
      <Text style={styles.mainSubtitle}>Gerencie seus Produtos</Text>
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