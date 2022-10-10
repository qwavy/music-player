import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;