import { FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import axiosInstance from '../ultill/AxiosInstance';

const ItemList = (props) => {
    const {data,navigation} = props;
    // const clickItem = () => {
    //     navigation.navigate("NewDetails", {id: data.slug});
    //   };
    

    useEffect(()=>{
      getTypes();
    })
  return (
    <View>
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.content}>{data.type}</Text>
                
                
            </View>
        </TouchableOpacity>
        
        
    </View>
  )
}

export default ItemList

const styles = StyleSheet.create({
  container: {
    
    marginTop: 20,
  },
  content:{
    marginLeft: 10,
    fontSize: 20,
  },
  separator:{
    height: 0.5,
    width: '100%',
    marginTop: 15,
    backgroundColor: 'black',
  },
  
})