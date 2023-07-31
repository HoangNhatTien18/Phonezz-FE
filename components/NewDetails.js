import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Alert } from 'react-native'
import {React, useEffect, useState} from 'react'
import axiosInstance from '../ultill/AxiosInstance';

const NewDetails = (props) => {
  
    const {route} = props;
    const {params} = route;

    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [image, setimage] = useState("");

    const getDetail = async () => {
        const response = await axiosInstance.get('/api/' + params.id+ '/detail');
        setname(response.data.name);
        setprice(response.data.price);
        setimage(response.data.imageUrl);
    }
    useEffect(() => {
      getDetail();
    
    })
    

  return (
    <View style={styles.container}>
       <Image source={{uri: image ? image: null}}
        style={{width: 400, height: 400}} />
      <Text style={styles.textContent}> {name}</Text>
      <Text style={styles.textContent}> {price}</Text>
      <View style={styles.button}>
      <Button 
        title="Mua Ngay"
      />
      </View>
      
    </View>
  )
}

export default NewDetails

const styles = StyleSheet.create({
    container:{
        margin: 10,
    },
   
    button:{
        marginTop: 70,
    },
    textContent:{
        fontWeight: 'bold',
        marginTop: 10,
        padding:5,
        textAlign: 'center',
        fontSize: 20,
    }
})