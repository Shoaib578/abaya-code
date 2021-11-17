import React from 'react';
import {Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity,View, FlatList} from 'react-native';

const allData = [
    {
        'id':'1',
        'name':'Contemporary Pumps',
        'PKR':5190,
        'image':require('./assets/shoe1.png'),
    },{
        'id':'2',
        'name':'Sling Back Pumps',
        'PKR':9880,
        'image':require('./assets/shoe2.png'),
    },{
        'id':'3',
        'name':'Women Square Toe Pumps',
        'PKR':5190,
        'image':require('./assets/shoe3.png'),
    },{
        'id':'4',
        'name':'Beaded Cozy Ladies Chappals',
        'PKR':5190,
        'image':require('./assets/shoe4.png'),
    },
]

const ShoesScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={{marginLeft:33,marginTop:25}}>
            
            <Text style={styles.trendingText}>Shoes</Text>
            </View>
            <View style={{top:25, marginBottom:80}}>
            <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={true}
            data={allData}
            renderItem={({item,key}) => (
                    <View key={item.id} style={{width:150, marginBottom:20, marginLeft:20}}>
                    <Image style={{width:157, height:140}} source={item.image}/>
                    <Text style={{ color:'#000000'}}>{item.name}</Text>
                    <Text style={{color:'#ba942d'}}>PKR{item.PKR}</Text>
                    </View>
            )}
            />
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    trendingText:{
        color:'#000000',
        fontWeight:'400',
        fontSize:27,
        fontStyle:'normal',
        
    },

    heart:{
        width:19,
        height:17,
        top:-255,
        left:120
    }
})

export default ShoesScreen;