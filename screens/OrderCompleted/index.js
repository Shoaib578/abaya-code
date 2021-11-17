import React from 'react'
import {Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity,View, FlatList,ScrollView} from 'react-native';

class OrderCompleted extends React.Component {
    render(){
        return (
           <SafeAreaView>
               <ScrollView>
               <Image source={require('./assets/order_completed.png')} style={{width:208,height:227,alignSelf: 'center',marginTop:20}}/>
               <Text style={{color:'black',fontSize:30,textAlign: 'center'}}>Your Order is completed</Text>
               <Text style={{fontSize:20,textAlign: 'center'}}>You will be receiving a confirmation email with order details.</Text>
               <Text style={{fontSize:20,textAlign: 'center',marginTop:10}}>Your order ID is :</Text>


               <Text style={{color:'black',fontSize:25,textAlign: 'center',marginTop:10}}>Order#051321</Text>

               <Text style={{fontSize:20,textAlign: 'center',marginTop:10}}>We’ll notify you when your order has shipped</Text>


                <TouchableOpacity style={{borderColor:'#BB952D',alignSelf:'center',alignItems: 'center',backgroundColor:'white',justifyContent: 'center',borderWidth:1,borderRadius:30,marginBottom:30,padding:15,marginTop:40}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('./assets/explore.png')} style={{width:30,height:30}}/>
                <Text style={{color:'#BB952D',fontSize:18,marginLeft:8}}> Explore more products</Text>
                </View>
                </TouchableOpacity>
            </ScrollView>
           </SafeAreaView>
        )
    }
}

export default OrderCompleted;