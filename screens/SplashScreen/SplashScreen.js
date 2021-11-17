import React,{useEffect} from 'react';
import {Text, SafeAreaView, StyleSheet, ImageBackground} from 'react-native';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setInterval(() => {
            navigation.navigate('root')
        }, 3000)
    },[])
    return(
        <ImageBackground source={require('./assets/Splash.png')} resizeMode="cover" style={styles.image}>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image:{
        flex:1,
        justifyContent:'center'
    }
})

export default SplashScreen;