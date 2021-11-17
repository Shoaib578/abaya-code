import React from 'react';
import {Text, SafeAreaView, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity,View, FlatList} from 'react-native';

const allData = [
    {
        'id':'1',
        'name':'Contemporary Pumps',
        'PKR':5190,
        'image':require('./assets/bag1.png'),
    },{
        'id':'2',
        'name':'Sling Back Pumps',
        'PKR':9880,
        'image':require('./assets/bag2.png'),
    },{
        'id':'3',
        'name':'Women Square Toe Pumps',
        'PKR':5190,
        'image':require('./assets/bag3.png'),
    },{
        'id':'4',
        'name':'Beaded Cozy Ladies Chappals',
        'PKR':5190,
        'image':require('./assets/bag4.png'),
    },
]

const BagsScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={{marginLeft:30,marginTop:25}}>
            
            <Text style={styles.trendingText}>Bags</Text>
            </View>
            <View style={{top:15, marginBottom:70}}>
            <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={true}
            data={allData}
            renderItem={({item,index}) => (
                    <View key={item.id} style={{width:150, margin:25}}>
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

export default BagsScreen;