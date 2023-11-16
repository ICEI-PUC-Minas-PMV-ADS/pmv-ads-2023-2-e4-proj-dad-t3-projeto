import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthContext from '../context/authContext';

export default function Dashboard() {
  const ctx = useContext(AuthContext);
  return (
    <View>
      <Text style={styles.mainTitle}>Dashboard</Text>
      <Text style={styles.mainSubtitle}>Acompanhe suas finanças</Text>
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