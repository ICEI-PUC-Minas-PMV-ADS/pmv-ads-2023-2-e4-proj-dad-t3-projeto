import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import RootNavigation from './navigation/RootNavigation';
import { AuthContextProvider } from './context/authContext';

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
