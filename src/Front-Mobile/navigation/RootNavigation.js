import { createStackNavigator } from '@react-navigation/stack';
import Drawer from './Drawer';
import Login from '../pages/Login';

const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="Drawer"
        component={Drawer}
        options={{
          title: 'Drawer',
        }}
      />
    </Stack.Navigator>
  );
}
