import React,{useEffect, useState} from 'react';
import {Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity,View, FlatList, ScrollView} from 'react-native';

const CategoryProductsScreen = ({route, navigation}) => {
    const id = route.params.id;
    const CategoryName = route.params.CategoryName;
    const [products, setProducts] = useState([])
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        await fetch(`http://ime.geu.mybluehost.me/api/getproductbycategory/${id}`, {
            method:"GET",
            "Content-Type": "application/json",
        }).then((response) => response.json().then(
            response => {
                setProducts(response)
            }
        ))
    }

    const goToDetailsScreen = (id) => {
        navigation.navigate('ProductDetails', {'id':id})
    }

    const {width, height} = Dimensions.get('window')
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{marginLeft:'6%', marginTop:'4%', marginBottom:'4%'}}>
                <Text style={styles.trendingText}>{CategoryName}</Text>
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
                         : null   }                           
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

export default CategoryProductsScreen;