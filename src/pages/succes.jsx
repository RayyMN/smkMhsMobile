import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const succes = ({navigation}) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 200,
      }}>
      <Image
        style={{
          width: 250,
          height: 250,
        }}
        source={require('../assets/icons/icon-correct-24-2 1.png')}
      />
      <Text
        style={{
          fontSize: 21,
          fontWeight: 'bold',
        }}>
        Pesanan Berhasil
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: '#C68484',
          textAlign: 'center',
        }}>
        Pesanan Anda telah diterima dan akan segera diproses. Mohon ditunggu ya
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 230,
          backgroundColor: 'red',
          borderRadius: 10,
          height: 52,
          width: 380,
        }}>
        <Text
          style={{
            color: 'white',
          }}>
          Kembali Ke Menu Utama
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default succes;
