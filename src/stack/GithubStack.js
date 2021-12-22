import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import User from '../screens/User';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../components/shared/constants';

const Stack = createStackNavigator();

export default function GithubStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='User' component={User} />
    </Stack.Navigator>
  );
}
