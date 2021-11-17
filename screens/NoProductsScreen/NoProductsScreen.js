import React from 'react';
import {Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity,View, FlatList} from 'react-native';

const NoProductsScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.noProductsAvailable}>No Products Available</Text>

            <Image style={{marginTop:80, width:249, height:208}} source={require('./assets/emptyCart.png')}/>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        alignItems:'center'
    },

    noProductsAvailable:{
        fontSize:33,
        color:'#000000',
        marginTop:30
    }
    
})

export default NoProductsScreen;