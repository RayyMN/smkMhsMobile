import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View>
      {/* navbar */}
      <View style={style.navbar}>
        <TouchableOpacity>
          <Image
            style={style.logo}
            resizeMode="contain"
            source={{
              uri: 'https://multistudi.sch.id/wp-content/uploads/2021/07/tentang.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={style.hamburger}
            source={require('../assets/icons/menu.png')}
          />
        </TouchableOpacity>
      </View>
      {/* navbar */}

      {/* Kata Sambutan */}
      <View style={style.sambutan}>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            opacity: 0.5,
          }}>
          Selamat datang di
        </Text>
        <Text
          style={{
            fontSize: 35,
            color: 'black',
            fontWeight: 'bold',
            letterSpacing: 1,
          }}>
          Kantin MultiStudi
        </Text>
      </View>
      {/* Kata Sambutan */}

      {/* menu makanan */}
      <Text
        style={{
          fontSize: 16,
          marginLeft: 16,
          marginTop: 16,
          color: 'black',
        }}>
        Menu Makanan
      </Text>
      <View style={style.menuMakanan}>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Image
            style={style.makanan}
            resizeMode="cover"
            source={require('../assets/images/nasi-goreng-pedas_43.jpeg')}
          />
          <Text style={style.namaMenu}>Nasi Goreng</Text>
          <Text style={style.hargaMenu}>Rp 20.000</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Image
            style={style.makanan}
            resizeMode="cover"
            source={require('../assets/images/burger.png')}
          />
          <Text style={style.namaMenu}>Burger</Text>
          <Text style={style.hargaMenu}>Rp 30.000</Text>
        </TouchableOpacity>
      </View>
      {/* menu makanan */}

      {/* menu minuman */}
      <Text
        style={{
          fontSize: 16,
          marginLeft: 16,
          marginTop: 23,
          color: 'black',
        }}>
        Menu Minuman
      </Text>
      <View style={style.menuMinuman}>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Image
            style={style.minuman}
            resizeMode="cover"
            source={require('../assets/images/jus.png')}
          />
          <Text style={style.namaMenu}>Jus Jeruk</Text>
          <Text style={style.hargaMenu}>Rp 15.000</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Image
            style={style.minuman}
            resizeMode="cover"
            source={require('../assets/images/teh.png')}
          />
          <Text style={style.namaMenu}>Es teh</Text>
          <Text style={style.hargaMenu}>Rp 10.000</Text>
        </TouchableOpacity>
      </View>
      {/* menu minuman */}

      {/* footer by ray */}
      <Text style={style.footer}>Create By Ray Desain</Text>
      {/* footer by ray */}
    </View>
  );
};

const style = StyleSheet.create({
  navbar: {
    position: 'fixed',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FE2626',
    marginTop: 16,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    height: 52,
    borderRadius: 99,
  },
  logo: {
    height: 35,
    width: 140,
  },
  hamburger: {
    width: 25,
    height: 25,
  },

  // sambutan
  sambutan: {
    paddingTop: 32,
    paddingLeft: 16,
  },

  // menu makanan
  menuMakanan: {
    flexDirection: 'row',
    marginHorizontal: 16,
    width: 'auto',
    height: 210,
    justifyContent: 'space-between',
  },

  makanan: {
    flex: 1,
    borderRadius: 8,
    width: 190,
    height: 160,
  },

  // menu minuman
  menuMinuman: {
    flexDirection: 'row',
    marginHorizontal: 16,
    width: 'full',
    height: 210,
    justifyContent: 'space-between',
  },

  minuman: {
    flex: 1,
    borderRadius: 8,
    width: 190,
    height: 160,
  },

  // menu coloring
  namaMenu: {
    paddingTop: 5,
    color: 'black',
    fontWeight: 'bold',
  },

  hargaMenu: {
    color: 'red',
  },

  // footer
  footer: {
    marginTop: 90,
    textAlign: 'center',
    color: 'black',
    opacity: 0.6,
  },
});

export default Home;
