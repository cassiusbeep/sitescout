import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExplorationMap from './src/screens/ExplorationMap';
import CampsitePage from './src/screens/CampsitePage';
import testLocation from './src/screens/testLocation';
import PhotoUploadPage from './src/screens/PhotoUploadPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ExplorationMap"
          component={ExplorationMap}
        />
        <Stack.Screen 
          name="CampsitePage" 
          component={CampsitePage} />
        <Stack.Screen
          name="Photo Test"
          component={PhotoUploadPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
