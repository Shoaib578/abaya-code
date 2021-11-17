import React, { useEffect, useState} from 'react'
import {View,Text,TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios'

const FavoriteProducts = () => {
    const [favourites, setFavourites] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const values = await AsyncStorage.getItem('UserData')
        const userData = JSON.parse(values)
        await fetch(`http://ime.geu.mybluehost.me/api/getfavourites/${userData.id}`, {
            method:"GET",
            "Content-Type": "application/json"
        }).then((response) => response.json().then(
            response => {
                setFavourites(response)
            }
        ))
    }

    const deleteFavourite = async (productId) => {
        const values = await AsyncStorage.getItem('UserData')
        const userData = JSON.parse(values)
        const data = new FormData();
        data.append("UserId", userData.id)
        data.append("ProductId", productId)

        Axios.post('http://ime.geu.mybluehost.me/api/deletefavourite', data).then((response) => {
                console.log(response)
                getData()
            })
    }
        return(

            <SafeAreaView style={{flex:1,}}>
                {console.log(favourites)}
                <ScrollView>
                <View style={{flexDirection:'row',marginTop:20,padding:10,left:10}}>
                <Text style={{color:'black',fontSize:32,}}>FAVORITE</Text>
                <Text style={{color:'#BB952D',fontSize:32,left:20}}>ITEMS</Text>

                </View>
                {favourites.map((item, index) => {
                    return(
                        <View key={index} style={styles.Hijab}>
                        <Image style={styles.hijabImage} source={{uri:"http://ime.geu.mybluehost.me/storage/uploads/products/"+item.ImagePath.slice(2,-2)}}/>
                        <View style={{width:140}}>
                        <Text style={styles.hijabName}>{item.ProductName}</Text>
                        <Text style={styles.size}>Size:M</Text>
                        </View>
                        <View>
                        <View style={{marginTop:22}}>
                       <Text>PKR</Text>
                       <Text style={{fontSize:17, color:'#000000', marginLeft:10}}>5190</Text>
                       </View>
                    
                       <TouchableOpacity onPress={() => deleteFavourite(item.ProductId)} style={{left:15,top:15}}>
                       <Image source={require('./assets/red_heart.png')} style={{width:18,height:16,}}/>
                      </TouchableOpacity>

                      </View>

                      </View>
                    )
                })}
                </ScrollView>
            </SafeAreaView>
        )

}

const styles = StyleSheet.create({
 
 
  

    Hijab:{
        width:381,
        height:163,
        borderRadius:37,
        borderWidth:1,
        borderColor:'gray',
        marginTop:20,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around',
        alignSelf:'center',
    },

    hijabImage:{
        width:80, 
        height:100,
    },

    hijabName:{
        fontSize:16,
        color:'#000000'
    },

    size:{
        color:'#000000',
        marginTop:30
    }
})

export default FavoriteProducts