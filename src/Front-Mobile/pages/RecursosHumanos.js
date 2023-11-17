import { View, Text, StyleSheet } from 'react-native';

export default function RecursosHumanos() {
  return (
    <View style={styles.container}>      
      <Text style={styles.mainSubtitle}>Gerencie suas Despesas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    border: '1px solid red',
  },
  
  mainSubtitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#a9',
  }
});
