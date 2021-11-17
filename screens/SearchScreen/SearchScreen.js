import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, StyleSheet, Keyboard, View, Image, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const SearchScreen = ({navigation}) => {
    const [Categories, setCategories] = useState([]);
    const [Name, setName] = useState('');
    const [result, setResult] = useState([])
    let res = []
    

    useEffect(() => {
      getData();
    }, [])

    const getData = async () => {
      await fetch('http://ime.geu.mybluehost.me/api/getcategories', {
          method:'GET',
          "Content-Type":"application/json"
      }).then((response) => response.json().then(
          response => setCategories(response)
      ))
  }
    const SearchData = () => {
      const wordToSearch = Name.charAt(0).toUpperCase() + Name.slice(1);
      Categories.filter((searchname) => {
        if(wordToSearch == searchname.CategoryName){
          res.push(searchname)
          setResult(res)
        }
    })
}

const GoBack = () => {
  navigation.goBack()
}

    const {width, height} = Dimensions.get('window')
    return(
        
        <SafeAreaView>
            <View style={{alignItems:'center', 
            height:height/4, 
            width:'100%', 
            flexDirection:'column', 
            backgroundColor:'#fff',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
    
            elevation: 5}}>
                <View style={{width:'85%', top:'20%'}}>
                  <TouchableOpacity onPress={() => GoBack()}>
                  <Image style={{width:30, height:19.61}} source={require('./assets/backArrow.png')}/>
                  </TouchableOpacity>
                </View>
                <View style={{position:'absolute', top:'50%'}}>
               <View style={{flexDirection:'row', justifyContent:'space-between', width:280,}}>
                   <Text style={{fontSize:12, color:'#000000'}}>Search</Text>
                   <Image style={{width:19, height:19}} source={require('./assets/change.png')}/>
               </View>
             <View style={{flexDirection:'row', alignItems:'center',}}>
               <TouchableOpacity onPress={() => SearchData()} style={{marginRight:10}}>
                 <Image style={{width:18, height:18}} source={require('./assets/search.png')}/>
               </TouchableOpacity>
             <TextInput onChangeText={(e) => {setName(e)}}  style={{borderBottomColor:'gray', borderBottomWidth:1, paddingVertical:-5, borderEndWidth:70}} placeholder="What would you like to buy today"/>
             </View>
             </View>
             </View>

             <View style={{width:'100%', height:'100%', alignItems:'center', padding:'5%'}}>
               {console.log(result)}
               <FlatList 
               data={result}
               renderItem={({item}) => (
                <TouchableOpacity onPress={() => {navigation.navigate('CategoryProducts', {"id": item.id, "CategoryName":item.CategoryName})}} style={styles.Category}>
                 <Text style={styles.CategoryName}>{item.CategoryName}</Text>
                </TouchableOpacity>
               )}/>
               
             </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
        
    },

    Category:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:10,
      paddingRight:60,
      paddingLeft:60,
      borderBottomColor:'gray',
      borderBottomWidth:1,
      height:50
  },
  
  CategoryName:{
      fontSize:20,
      color:'#000000'
  }
})

export default SearchScreen;