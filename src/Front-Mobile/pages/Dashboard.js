import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthContext from '../context/authContext';

export default function Dashboard() {
  const ctx = useContext(AuthContext);
  return (
    <View>
      <Text style={styles.mainSubtitle}>Acompanhe suas finanças</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainSubtitle: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#191970',
  },
});
