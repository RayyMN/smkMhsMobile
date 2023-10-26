import {View, Text, Image, style, TouchableOpacity} from 'react-native';
import React from 'react';

const Start = ({navigation}) => {
  return (
    <View
      style={{
        marginTop: 300,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: 150,
          height: 230,
        }}>
        <Image
          style={{
            height: 230,
            width: 'auto',
          }}
          resizeMode="contain"
          source={require('../assets/icons/logo-mhs.png')}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          style={{
            marginTop: 250,
            marginLeft: 350,
            width: 39,
            height: 39,
          }}
          source={require('../assets/icons/Go.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Start;
