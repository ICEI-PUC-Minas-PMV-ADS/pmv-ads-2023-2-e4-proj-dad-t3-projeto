import { View, Text, StyleSheet } from 'react-native';

export default function Despesas() {
  return (
    <View>
      <Text style={styles.mainSubtitle}>Gerencie suas Despesas</Text>
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