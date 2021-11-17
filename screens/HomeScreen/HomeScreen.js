import React,{useEffect, useState} from 'react';
import {Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity,View, FlatList, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen =  ({navigation}) => {
    const [products, setProducts] = useState([])
    const [userExist, setUserExist] = useState(false)
    
    useEffect(() => {
        getData();
        CheckUserExistance();
    }, []);

    const likeDress = async (productId) => {
        const values = await AsyncStorage.getItem('UserData')
        const userData = JSON.parse(values)
        const data = new FormData();
        data.append("UserId", userData.id)
        data.append("ProductId", productId)
        if(isLiked == false){
            Axios.post('http://ime.geu.mybluehost.me/api/addfavourite', data).then((response) => {
                console.log(response)
            })
        }else{
            Axios.post('http://ime.geu.mybluehost.me/api/deletefavourite', data).then((response) => {
                console.log(response)
            })
        }
    }

    const getData  = async () => {
         await fetch('http://ime.geu.mybluehost.me/api/getproducts', {
           method:"GET",
           "Content-Type": "application/json",

       }).then(response => response.json().then(
           response => {
               console.log(response)
            setProducts(response);
           }
       )
       ).catch((err) => { 
            if(err){ 
                console.log(err);
            }
        })
    }

    const goToDetailsScreen = (id) => {
        navigation.navigate('ProductDetails', {'id':id})
    }

    const CheckUserExistance = async () => {
        const values = await AsyncStorage.getItem('UserData')
        const userData = JSON.parse(values)
        if(userData.email){
            setUserExist(true)
        }
    }

    const {width, height} = Dimensions.get('window')
    
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{marginLeft:'6%', marginTop:'4%', marginBottom:'4%'}}>
                <Text style={styles.trendingText}>Trending <Text style={styles.nowText}>Now</Text></Text>
                </View>
            <View style={{
                flexDirection:'row',
                backgroundColor:'#FFFFFF',
                flexWrap:'wrap',
                width:width,
                padding:'3%'
            }}>
                {products.map((item) => (
                    
                    <TouchableOpacity onPress={() => goToDetailsScreen(item.id)} key={item.id} style={{width:'44%', height:268, marginLeft:'3%', marginRight:'3%', marginBottom:'17%', justifyContent:'center'}}>
                        {item.ImagePath != null ?
                        <Image style={{width:'100%', height:'100%', }} source={{uri:"http://ime.geu.mybluehost.me/storage/uploads/products/"+item.ImagePath.slice(2,-2)}}/>
                         : null}
                         {userExist ?
                         <TouchableOpacity onPress={() => likeDress(item.id)} style={{position:'absolute', bottom:'65%', left:'70%'}}>
                         <Icon name="heart" color="red" size={20}/>
                         </TouchableOpacity>:
                         null}                        
                        <Text style={{position:'absolute', top:270, color:'#000000'}}>{item.ProductName}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    trendingText:{
        color:'#000000',
        fontWeight:'400',
        fontSize:25,
        fontStyle:'normal',
        
    },

    nowText:{
        color:'#ba942d',
        fontWeight:'400',
        fontSize:25,
        fontStyle:'normal',
    },
    heart:{
        top:-255,
        left:120
    },
    
})

export default HomeScreen;