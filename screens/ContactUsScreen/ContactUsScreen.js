import React from 'react'
import {Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity,View, FlatList} from 'react-native'

const ContactUsScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.anyQuestion}>If you have any question plz !!</Text>
            <Text style={styles.emailUs}>Email Us</Text>
            <View style={styles.emailBox}>
                <Text style={styles.email}>shaimaa.amernc@gmail.com</Text>
                <Image style={styles.envelopIcon} source={require('./assets/envelop.png')}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },

    anyQuestion:{
        fontSize:28,
        color:'#000000',
        marginTop:30
    },

    emailUs:{
        fontSize:23,
        color:'#5B5B5B',
        marginTop:35,
        fontWeight:'400',
        fontStyle:'normal'
    },

    emailBox:{
        width:370,
        height:51,
        backgroundColor:'#FFFFFF',
        borderWidth:1,
        borderColor:'#EBEBEB',
        marginTop:15,
        flexDirection:'row',
        alignItems:'center'
    },

    email:{
        fontSize:18,
        color:'#5B5B5B',
        position:'absolute',
        left:'4.5%'

    },

    envelopIcon:{
        position:'absolute',
        width:30,
        height:20,
        left: '87.38%',
        right: '9.18%'
    }
})

export default ContactUsScreen;