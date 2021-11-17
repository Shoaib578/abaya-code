import React,{useState} from "react";
import {Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity,View, FlatList,ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useEffect } from "react/cjs/react.development";
import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = ({navigation}) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [CartList, setCartList] = useState([])
    const [TotalPrice, setTotalPrice] = useState('')
    const goToAdress = () => {
        navigation.navigate('address', {"Price":getPrice()})
    }

    useEffect(() => {
        getCartList();
        
    },[])

    const getCartList = async () => {
        const values = await AsyncStorage.getItem('UserData')
        const userData = JSON.parse(values)
        await Axios.get(`http://ime.geu.mybluehost.me/api/getcart/${userData.id}`)
        .then(res => {
            setCartList(res.data)
        })
    }

    const getPrice = () => {
        var totalPrice = 0;
        CartList.map((myitem) => {
            var quantity = parseInt(myitem.Quantity)
            totalPrice += parseFloat(myitem.RetailPrice * quantity);
        })

        return totalPrice
    }
    return(
        <SafeAreaView>
            <ScrollView>
                {console.log(TotalPrice)}
            <View style={styles.container}>
            <View style={{flexDirection:'row', marginTop:30, alignItems:'center'}}>
                <View style={{flexDirection:'column', alignItems:'center', marginTop:16}}>
                <Image style={styles.shipping} source={require('./assets/shipping.png')}/>
                <Text>Shipping</Text>
                </View>
                <View style={{backgroundColor:'gray', width:66, height:1, marginLeft:5}}></View>
                <View style={{flexDirection:'column', alignItems:'center', marginLeft:5, marginTop:16}}>
                <Image style={styles.shipping2} source={require('./assets/shipping.png')}/>
                <Text>Payment</Text>
                </View>
                <View style={{backgroundColor:'gray', width:66, height:1, marginLeft:5}}></View>
                <View style={{flexDirection:'column', alignItems:'center', marginLeft:5,marginTop:16}}>
                <Image style={styles.shipping} source={require('./assets/shipping.png')}/>
                <Text>Review</Text>
                </View>
            </View>

            
            <Text style={styles.cart}>CART</Text>
            {CartList.map((item, index) => (
                
                <View key={index + Math.random()} style={styles.Hijab}>
                <Image style={styles.hijabImage} source={{uri:"http://ime.geu.mybluehost.me/storage/uploads/products/"+item.ImagePath.slice(2,-2)}}/>
                <View style={{width:140}}>
                    <Text style={styles.hijabName}>{item.ProductName}</Text>
                    <Text style={styles.size}>Size:M</Text>
                </View>
                <View>
                    <View style={{marginTop:22}}>
                    <Text>PKR</Text>
                    <Text style={{fontSize:17, color:'#000000', marginLeft:10}}>{item.RetailPrice}</Text>
                    </View>
                    <View style={{paddingTop:20}}>
                        <Text>Quantity: </Text>
                        <View>
                            <Text>{item.Quantity}</Text>
                        </View>
                    </View>
                </View>
            </View>
            )) }
            

            <View style={{marginTop:20}}>
                <View style={{flexDirection:'row',justifyContent: 'space-between',}}>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'black'}}>Order Total</Text>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'black'}}>Rs. {getPrice()}</Text>

                </View>


                {/* <View style={{flexDirection:'row',justifyContent: 'space-between',marginTop:10}}>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'black'}}>Shipping Charges</Text>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'black'}}>Rs. 199</Text>

                </View> */}

                {/* <Text style={{width:Dimensions.get('window').width*2/2.2,height:1,borderColor:'gray',borderWidth:.7,marginTop:20}}></Text>

                <View style={{flexDirection:'row',justifyContent: 'space-between',marginTop:10,marginBottom:20}}>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'black'}}>Total Payable</Text>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'black'}}>{getPrice() + 199}</Text>

                </View> */}



            </View>

                    <TouchableOpacity onPress={() => goToAdress()} style={{borderColor:'black',alignSelf:'center',alignItems: 'center',backgroundColor:'black',justifyContent: 'center',borderWidth:1,borderRadius:30,width:Dimensions.get('window').width*2/3.5,marginBottom:30,marginTop:30}}>
                        <View style={{flexDirection:'row',justifyContent: 'center'}}>
                        <Text style={{fontFamily:'Sen',fontSize:20,color:'white',padding:10}}>Proceed </Text>
                        <Text style={{fontFamily:'Sen',fontSize:28,color:'white',padding:5}}>{'>'}</Text>

                        </View>
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

export default CartScreen;