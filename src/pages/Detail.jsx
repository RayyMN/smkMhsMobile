import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View>
      {/* back Nvabr */}
      <View
        style={{
          height: 52,
          flexDirection: 'row',
          alignItems: 'baseline',
          gap: 10,
          paddingLeft: 20,
          paddingTop: 16,
          marginBottom: 16,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            backgroundColor: 'red',
            width: 70,
            height: 52,
            borderRadius: 40,
          }}>
          <Image
            style={{
              display: 'flex',
              alignSelf: 'center',
              marginVertical: 9,
              height: 34,
              width: 34,
            }}
            resizeMode="contain"
            source={require('../assets/icons/Back.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          kembali
        </Text>
      </View>
      {/* back Nvabr */}

      {/* menu */}
      <View
        style={{
          alignSelf: 'center',
          marginTop: 20,
          width: 380,
          paddingHorizontal: 16
        }}>
        <Image
          style={{
            width: 'auto',
            height: 320,
            borderRadius: 20,
          }}
          resizeMode="cover"
          source={require('../assets/images/nasi-goreng-pedas_43.jpeg')}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: '600',
              fontSize: 15,
            }}>
            Nasi Goreng
          </Text>
          <Text
            style={{
              color: 'red',
            }}>
            Rp 20.000
          </Text>
        </View>

        <Text
          style={{
            color: '#C68484',
            fontSize: 11,
            marginTop: 2,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
          }}>
          Terbuat dari potongan daging ayam yang diolah menjadi patty, kemudian
          dipanggang atau digoreng hingga matang.
        </Text>

        {/* input jumlah */}
        <View>
          <Text
            style={{
              color: 'black',
              marginTop: 30,
              fontSize: 12,
            }}>
            Masukan Jumlah Pesanan
          </Text>
          <TextInput
            style={{
              backgroundColor: '#D9D9D9',
              marginTop: 2,
              borderRadius: 10,
              height: 52,
            }}></TextInput>
        </View>
        {/* input jumlah */}

        {/* konfirmasi */}
        <TouchableOpacity 
        onPress={() => navigation.navigate('succes')}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 170,
            backgroundColor: 'red',
            borderRadius: 10,
            height: 52,
          }}>
          <Text
            style={{
              color: 'white',
            }}>
            Konfirmasi Pesanan
          </Text>
        </TouchableOpacity>
        {/* konfirmasi */}
      </View>
      {/* menu */}
    </View>
  );
};

export default Home;
