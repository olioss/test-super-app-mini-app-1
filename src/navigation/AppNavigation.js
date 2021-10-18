import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenA from "../screens/ScreenA";
import ScreenB from "../screens/ScreenB";

const Stack = createNativeStackNavigator();

function AppNavigation(){
  return <Stack.Navigator>
    <Stack.Screen name="ScreenA" component={ScreenA} />
    <Stack.Screen name="ScreenB" component={ScreenB} />
  </Stack.Navigator>
}

export default AppNavigation;
