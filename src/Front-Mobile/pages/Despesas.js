import { View, Text, StyleSheet } from 'react-native';

export default function Despesas() {
  return (
    <View>
      {/* <Text style={styles.mainTitle}>Despesas</Text> */}
      <Text style={styles.mainSubtitle}>Gerencie suas Despesas</Text>
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
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#a9',
  }
})