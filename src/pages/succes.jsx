import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'

const succes = () => {
  return (
    <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignItems: 'center'
    }}>
        <Image style={{
            width:300,
            height: 300
        }}
        source={require('../assets/icons/icon-correct-24-2 1.png')}/>
        <Text>Pesanan Berhasil</Text>
        <Text>Pesanan Anda telah diterima dan akan segera diproses. Mohon ditunggu ya</Text>
        <TouchableOpacity>
            <Text>Kembali Ke Menu Utama</Text>
        </TouchableOpacity>
    </View>
  )
}

export default succes