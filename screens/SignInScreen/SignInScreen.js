import React, {useState, useEffect} from "react";
import { Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity, View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation } from '@react-navigation/native';
import Axios from 'axios';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { LoginManager } from 'react-native-fbsdk'

const SignInScreen = ({ navigation }) => {
    const [EmailAdress, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [userGoogleInfo, setUserGoogleInfo] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        GoTOPrifile();
    },[])

    const GoTOPrifile = async () => {
        const values = await AsyncStorage.getItem('UserData')
        const userData = JSON.parse(values)
        console.log(userData)
        if(userData){
            navigation.navigate('Profile')
        }
           
    }

    const signInToHome = async () => {
        const data = new FormData();
        data.append('EmailAddress', EmailAdress)
        data.append('Password', Password)
        await Axios.post('http://ime.geu.mybluehost.me/api/userlogin', data).then(response => {
                AsyncStorage.setItem('UserData', JSON.stringify({id:response.data.Response[0].id, email:response.data.Response[0].EmailAddress, fname:response.data.Response[0].FirstName, lname:response.data.Response[0].LastName}))
                console.log('User Data Stored')
                navigation.navigate('root')
        })
        
    }

    const goTOSignUp = () => {
        navigation.navigate('SignUp');
    }

    const SignInWithFacebook = () => {
        LoginManager.logInWithPermissions(["public_profile", "email"]).then(
            function(result) {
              if (result.isCancelled) {
                console.log("==> Login cancelled");
              } else {
                console.log(
                    AccessToken.getCurrentAccessToken().then((data) => {
                        const { accessToken } = data
                        initUser(accessToken)
                      })
                );
              }
             },
             function(error) {
              console.log("==> Login fail with error: " + error);
             }
           );
    }

    const initUser = (token) => {
        fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
        .then((response) => response.json())
        .then((json) => {
          // Some user object has been set up somewhere, build that user here
          AsyncStorage.setItem('UserData', JSON.stringify({
            id:json.id,
            email:json.email, 
            fname:json.name, 
            lname:"null"}))
        })
        navigation.navigate("root")
        .catch(() => {
          reject('ERROR GETTING DATA FROM FACEBOOK')
        })
      }

      const SignInWithGoogle = async () => {
        GoogleSignin.configure({
            webClientId: "com.googleusercontent.app.781452484445-54nadah1l4o0ts6aavdsq0id7al9quda",
                        // webClientId: '209065959622-2hcm073rv1stipl3roqtgnrst92vg86v.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            // androidClientId: '209065959622-2hcm073rv1stipl3roqtgnrst92vg86v.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            // androidId: '209065959622-2hcm073rv1stipl3roqtgnrst92vg86v.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
          });

          try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('user info: ', userInfo);
            this.setState({ userInfo });
          } catch (error) {
              console.log('error: ', error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              // play services not available or outdated
            } else {
              // some other error happened
            }
          }
      }
    return (
        <SafeAreaView>
        <ScrollView>
        <View style={styles.container}>
            {console.log(userGoogleInfo, loaded)}
            <Text style={styles.welcomeText}>Welcome <Text style={styles.backText}>Back!</Text></Text>
            <Text style={styles.loginToYourAccText}>Login to your existing account</Text>
            <View style={{
                flexDirection: 'row',
                borderWidth: 1, borderColor: "#DBDBDB",
                color: "#BB952D",
                borderRadius: 25, height: 50, width: Dimensions.get('window').width * 2 / 2.5, marginTop: 20,
            }}>

                <Image
                    source={require('./assets/Vectorusername.png')}
                    style={styles.imageStyle}
                />
                <TextInput
                    placeholder="John Doe" onChangeText={(e) => {setEmail(e)}} placeholderTextColor="#DBDBDB" style={{ flex: 1 }} />

            </View>

            <View style={{
                flexDirection: 'row',
                borderWidth: 1, borderColor: "#DBDBDB",
                color: "#BB952D",
                borderRadius: 25, height: 50, width: Dimensions.get('window').width * 2 / 2.5, marginTop: 20,
            }}>

                <Image
                    source={require('./assets/Vectorpassword.png')}
                    style={styles.imageStyle}
                />
                <TextInput
                    placeholder="John Doe" onChangeText={(e) => {setPassword(e)}} placeholderTextColor="#DBDBDB" style={{ flex: 1 }} />

            </View>

            <TouchableOpacity style={styles.forgotPassword}>
                <Text style={{ color: '#6b6b6b' }}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {signInToHome()}} style={styles.loginBtn}>
                <Text style={{ color: '#fff', fontSize: 15, fontWeight: '400' }}>LOG IN</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ borderBottomColor: '#6b6b6b', borderBottomWidth: 0.6, width: 150, marginRight: 10 }}></View>
                <Text style={{ top: 7, fontSize: 16, color: '#6b6b6b' }}>or</Text>
                <View style={{ borderBottomColor: '#6b6b6b', borderBottomWidth: 0.6, width: 150, marginLeft: 10 }}></View>
            </View>

            <TouchableOpacity onPress={() => SignInWithFacebook()} style={styles.facebookBtn}>
                <Image source={require('./assets/facebook.png')} style={styles.facebookIcon} />
                <Text style={{ color: '#fff', marginLeft: 10 }}>Continue with Facbook</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => SignInWithGoogle()} style={styles.googleBtn}>
                <Image source={require('./assets/googleIcon.png')} style={styles.facebookIcon} />
                <Text style={{ color: '#000000', marginLeft: 10 }}>Continue with Google</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', marginTop: 25 }}>
                <Text>Don't have an Account?</Text>
                <TouchableOpacity onPress={() => {goTOSignUp()}} style={{ left: 7, }}>
                    <Text style={{ color: '#3C5A9A' }}>Sign up</Text>
                </TouchableOpacity>
            </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'column',
        marginBottom:5
    },

    welcomeText: {
        color: '#000000',
        fontWeight: '700',
        fontSize: 32,
        fontStyle: 'normal',
        marginTop: 20
    },

    backText: {
        color: '#ba942d',
        fontWeight: '700',
        fontSize: 32,
        fontStyle: 'normal'
    },

    loginToYourAccText: {
        color: '#6b6b6b',
        marginTop: 13,
        fontSize: 16,
        fontWeight: '400'
    },

    imageStyle: {
        padding: 0,
        marginLeft: 20,
        margin: 12,
        height: 18,
        width: 18,
        resizeMode: 'stretch',
        alignItems: 'center',
    },

    forgotPassword: {
        marginLeft: 210,
        marginTop: 10
    },

    loginBtn: {
        backgroundColor: '#000000',
        width: 240,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 28
    },

    facebookBtn: {
        width: 308,
        height: 50,
        backgroundColor: '#3C5A9A',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        flexDirection: 'row'
    },

    facebookIcon: {
        width: 20,
        height: 20
    },

    googleBtn: {
        width: 308,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#D3D3D3'
    }

})

export default SignInScreen;