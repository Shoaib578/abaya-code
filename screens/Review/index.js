import React, { useEffect, useState } from 'react'
import {Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity,View, FlatList,ScrollView} from 'react-native';
import Product from './Product'
import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Review = ({navigation, route}) => {
    const CityId = route.params.CityId;
    const Name = route.params.Name;
    const ContactNumber = route.params.ContactNumber;
    const postalCode = route.params.postalCode;
    const Price = route.params.Price;
    const OrderAddress = route.params.Address;

    const [deliveryAddress, setDeliveryAddress] = useState([])

    useEffect(() => {
        getShippingCharges();
    }, [])

    const getShippingCharges = async () => {
        await Axios.get(`http://ime.geu.mybluehost.me/api/getdeliverycharges/${CityId}`).then(res => {
            setDeliveryAddress(res.data[0])
        })
    }

    const PayablePrice = parseFloat(Price) + parseFloat(deliveryAddress.DeliveryCharges)

    const Pay = async () => {
        const values = await AsyncStorage.getItem('UserData')
        const userData = JSON.parse(values)

        const date = new Date();
        const ADate = date.getDate()
        const AMonth = date.getMonth()
        const AYear = date.getFullYear()

        console.log(ADate)

        const Data = new FormData();
        Data.append("UserId", userData.id)
        Data.append("FullName", Name)
        Data.append("ContactNumber", ContactNumber)
        Data.append("Email", userData.email)
        Data.append("Address", OrderAddress)
        Data.append("CityId", deliveryAddress.CityId)
        Data.append("PostalCode", postalCode)
        Data.append("OrderDate", AYear-AMonth-ADate)
        await fetch("http://ime.geu.mybluehost.me/api/addorder", {
            method:"POST",
            "Content-Type": "application/json",
            body:Data
        }).then(response => response.json()).then(
            response => {
                if(response != null){
                    navigation.navigate('StripePayment', {"Money":PayablePrice});
                }
            }
        )
        
    }

        return(
            <SafeAreaView>
            <ScrollView>
                <View style={{backgroundColor:'#FFFFFF',flex:1}}>
            <View style={{flexDirection:'row', marginTop:30, alignItems:'center',alignSelf: 'center'}}>
            <View style={{flexDirection:'column', alignItems:'center', marginTop:16}}>
            <Image style={styles.shipping} source={require('./assets/shipping1.png')}/>
            <Text>Shipping</Text>
            </View>
            <View style={{backgroundColor:'gray', width:66, height:1, marginLeft:5}}></View>
            <View style={{flexDirection:'column', alignItems:'center', marginLeft:5, marginTop:16}}>
            <Image style={styles.shipping2} source={require('./assets/shipping2.png')}/>
            <Text>Payment</Text>
            </View>
            <View style={{backgroundColor:'gray', width:66, height:1, marginLeft:5}}></View>
            <View style={{flexDirection:'column', alignItems:'center', marginLeft:5,marginTop:16}}>
            <Image style={styles.shipping} source={require('./assets/shipping3.png')}/>
            <Text>Review</Text>
            </View>
            
            
        </View>


  
        <Text style={{color:'black',fontSize:30,textAlign:'center',fontWeight:'bold',marginTop:20,fontFamily:'Sen'}}>REVIEW</Text>

            <View style={{backgroundColor:'#EEEEEE',width:Dimensions.get('window').width*2/2.3,padding:10,alignSelf:'center',marginTop:15}}>
                <Text style={{color:'black',fontSize:25,}}>2 items</Text>



                
                    <Product />
                    <Product />


            </View>


            
            <View style={{backgroundColor:'#EEEEEE',width:Dimensions.get('window').width*2/2.3,padding:10,alignSelf:'center',marginTop:15}}>
                <Text style={{color:'black',fontSize:25,}}>Order Details</Text>
                </View>
            <View style={{marginTop:20,alignSelf:'center',width:Dimensions.get('window').width*2/2.3}}>
                <View style={{flexDirection:'row',justifyContent: 'space-between',}}>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'black'}}>Order Total</Text>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'black'}}>{Price}</Text>

                </View>


                <View style={{flexDirection:'row',justifyContent: 'space-between',marginTop:10}}>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'black'}}>Shipping Charges</Text>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'black'}}>{deliveryAddress.DeliveryCharges}</Text>

                </View>

                <View style={{flexDirection:'row',justifyContent: 'space-between',marginTop:10}}>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'black'}}>Processing Time</Text>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'black'}}>{deliveryAddress.ProcessingTime}</Text>

                </View>

                <Text style={{width:Dimensions.get('window').width*2/2.2,height:1,borderColor:'gray',borderWidth:.7,marginTop:20}}></Text>

                <View style={{flexDirection:'row',justifyContent: 'space-between',marginTop:10,marginBottom:20}}>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'black'}}>Total Payable</Text>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'black'}}>{parseFloat(Price) + parseFloat(deliveryAddress.DeliveryCharges)}</Text>

                </View>



            </View>



            <View style={{backgroundColor:'#EEEEEE',width:Dimensions.get('window').width*2/2.3,padding:10,alignSelf:'center',marginTop:15}}>
                <Text style={{color:'black',fontSize:25,}}>Delivery Address</Text>
                </View>


                <Text style={{color:'black',fontSize:20,fontWeight:'bold',left:30,marginTop:20}}>{Name}</Text>
                <Text style={{color:'black',fontSize:20,left:30,marginTop:10}}>{ContactNumber}</Text>
                <Text style={{color:'black',fontSize:20,left:30,marginTop:10}}>Postal Code: {postalCode}</Text>
                <Text style={{color:'black',fontSize:20,left:30,marginTop:10}}>{deliveryAddress.CityName}</Text>



                <TouchableOpacity onPress={() => Pay()} style={{borderColor:'black',alignSelf:'center',alignItems: 'center',backgroundColor:'black',justifyContent: 'center',borderWidth:1,borderRadius:30,width:Dimensions.get('window').width*2/3.5,marginBottom:30,marginTop:40}}>
                    <Text style={{fontFamily:'Sen',fontSize:20,color:'white',padding:10}}>Confirm Order </Text>
                    

                </TouchableOpacity>

            </View>
        </ScrollView>

        </SafeAreaView>
        )
    }

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#FFFFFF'
    },

    shipping:{
        width:32,
        height:32,
    },

    shipping2:{
        width:32,
        height:32,
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
      },
    Line:{
        width:62,
        borderBottomColor:'gray',
        borderBottomWidth:1,
    },

    cart:{
        marginTop:20,
        fontSize:29,
        color:'#000000',
        fontWeight:'bold',
        textAlign:'center'
        
    },

    Hijab:{
        width:Dimensions.get('window').width*2/2.2,
        height:163,
        borderRadius:37,
        borderWidth:1,
        borderColor:'gray',
        marginTop:20,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around'
    },

    hijabImage:{
        width:80, 
        height:100,
    },

    hijabName:{
        fontSize:16,
        color:'#000000'
    },

    size:{
        color:'#000000',
        marginTop:30
    }
})
export default Review