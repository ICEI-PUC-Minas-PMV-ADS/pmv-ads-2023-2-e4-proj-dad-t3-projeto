import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/authContext';

export default function Login({ navigation }) {
  const ctx = useContext(AuthContext);
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [error, setError] = useState(false);

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const loginHandler = async (event) => {
    event.preventDefault();
    let token = null;
    try {
      const response = await axios.post(
         // `http://192.168.2.12:5193/api/user/authenticate`, // Alternativa 1 do caminho
        `${apiUrl}/api/user/authenticate`, // Alternativa 2 do caminho
        {
          email: email,
          senha: password,
        }
      );
      token = response.data.jwtToken;
      // console.log(token);
      ctx.onLogin(token);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        setError('E-mail e/ou senha inválidos. Por favor, tente novamente.');
      } else {
        setError('Um erro ocorreu, tente novamente mais tarde.');
      }
    } finally {
      if (token) {
        navigation.navigate('Drawer');
      }
    }
  };

  return (
    <View style={styles.boxLogin}>
      <Text style={styles.title}>Login</Text>
      {error && (
        <View>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
      <View>
        <TextInput
          placeholder="E-mail"
          style={styles.loginInput}
          onChangeText={onChangeEmail}
          value={email}
        />
        <TextInput
          placeholder="Senha"
          style={styles.loginInput}
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={true}
        />
      </View>
      <Pressable style={styles.loginButton} onPress={loginHandler}>
        <Text style={{ color: '#fff' }}>Entrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  boxLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  loginInput: {
    width: 200,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  loginButton: {
    backgroundColor: '#0A376E',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    alignItems: 'center',
    margin: 20,
  },
  errorText: {
    color: 'red',
  },
});
