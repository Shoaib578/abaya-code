import React from 'react'
import {Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity,View, FlatList,ScrollView} from 'react-native';
import {useNavigation } from '@react-navigation/native';

import {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';



    var payment_method_radio_props = [
      {lable:'Debit Card',key:0},
     
      {lable:'Venmo',key:1},
      {lable:'Cash App',key:2}
    

  ]

//   StripePayment
class Payment extends React.Component {
    
    state = {
        radio_value:''
    }

    goToReview(){
        if(this.state.radio_value == "Debit Card"){
            this.props.navigation.navigate('StripePayment')
        }else if(this.state.radio_value == "Cash App"){
            this.props.navigation.navigate("CashApp")
        }else{
            this.props.navigation.navigate("Venmo")
        }
        
    }
    render(){
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
            <Image style={styles.shipping} source={require('./assets/shipping2.png')}/>
            <Text>Review</Text>
            </View>
        </View>

        <Text style={{color:'black',fontSize:30,textAlign:'center',fontWeight:'bold',marginTop:20,fontFamily:'Sen'}}>Payment</Text>
            
            <View style={{alignSelf:'center',}}>
            <Text style={{color:'black',fontSize:25,marginTop:10}}>Choose a payment Method</Text>

            <Text style={{fontSize:18,marginTop:6,}}>You will not be charged until you confirm </Text>
            <Text style={{fontSize:18}}>your order</Text>
            </View>

            <Text style={{width:Dimensions.get('window').width*2/2.3,height:1,borderColor:'gray',borderWidth:.7,marginTop:20,alignSelf:'center'}}></Text>



            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginTop:20}}>
           <Image source={require('./assets/zell_dot.png')} style={{width:36,height:36,marginLeft:10}}/>


            <Image source={require('./assets/zelle.png')} style={{width:48,height:25,right:30}}/>


            </View>

            <Text style={{fontSize:18,marginTop:6,marginLeft:30}}>Continuing will take you to your Zelle account.</Text>




            <TouchableOpacity style={{borderColor:'black',alignSelf:'center',alignItems: 'center',backgroundColor:'black',justifyContent: 'center',borderWidth:1,borderRadius:30,width:Dimensions.get('window').width*2/3.5,marginTop:30}}>
                    
                    <Text style={{fontFamily:'Sen',fontSize:20,color:'white',padding:10}}>Continue </Text>
                    

                   
                </TouchableOpacity>

                <Text style={{width:Dimensions.get('window').width*2/2.3,height:1,borderColor:'gray',borderWidth:.7,marginTop:20,alignSelf:'center'}}></Text>


        <View >

            {payment_method_radio_props.map((data, index)=>{
                if(data.lable == 'Debit Card'){
                    return (
                        <View key={index + Math.random()} style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
                            <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>{
                            if(this.state.radio_value != data.lable){
                                this.setState({radio_value: data.lable})
                            }
                        }} style={{
                            height: 24,
                            width: 24,
                            borderRadius: 12,
                            borderWidth: 2,
                            borderColor: '#000',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft:30
                          }}>
                                {data.lable == this.state.radio_value?<View style={{
                                  height: 12,
                                  width: 12,
                                  borderRadius: 6,
                                  backgroundColor: '#000',
                                }}/>:null}
    
                                </TouchableOpacity>
                                    <Text style={{left:10,color:'black',fontSize:17}}>{data.lable}</Text>
                                    </View>
    
                                    <View style={{flexDirection: 'row',right:30}}>
                                    <Image source={require('./assets/master_card.png')} style={{width:47,height:26}}/>
                                    </View>


                            </View>
    
                    
                    )
                }else if(data.lable == 'Venmo'){
                    return(
                        <View >
            <Text style={{width:Dimensions.get('window').width*2/2.3,height:1,borderColor:'gray',borderWidth:.7,marginTop:20,alignSelf:'center'}}></Text>

                            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
                        <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{
                            if(this.state.radio_value != data.lable){
                                this.setState({radio_value: data.lable})
                            }
                        }} style={{
                        height: 24,
                        width: 24,
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor: '#000',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft:30
                      }}>
                            {data.lable == this.state.radio_value?<View style={{
                              height: 12,
                              width: 12,
                              borderRadius: 6,
                              backgroundColor: '#000',
                            }}/>:null}
    
                            </TouchableOpacity>
                                <Text style={{left:10,color:'black',fontSize:17}}>{data.lable}</Text>
                                </View>
    
                                <View style={{flexDirection: 'row',right:30}}>
                                <Image source={require('./assets/venom.png')} style={{width:47,height:26}}/>
                                </View>

                                </View>
                        </View>
                    )
                   

                }else if(data.lable == 'Cash App'){
                    return(
                        <View >
            <Text style={{width:Dimensions.get('window').width*2/2.3,height:1,borderColor:'gray',borderWidth:.7,marginTop:20,alignSelf:'center'}}></Text>

                            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
                        <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{
                            if(this.state.radio_value != data.lable){
                                this.setState({radio_value: data.lable})
                            }
                        }} style={{
                        height: 24,
                        width: 24,
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor: '#000',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft:30
                      }}>
                            {data.lable == this.state.radio_value?<View style={{
                              height: 12,
                              width: 12,
                              borderRadius: 6,
                              backgroundColor: '#000',
                            }}/>:null}
    
                            </TouchableOpacity>
                                <Text style={{left:10,color:'black',fontSize:17}}>{data.lable}</Text>
                                </View>
    
                                <View style={{flexDirection: 'row',right:30}}>
                                <Image source={require('./assets/cash_app.png')} style={{width:47,height:26}}/>
                                </View>

                                </View>
                        </View>
                    )
                }
               
            })}
          


          


        <TouchableOpacity onPress={() => this.goToReview()} style={{borderColor:'black',alignSelf:'center',alignItems: 'center',backgroundColor:'black',justifyContent: 'center',borderWidth:1,borderRadius:30,width:Dimensions.get('window').width*2/3.5,marginBottom:30,marginTop:40}}>
                    <View style={{flexDirection:'row',justifyContent: 'center'}}>
                    <Text style={{fontFamily:'Sen',fontSize:20,color:'white',padding:10}}>Proceed </Text>
                    <Text style={{fontFamily:'Sen',fontSize:28,color:'white',padding:5}}>{'>'}</Text>

                    </View>
                </TouchableOpacity>
        </View>
            </View>
            </ScrollView>
    </SafeAreaView>
        )
    }
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

export default Payment