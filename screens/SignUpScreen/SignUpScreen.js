import React,{useEffect, useState} from 'react';
import {Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity,View, ScrollView} from 'react-native';
import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({navigation}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [contact, setContact] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const signUp = async () => {
        const data = new FormData();
        data.append('EmailAddress', emailAddress)
        data.append('Password', password)
        data.append('FirstName', firstName)
        data.append('LastName', lastName)
        data.append('ContactNumber', contact)
        await fetch('http://ime.geu.mybluehost.me/api/adduser',{
            method:"POST",
            "Content-Type": "application/json",
            body:data
        }).then((response) => response.json().then(
            response => {
                if(response == "success"){
                    alert("REgistered Successfully Please Login")
                }
            }
        ))
        
    }
    return(
        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
            <Text style={styles.letsGetText}>Let's Get <Text style={styles.startedText}>Started!</Text></Text>
            <Text style={styles.createAccountWithAbayaText}>Create an account with Abaya</Text>


            <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.5,marginTop:20,
                        
                            }}>

            <Image
            source={require('./assets/username.png')}
            style={styles.imageStyle}
          />
            <TextInput 
            placeholder="First Name" onChangeText={(e) => {setFirstName(e)}}  placeholderTextColor="#DBDBDB" style={{flex:1}}/>

            </View>

            <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.5,marginTop:20,
                        
                            }}>

            <Image
            source={require('./assets/username.png')}
            style={styles.imageStyle}
          />
            <TextInput 
            placeholder="Last Name" onChangeText={(e) => {setLastName(e)}}  placeholderTextColor="#DBDBDB" style={{flex:1}}/>

            </View>



            <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.5,marginTop:20,
                        
                            }}>

            <Image
            source={require('./assets/Vectoremail.png')}
            style={styles.imageStyle}
          />

            <TextInput 
            placeholder="Email" onChangeText={(e) => {setEmailAddress(e)}} placeholderTextColor="#DBDBDB" style={{flex:1}}/>
            </View>


            <View style={{
               flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.5,marginTop:20,
            }}>

            <Image
            source={require('./assets/Vectorphone.png')}
            style={styles.phoneImageStyle}
            />

            <TextInput placeholder="Phone" onChangeText={(e) => {setContact(e)}} keyboardType="numeric" placeholderTextColor="#DBDBDB" style={{flex:1}} 
            />
            </View>

            <View style={{
               flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.5,marginTop:20,
            }}>

            <Image
            source={require('./assets/Vectorpassword.png')}
            style={styles.phoneImageStyle}
            />

            <TextInput 
            placeholder="Password" onChangeText={(e) => {setPassword(e)}} secureTextEntry placeholderTextColor="#DBDBDB" style={{flex:1}}/>
            </View>

            <View style={{
               flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.5,marginTop:20,
            }}>

            <Image
            source={require('./assets/Vectorpassword.png')}
            style={styles.phoneImageStyle}
            />
            <TextInput 
            placeholder="Confirm Password" onChangeText={(e) => {setConfirmPassword(e)}} secureTextEntry placeholderTextColor="#DBDBDB" style={{flex:1}}/>
            </View>


            <TouchableOpacity onPress={() => signUp()} style={{justifyContent:'center',alignItems:'center',backgroundColor:'#000000',borderWidth:1,borderColor:'#000000',borderRadius:25,height:50,width:Dimensions.get('window').width*2/3.5,marginTop:30}}>
                <Text style={{color:'white',fontSize:15,}}>Create account</Text>
            </TouchableOpacity>



            {/* <View style={{flexDirection:'row',marginTop:10}}>
                <Text>Already have an Account?</Text>
            <TouchableOpacity style={{left:7,}}>
            <Text style={{color:'#3C5A9A'}}>Login here</Text>
            </TouchableOpacity>
            </View> */}
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff',
        marginTop:27,
        flexDirection:'column',
        marginBottom:5
    },

    letsGetText:{
        color:'#000000',
        fontWeight:'700',
        fontSize:32,
        fontStyle:'normal',
        marginTop:20
    },

    startedText:{
        color:'#ba942d',
        fontWeight:'700',
        fontSize:32,
        fontStyle:'normal'
    },
    createAccountWithAbayaText:{
        color:'#6b6b6b',
        marginTop:18,
        fontSize:16,
        fontWeight:'400'
    }, 
    
    imageStyle: {
    padding: 0,
    marginLeft:20,
    margin: 12,
    height: 18,
    width: 18,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

  phoneImageStyle:{
    padding: 0,
    marginLeft:7,  
    height: 18,
    width: 18,
    resizeMode: 'stretch',
    alignItems: 'center',
    margin:12,
    marginLeft:20
  }
    
})

export default SignUpScreen;