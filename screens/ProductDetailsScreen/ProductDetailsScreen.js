import React,{useEffect, useState} from 'react';
import {Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity,View, FlatList, ScrollView} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import Axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage';
const radioButtonsData = [
    {
      id: '1',
      value: 'image1',
      color: '#000000',
      selected: false,
    },
    {
      id: '2',
      value: 'image2',
      color: '#000000',
      selected: false,
    },
    {
        id: '3',
        value: 'image3',
        color: '#000000',
        selected: false,
      },
      {
        id: '4',
        value: 'image4',
        color: '#000000',
        selected: false,
      },
  ];

const ProductDetailsScreen =  ({route, navigation}) => {
    const [radioButtons, setRadioButtons] = useState(radioButtonsData);
    const [productVariant, setProductVariant] = useState({})
    const [count,setCount] = useState(0)
    const [color, setColor] = useState('')
    const ProductId = route.params.id
    
    useEffect(() => {
        getProductVariant();
    }, []);

    const {height, width} = Dimensions.get('window')

    const onPressRadioButton = radioButtonsArray => {
        console.log(radioButtonsArray);
        setRadioButtons(radioButtonsArray);
      };

      const GoBack = () => {
          navigation.goBack()
      }

      const getProductVariant = async () => {
          await Axios.get(`http://ime.geu.mybluehost.me/api/getproductvariants/${ProductId}`).then((res) =>  {
              console.log(res.data[0])
              setProductVariant(res.data[0])
          })
      }

      const SetColor = () => {
        setColor(productVariant[0].ColorName)
      }

      const addToCart = async () => {
        const values = await AsyncStorage.getItem('UserData')
        const userData = JSON.parse(values)
        console.log(userData.id)
        const productVariantId = productVariant[0].id
          const data = new FormData();
          data.append('UserId', userData.id)
          data.append('ProductVariantId', productVariantId)
          data.append('Quantity', count)
          data.append('ImagePath', productVariant[0].ImagePath)
          data.append('ProductName', productVariant[0].ProductName != null ? productVariant[0].ProductName : null)
          data.append('ColorName', color)


          await Axios.post('http://ime.geu.mybluehost.me/api/addtocart', data)
          .then((res) => {
              console.log(res)
              if(res.data.Response == "Success"){
                  alert("Product Successfully Added")
              }
          })
      }

      


    
    return(
        <SafeAreaView style={{backgroundColor:'#FFFFFF', flex:1}}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {GoBack()}}>
                <Image style={styles.arrowBack} source={require('./assets/backArrow.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image style={styles.cart} source={require('./assets/cart.png')}/>
                </TouchableOpacity>
            </View>
            <ScrollView>
            <View style={styles.product}>
                {productVariant.ImagePath != null ? 
                <Image style={{width:203, height:364}} source={{uri:"http://ime.geu.mybluehost.me/storage/uploads/products/"+productVariant.ImagePath.slice(2,-2)}}/>
                : null}
                
                <View>
                <RadioGroup
                 radioButtons={radioButtons}
                 onPress={onPressRadioButton}
                layout="row"
                containerStyle={styles.radioGroupBtns}
                />
                </View>
            </View>
            <View style={styles.productDetails}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <View>
                    <Text style={{fontSize:16, color:'#000000'}}>{productVariant.ProductName}</Text>
                    </View>
                    <View style={{backgroundColor:'#d3d3d3 ', width:'25%',padding:7, height:35,borderRadius:10,flexDirection:'row',justifyContent:'space-between'}}>
                        <TouchableOpacity onPress={()=>{
                            if(count != 0){
                                setCount(count-1)
                            }
                        }}>
                            <AntDesign name="minus" size={20} color="black"/>
                        </TouchableOpacity>

                        <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}>{count}</Text>
                        <TouchableOpacity onPress={()=>setCount(count+1)}>
                            <AntDesign name="plus" size={18} color="black"/>
                        </TouchableOpacity>
                    </View>

                </View>
                <Text style={{color:'#BB952D',fontSize:18,fontWeight:'bold',marginTop:10}}>{productVariant.RetailPrice}</Text>

                <View style={{marginTop:'10%'}}>
                    <Text style={{fontSize:16, color:'#212224'}}>Product Details</Text>
                    <Text style={{fontSize:16, color:'#212224'}}>{productVariant.ProductDescription}</Text>
                </View>
                <View style={{flexDirection:'row', marginTop:'10%', width:'50%', alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={{fontSize:18, color:'#363641'}}>Color:</Text>
                    <TouchableOpacity onPress={() => SetColor()} style={{width:30, height:30, backgroundColor:productVariant.ColorCode,borderRadius:15}}></TouchableOpacity>
                    <TouchableOpacity style={{width:30, height:30, backgroundColor:'#BB952D',borderRadius:15}}></TouchableOpacity>
                    <TouchableOpacity style={{width:40, height:40, backgroundColor:'#E5E5E5',borderRadius:20, borderWidth:1, borderColor:'#43163A'}}></TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', marginTop:'10%', justifyContent:'space-evenly', alignItems:'center'}}>
                    <Text>Total: <Text style={{fontSize:15, color:'#BB952D'}}>{productVariant.RetailPrice * count}</Text></Text>
                    <TouchableOpacity onPress={() => addToCart()} style={{backgroundColor:'#000000', width:160, height:50, borderRadius:30, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'#FFFFFF', fontSize:17}}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cart:{
        width:33,
        height:25,
    },

    arrowBack:{
        width:20.92,
        height:13.93
    },

    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'5%',
        marginRight:'5%',
        marginLeft:'5%',
    },

    product:{
        alignItems:'center'
    },

    radioGroupBtns:{
        marginTop:10,
        
    },

    productDetails:{
        width:'100%', 
        height:'100%',
        padding:'5%'
    }
    
})

export default ProductDetailsScreen;