import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  StatusBar
} from 'react-native';
import SplashScreen from './screens/SplashScreen';
import SplashScreen2 from './screens/SplashScreen2';

import RolesScreen from './screens/studentscreens/RolesScreen';
import StudentLogin from './screens/studentscreens/StudentLogin';
import EnterCode from './screens/studentscreens/EnterCode';
import StudentDashboardNavigator from './screens/studentscreens/StudentDashboardNavigator';

import StudentRegister from './screens/studentscreens/StudentRegister';





export type RootStackParamList = {
  Splash: undefined;
  SplashScreen2: undefined;
  HomeScreen: undefined;
  RolesScreen: undefined;
  StudentRegister: undefined;
  EnterCode: { email: string };
  StudentDashboard: undefined;
};



const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (

    <NavigationContainer>
      <StatusBar backgroundColor="#193648" barStyle="light-content" />
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SplashScreen2" component={SplashScreen2} />

        <Stack.Screen name="RolesScreen" component={RolesScreen} />
        <Stack.Screen name="StudentLogin" component={StudentLogin} />
        <Stack.Screen name="EnterCode" component={EnterCode} />
        <Stack.Screen name="StudentRegister" component={StudentRegister} />
        <Stack.Screen name="StudentDashboardNavigator" component={StudentDashboardNavigator} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
