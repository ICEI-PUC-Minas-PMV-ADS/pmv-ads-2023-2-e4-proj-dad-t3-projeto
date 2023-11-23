import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function Suporte() {
  return (
    <View>
      <Text style={styles.mainSubtitle}>Contate-nos</Text>
      <Text style={styles.email}>projeto@gerenciar.com.br</Text>
    </View>   

  );
}



const styles = StyleSheet.create({
  mainSubtitle: {
    margin: 10,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#191970',
  },

  email: {
    margin: 10,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#2828B8',
  },
});
