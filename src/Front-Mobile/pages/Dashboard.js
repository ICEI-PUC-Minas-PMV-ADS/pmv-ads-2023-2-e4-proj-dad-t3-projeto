import { useContext } from 'react';
import { View, Text } from 'react-native';
import AuthContext from '../context/authContext';

export default function Dashboard() {
  const ctx = useContext(AuthContext);
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
}
