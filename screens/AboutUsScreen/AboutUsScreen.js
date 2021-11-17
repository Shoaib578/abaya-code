import React from 'react'
import {Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity,View, FlatList} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const AboutUsScreen = () => {
    return(
        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
            <Text style={styles.ourStoryText}>Our Story</Text>
            <View style={styles.aboutUsTextView}>
            <Text style={styles.CEOIntro}>This is Shaimaa Amer, Founder and CEO of Best Abaya located in North Carolina USA</Text>
                   <Text style={styles.bestReasons}>We found Best Abaya back in 2013 for two reasons :</Text>
                   <Text style={styles.prettyDesigns}>First to provide high quality and pretty designs 
                   but also  to encourage and improve  Islamic women wear world wide</Text>
                   <Text style={styles.missionStatement}>Mission Statement</Text>
                   <Text style={styles.ourMission}>Our mission is to provide confident and comfortable wear for our customers.</Text>

                    <Text style={styles.customersAgree}>As 100 customers agree that we have the best abaya out there.</Text>
                    <View style={{marginTop:33, flexDirection:'row'}}>
                    <Text style={styles.thanksForChoosing}>Thank you for choosing Best Abaya</Text>
                    <Image style={{width:27, height:33, marginLeft:5, marginTop:-7}} source={require('./assets/thumbsUp.png')}/>
                    </View>
            </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F9F9F9'
    },

    ourStoryText:{
        fontSize:28,
        color:'#000000',
        fontWeight:'400',
        fontStyle:'normal',
        marginLeft:35,
        marginTop:30
    },

    aboutUsTextView:{
        marginLeft:35,
        marginRight:35,
        marginTop:13
    },

    CEOIntro:{
        fontStyle:'normal',
        fontSize:15,
        color:'#262626',
        lineHeight:21
    },

    bestReasons:{
        fontSize:15,
        marginTop:11,
        fontStyle:'normal',
        color:'#262626',
        lineHeight:21
    },
    prettyDesigns:{
        fontSize:15,
        marginTop:20,
        fontStyle:'normal',
        color:'#262626',
        lineHeight:21
    },

    missionStatement:{
        fontSize:28,
        color:'#000000',
        fontWeight:'400',
        fontStyle:'normal',
        marginTop:18
    },

    ourMission:{
        fontStyle:'normal',
        fontSize:15,
        color:'#262626',
        lineHeight:21,
        marginTop:17
    },

    customersAgree:{
        fontStyle:'normal',
        fontSize:15,
        color:'#262626',
        lineHeight:21,
        marginTop:17
    },

    thanksForChoosing:{
        fontStyle:'normal',
        fontSize:19,
        color:'#262626',
    }
})

export default AboutUsScreen;