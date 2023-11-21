import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../pages/Dashboard';
import Faturamento from '../pages/Faturamento';
import Despesas from '../pages/Despesas';
import Estoque from '../pages/Estoque';
import Suporte from '../pages/Suporte';
import RecursosHumanos from '../pages/RecursosHumanos';
import AuthContext from '../context/authContext';
import Login from '../pages/Login';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  const ctx = React.useContext(AuthContext);
  return ctx.isLoggedIn ? (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white', // Estilo de fundo do cabeçalho
        },
        headerTintColor: '#191970', // Cor do icone do menu
        headerTitleStyle: {
          color: '#191970', // Cor do título da Drawer
        },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Icon name="home" size={size} color={focused ? '#333' : '#333'} />
          ),
          drawerActiveBackgroundColor: '#e5f0ff',
          drawerActiveTintColor: 'black',
        }}
      />
      <Drawer.Screen
        name="Recursos Humanos"
        component={RecursosHumanos}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Icon name="person" size={size} color={focused ? '#333' : '#333'} />
          ),
          drawerActiveBackgroundColor: '#e5f0ff',
          drawerActiveTintColor: 'black',
        }}
      />
      <Drawer.Screen
        name="Despesas"
        component={Despesas}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="trending-down"
              size={size}
              color={focused ? '#333' : '#333'}
            />
          ),
          drawerActiveBackgroundColor: '#e5f0ff',
          drawerActiveTintColor: 'black',
        }}
      />
      <Drawer.Screen
        name="Estoque"
        component={Estoque}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="storage"
              size={size}
              color={focused ? '#333' : '#333'}
            />
          ),
          drawerActiveBackgroundColor: '#e5f0ff',
          drawerActiveTintColor: 'black',
        }}
      />
      <Drawer.Screen
        name="Faturamento"
        component={Faturamento}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="attach-money"
              size={size}
              color={focused ? '#333' : '#333'}
            />
          ),
          drawerActiveBackgroundColor: '#e5f0ff',
          drawerActiveTintColor: 'black',
        }}
      />
      <Drawer.Screen
        name="Suporte"
        component={Suporte}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="settings"
              size={size}
              color={focused ? '#333' : '#333'}
            />
          ),
          drawerActiveBackgroundColor: '#e5f0ff',
          drawerActiveTintColor: 'black',
        }}
      />
    </Drawer.Navigator>
  ) : (
    <Login />
  );
}
