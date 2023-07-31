import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import {React, useEffect, useState} from 'react'
import axiosInstance from '../ultill/AxiosInstance';
import ItemList from './ItemList';
import { useNavigation } from '@react-navigation/native';
const Home = (props) => {
    const {navigation} = props;
  
    const [products, setproducts] = useState([]);
    const [types, settypes] = useState([]);

    const getTypes = async ()=> {
      const types = await axiosInstance.get('/api/Iphone/detailTypeAPI')
        .then((response) => {
          return response.data
        });
        settypes(types);
    };

    const getProduct = async () => {
        const data = await axiosInstance.get('/api')
          .then((response) => {
            return response.data;
          }) 
        setproducts(data);
    }
    
    useEffect(() => {
        getProduct();
        getTypes();
    }, [])
  return (
    <View style={{backgroundColor: 'white', flex:1}}>
        <View style={styles.container}>
        <View style={styles.logoAndAvatar}>
          <Image style={styles.ImageLogo} source={require('../assets/images/logo.png')}/>
          <Text style={{fontSize:22, fontWeight: 'bold'}}>Phonezz</Text>
          <Image style={styles.imageAvatar} source={require('../assets/images/avatar.png')}/>
        </View>
        <View style={styles.bgBanner}>
          <Image style={styles.banner} source={require('../assets/images/banner.jpg')}/>
        </View>
      
        <FlatList
          data={types}
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={item => item._id}
        />
      </View>
    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    marginTop: 30,
    margin: 11,
  },
  logoAndAvatar:{
    flexDirection:'row',
    marginTop: 30,
  },
  ImageLogo:{
    width: 40,
    height: 28,
    resizeMode: 'contain',
  },
  bgBanner:{
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner:{
    width: '100%',
    height:200,
    
  },
  imageAvatar:{
    marginLeft: 220,
  },
})