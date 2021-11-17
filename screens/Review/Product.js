import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

class Product extends React.Component {

  
    render(){
        return(
            <SafeAreaView>

        

            <View style={styles.Hijab}>
                

                <Image style={styles.hijabImage} source={require('./assets/hijabImage1.png')}/>
                <View style={{width:140}}>
                    <Text style={styles.hijabName}>Modest Forver Black Nida Abaya</Text>
                    <Text style={styles.size}>Size:M</Text>
                </View>
                <View>
                    <View style={{marginTop:22}}>
                    <Text>PKR</Text>
                    <Text style={{fontSize:17, color:'#000000', marginLeft:10}}>5190</Text>
                    </View>
                    
                   

                </View>

            </View>
            </SafeAreaView>

        )
    }
}
const styles = StyleSheet.create({
 
 
  

    Hijab:{
        width:'100%',
        height:163,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'white',
        marginTop:20,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around',
        alignSelf:'center',
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
export default Product