import React, {useState, useEffect} from "react";
import { Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity, View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation } from '@react-navigation/native';
import Axios from 'axios';

const VenmoScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>Venmo Screen</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    }
})

export default VenmoScreen;