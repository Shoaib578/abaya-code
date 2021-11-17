import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation, DrawerActions, createNavigationContainerRef, useNavigationState } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ContactUsScreen from './screens/ContactUsScreen/ContactUsScreen';
import AboutUsScreen from './screens/AboutUsScreen/AboutUsScreen';
import ReturnPolicyScreen from './screens/ReturnPolicyScreen/ReturnPolicyScreen';
import FavoriteProducts from './screens/FavoriteProducts/index'
import Icon from 'react-native-vector-icons/Fontisto';

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <View style={{alignItems:'center', justifyContent:'center', paddingTop:35, paddingBottom:40}}>
          <Image style={{width:190, height:30}} source={require('./assets/drawer_logo.png')}/>
        </View>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
    )
}

const AbayaHomeDrawerNavigation = () => {
    const navigation = useNavigation();
    return (
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/>} screenOptions={{ drawerPosition: 'left' }}>
        <Drawer.Screen options={{
  
          headerLeft: () => (
            <View style={{ width: 8 }}></View>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <Image style={{ width: 21, height: 23, marginRight: 25 }} source={require('./screens/HomeScreen/assets/Vectorhamburger.png')} />
            </TouchableOpacity>
          ),
          headerTitle: () => <Text style={{ fontSize: 23, color: '#000000' }}>Categories</Text>,
          headerTitleAlign: 'left',
          headerStyle: {
            height: 60
          },
          drawerLabel: () => (
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Icon style={{marginLeft:7}} name="home" color="#7C7C7C" size={19} />
              <Text style={{color:'#7C7C7C', fontSize:17, marginLeft:60}}>Home</Text>
              <Image style={{width:7, height:12.6, marginLeft:115}} source={require('./assets/drawer_arrow.png')}/>
            </View>
          ),
          drawerActiveBackgroundColor: '#F9F9F9',
          drawerLabelStyle: { fontSize: 17, color: '#000000' },
          drawerStyle: { backgroundColor: '#F9F9F9', width: 306 },
          drawerItemStyle: { borderBottomColor: '#D3D3D3', borderBottomWidth: 1.5 }
  
  
        }} name='myhome' component={HomeScreen} />

<Drawer.Screen options={{
  headerShown:false,
  drawerLabel: () => (
    <View style={{flexDirection:'row', alignItems:'center'}}>
      <Image style={{width:16.47, height:22.98, marginLeft:7}} source={require('./assets/contact_us.png')}/>
      <Text style={{color:'#7C7C7C', fontSize:17, marginLeft:60}}>Contact Us</Text>
      <Image style={{width:7, height:12.6, marginLeft:80}} source={require('./assets/drawer_arrow.png')}/>
    </View>
  ),
  drawerActiveBackgroundColor: '#F9F9F9',
  drawerLabelStyle: { fontSize: 17, color: '#000000' },
  drawerStyle: { backgroundColor: '#F9F9F9', width: 306 },
  drawerItemStyle: { borderBottomColor: '#D3D3D3', borderBottomWidth: 1.5 }


}} name='Contact' component={ContactUsScreen} />

  <Drawer.Screen options={{
  headerShown:false,
  drawerLabel: () => (
    <View style={{flexDirection:'row', alignItems:'center'}}>
      <Image style={{width:19, height:18.98, marginLeft:7}} source={require('./assets/rate_us.png')}/>
      <Text style={{color:'#7C7C7C', fontSize:17, marginLeft:60}}>Rate Us</Text>
      <Image style={{width:7, height:12.6, marginLeft:105}} source={require('./assets/drawer_arrow.png')}/>
    </View>
  ),
  drawerActiveBackgroundColor: '#F9F9F9',
  drawerLabelStyle: { fontSize: 17, color: '#000000' },
  drawerStyle: { backgroundColor: '#F9F9F9', width: 306 },
  drawerItemStyle: { borderBottomColor: '#D3D3D3', borderBottomWidth: 1.5 }


}} name='Rate' component={ContactUsScreen} />

<Drawer.Screen options={{
  headerShown:false,
  drawerLabel: () => (
    <View style={{flexDirection:'row', alignItems:'center'}}>
      <Image style={{width:18.24, height:21.97, marginLeft:7}} source={require('./assets/share_app.png')}/>
      <Text style={{color:'#7C7C7C', fontSize:17, marginLeft:60}}>Share the App</Text>
      <Image style={{width:7, height:12.6, marginLeft:60}} source={require('./assets/drawer_arrow.png')}/>
    </View>
  ),
  drawerActiveBackgroundColor: '#F9F9F9',
  drawerLabelStyle: { fontSize: 17, color: '#000000' },
  drawerStyle: { backgroundColor: '#F9F9F9', width: 306 },
  drawerItemStyle: { borderBottomColor: '#D3D3D3', borderBottomWidth: 1.5 }


}} name='Share' component={ContactUsScreen} />

<Drawer.Screen options={{
  headerShown:false,
  drawerLabel: () => (
    <View style={{flexDirection:'row', alignItems:'center'}}>
      <Image style={{width:22, height:20.1, marginLeft:7}} source={require('./assets/return_policy.png')}/>
      <Text style={{color:'#7C7C7C', fontSize:17, marginLeft:60}}>Return Policy</Text>
      <Image style={{width:7, height:12.6, marginLeft:62}} source={require('./assets/drawer_arrow.png')}/>
    </View>
  ),
  drawerActiveBackgroundColor: '#F9F9F9',
  drawerLabelStyle: { fontSize: 17, color: '#000000' },
  drawerStyle: { backgroundColor: '#F9F9F9', width: 306 },
  drawerItemStyle: { borderBottomColor: '#D3D3D3', borderBottomWidth: 1.5 }


}} name='ReturnPolicy' component={ReturnPolicyScreen} />

<Drawer.Screen options={{
  headerShown:false,
  drawerLabel: () => (
    <View style={{flexDirection:'row', alignItems:'center'}}>
      <Image style={{width:20, height:20, marginLeft:7}} source={require('./assets/about_us.png')}/>
      <Text style={{color:'#7C7C7C', fontSize:17, marginLeft:60}}>About Us</Text>
      <Image style={{width:7, height:12.6, marginLeft:95}} source={require('./assets/drawer_arrow.png')}/>
    </View>
  ),
  drawerActiveBackgroundColor: '#F9F9F9',
  drawerLabelStyle: { fontSize: 17, color: '#000000' },
  drawerStyle: { backgroundColor: '#F9F9F9', width: 306 },
  drawerItemStyle: { borderBottomColor: '#D3D3D3', borderBottomWidth: 1.5 }


}} name='AboutUs' component={AboutUsScreen} />

<Drawer.Screen options={{
  headerShown:false,
  drawerLabel: () => (
    <View style={{flexDirection:'row', alignItems:'center'}}>
      <Image style={{width:22, height:20, marginLeft:7}} source={require('./assets/unlikedHeart.png')}/>
      <Text style={{color:'#7C7C7C', fontSize:17, marginLeft:60}}>Favourites</Text>
      <Image style={{width:7, height:12.6, marginLeft:80}} source={require('./assets/drawer_arrow.png')}/>
    </View>
  ),
  drawerActiveBackgroundColor: '#F9F9F9',
  drawerLabelStyle: { fontSize: 17, color: '#000000' },
  drawerStyle: { backgroundColor: '#F9F9F9', width: 306 },
  drawerItemStyle: { borderBottomColor: '#D3D3D3', borderBottomWidth: 1.5 }


}} name='Settings' component={FavoriteProducts} />
  
      </Drawer.Navigator>
    )
  }

  export default AbayaHomeDrawerNavigation;