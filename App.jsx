import {View, Text} from 'react-native';
import React from 'react';
import Home from './src/pages/Home';
import Detail from './src/pages/Detail';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Router from './src/Router';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown : false}}/>
        <Stack.Screen name="Detail" component={Detail} options={{headerShown : false}}/>
      </Stack.Navigator> */}
      <Router />
    </NavigationContainer>
  );
};

export default App;
