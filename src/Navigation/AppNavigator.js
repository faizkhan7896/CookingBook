import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BookDetail from '../Screens/BookDetail';
import BottomTabs from '../Screens/BottomTabs';
import SplashScreen from '../Screens/SplashScreen';
import Recipie from '../Screens/Recipie';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={SplashScreen} name="SplashScreen" />
        <Stack.Screen component={BottomTabs} name="BottomTabs" />
        <Stack.Screen component={BookDetail} name="BookDetail" />
        <Stack.Screen component={Recipie} name="Recipie" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
