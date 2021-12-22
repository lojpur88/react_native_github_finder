import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import GithubStack from './src/stack/GithubStack';
import GithubProvider from './src/context/GithubContext';

export default function App() {
  return (
    <GithubProvider>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <StatusBar style='light' />
          <GithubStack />
        </View>
      </NavigationContainer>
    </GithubProvider>
  );
}
