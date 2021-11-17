import React, {useState, useEffect} from "react";
import { Text, 
    SafeAreaView, 
    StyleSheet, 
    Image, 
    TextInput, 
    Dimensions, 
    TouchableOpacity, 
    View, ScrollView,
    Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({navigation}) => {
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')

    useEffect(() => {
        GetProfileData()
    }, [])

    const GetProfileData = async () => {
        const values = await AsyncStorage.getItem('UserData')
        const userData = JSON.parse(values)
        setFirstName(userData.fname);
        setLastName(userData.lname);

    }

    const Logout = async () => {
        await AsyncStorage.removeItem('UserData')
        navigation.navigate('SignIn')
    }

    const Home = () => {
        navigation.navigate('root')
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:'7.5%'}}>
                <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>{FirstName} </Text>
                {LastName == "null" ? null:
                <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>{LastName}</Text>
                }
            </View>
            <View style={{ alignItems:'center', justifyContent:'center', marginTop:'7.5%'}}>
                <TouchableOpacity onPress={() => {Logout()}} style={styles.LogoutButton}>
                    <Text style={{color:'#FFFFFF', fontSize:17}}>Log Out</Text>
                </TouchableOpacity>
            </View>

            <View style={{ alignItems:'center', justifyContent:'center', marginTop:'7.5%'}}>
                <TouchableOpacity onPress={() => {Home()}} style={styles.LogoutButton}>
                    <Text style={{color:'#FFFFFF', fontSize:17}}>Home</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    constainer:{
        flex:1,
        alignItems:'center'
    },

    LogoutButton:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        width:100,
        height:50,
        borderRadius:25,
    }
    
})

export default ProfileScreen