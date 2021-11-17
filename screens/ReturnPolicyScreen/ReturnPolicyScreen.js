import React,{useEffect} from 'react'
import {Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity,View, FlatList} from 'react-native'


const ReturnPolicyScreen =  () => {

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.returnPolicyText}>Return Policy Screen</Text>
            <Text style={styles.returnPolicyDetails1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <Text style={styles.returnPolicyDetails1}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            <Text style={styles.returnPolicyDetails1}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
            <Text style={styles.returnPolicyDetails1}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F9F9F9'
    },

    returnPolicyText:{
        fontSize:26,
        color:'#000000',
        fontWeight:'400',
        fontStyle:'normal',
        marginLeft:35,
        marginTop:30
    },

    returnPolicyDetails1:{
        marginLeft:35,
        marginRight:35,
        marginTop:20,
        fontSize:15,
        color:'#262626',
        lineHeight:20
    }
})

export default ReturnPolicyScreen;