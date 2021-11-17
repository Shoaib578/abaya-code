import React,{useState, useEffect} from "react";
import { Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity, View, FlatList } from 'react-native';

const CategoriesScreen = ({navigation}) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getData();
    },[])

    const getData = async () => {
        await fetch('http://ime.geu.mybluehost.me/api/getcategories', {
            method:'GET',
            "Content-Type":"application/json"
        }).then((response) => response.json().then(
            response => setCategories(response)
        ))
    }
    return(
        <SafeAreaView style={styles.screen}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={categories}
            renderItem={({item, index}) => (
                <TouchableOpacity onPress={() => {navigation.navigate('CategoryProducts', {"id": item.id, "CategoryName":item.CategoryName})}} style={styles.Category} key={item.id}>
                    <Text style={styles.CategoryName}>{item.CategoryName}</Text>
                </TouchableOpacity>
            )}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1, 
        alignItems:'center',
        color:'#FFFFFFF'
    },
    Category:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        paddingRight:60,
        paddingLeft:60,
        borderBottomColor:'gray',
        borderBottomWidth:1,
        height:50
    },
    
    CategoryName:{
        fontSize:20,
        color:'#000000'
    }
})

export default CategoriesScreen;
