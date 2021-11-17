import React,{useEffect, useState} from 'react';
import {Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity,View, FlatList,ScrollView} from 'react-native';
import {useNavigation } from '@react-navigation/native';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectDropdown from 'react-native-select-dropdown'


const Address = ({route, navigation}) => {
  const Price = route.params.Price;
  console.log(Price)

  const [username, setUserName] = useState('');
  const [contactNumber, setContactNumber] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [cities, setCities] = useState([])
  const [city, setCity] = useState('')
  const [cityId, setCityId] = useState('')

  useEffect(() => {
    getCities();
  }, [])

  const getCities = async () => {
    await Axios.get('http://ime.geu.mybluehost.me/api/getcities').then(res => {
      setCities(res.data);
    })
  }


  const goToPayment = async () => {
    const values = await AsyncStorage.getItem('UserData')
    const userData = JSON.parse(values)

    const data = new FormData();
    data.append("UserId", userData.id)
    data.append("FullName", username)
    data.append("ContactNumber", contactNumber)
    data.append("Email", email)
    data.append("Address", address)
    data.append('City', city)
    data.append("PostalCode", postalCode)

    await fetch("http://ime.geu.mybluehost.me/api/addaddress", {
      method:"POST",
      "Content-Type": "application/json",
      body:data
    }).then((response) => response.json().then(
      response => {
        if(response.Response == "Success"){
          navigation.navigate('review', {"CityId":cityId, "Name":username, "ContactNumber":contactNumber, "postalCode":postalCode, "Price":Price, "Address":address});
        }
      }
    ))
    
  }
      
        return (
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

            <Text style={{color:'black',fontSize:28,textAlign:'center',fontWeight:'bold',marginTop:20}}>ADDRESS</Text>

            <View style={{alignItems:'center'}}>

            <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.3,marginTop:20,
                        
                            }}>

            <Image
            source={require('./assets/username.png')}
            style={styles.imageStyle}
          />
            <TextInput 
            placeholder="John Doe" onChangeText={(e) => {setUserName(e)}}  placeholderTextColor="#DBDBDB" style={{flex:1}}/>

            </View>



            <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.3,marginTop:20,
                        
                            }}>

            <Image
            source={require('./assets/Vectoremail.png')}
            style={styles.imageStyle}
          />

            <TextInput 
            placeholder="Email" onChangeText={(e) => {setEmail(e)}} placeholderTextColor="#DBDBDB" style={{flex:1}}/>
            </View>


            <View style={{
               flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.3,marginTop:20,
            }}>

            <Image
            source={require('./assets/Vectorphone.png')}
            style={styles.phoneImageStyle}
            />

            <TextInput placeholder="Phone" onChangeText={(e) => {setContactNumber(e)}} keyboardType="numeric" placeholderTextColor="#DBDBDB" style={{flex:1}} 
            />
            </View>


            <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.3,marginTop:20,
                        
                            }}>

            <Image
            source={require('./assets/address.png')}
            style={styles.imageStyle}
          />

            <TextInput 
            placeholder="Address" onChangeText={(e) => {setAddress(e)}} placeholderTextColor="#DBDBDB" style={{flex:1}}/>
            </View>



            {/* <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.3,marginTop:20,
                        
                            }}>

            <Image
            source={require('./assets/city.png')}
            style={styles.imageStyle}
          />

            <TextInput 
            placeholder="City" onChangeText={(e) => {setCity(e)}} placeholderTextColor="#DBDBDB" style={{flex:1}}/>
            </View> */}

            <SelectDropdown
            buttonStyle={styles.dropDown}
            defaultButtonText="Select City"
	           data={cities}
	           onSelect={(selectedItem, index) => {
		            setCity(selectedItem.CityName)
                setCityId(selectedItem.CityId)
	           }}
	          buttonTextAfterSelection={(selectedItem, index) => {
		        // text represented after item is selected
		        // if data array is an array of objects then return selectedItem.property to render after item is selected
		        return selectedItem.CityName
	          }}
	          rowTextForSelection={(item, index) => {
		        // text represented for each item in dropdown
		       // if data array is an array of objects then return item.property to represent item in dropdown
		       return item.CityName
	         }}
           />


            
            <View style={{ flexDirection: 'row',
                            borderWidth:1,borderColor:"#DBDBDB",
                            color:"#BB952D",

                            borderRadius:25,height:50,width:Dimensions.get('window').width*2/2.3,marginTop:20,
                        
                            }}>

            <Image
            source={require('./assets/postalcode.png')}
            style={styles.imageStyle}
          />

            <TextInput 
            placeholder="Postal Code" onChangeText={(e) => {setPostalCode(e)}} placeholderTextColor="#DBDBDB" style={{flex:1}}/>
            </View>




            <TouchableOpacity onPress={() => goToPayment()} style={{borderColor:'black',alignSelf:'center',alignItems: 'center',backgroundColor:'black',justifyContent: 'center',borderWidth:1,borderRadius:30,width:Dimensions.get('window').width*2/3.5,marginBottom:30,marginTop:30}}>
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
    },

    dropDown:{
      marginTop:20,
      width:Dimensions.get('window').width*2/2.3,
      borderRadius:20
    }
})

export default Address;