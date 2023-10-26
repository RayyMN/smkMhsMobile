import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from '../pages/Start';
import Home from '../pages/Home';
import Detail from '../pages/Detail';



const Stack = createNativeStackNavigator();


const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="start"
        component={Start}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Detail" component={Detail} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default Router;
