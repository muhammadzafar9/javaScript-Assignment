import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import RemoteSelectionScreen from '../screens/RemoteSelectionScreen';
import IRRemoteScreen from '../screens/IRRemoteScreen';
import SmartRemoteScreen from '../screens/SmartRemoteScreen';
import DeviceSearchScreen from '../screens/DeviceSearchScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4A90E2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'TV Remote Control' }}
        />
        <Stack.Screen 
          name="RemoteSelection" 
          component={RemoteSelectionScreen} 
          options={{ title: 'Choose Remote Type' }}
        />
        <Stack.Screen 
          name="IRRemote" 
          component={IRRemoteScreen} 
          options={{ title: 'IR TV Remote' }}
        />
        <Stack.Screen 
          name="SmartRemote" 
          component={SmartRemoteScreen} 
          options={{ title: 'Smart TV Remote' }}
        />
        <Stack.Screen 
          name="DeviceSearch" 
          component={DeviceSearchScreen} 
          options={{ title: 'Search Device' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;