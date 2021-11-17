/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect, useState } from 'react';
 import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
 import { NavigationContainer, useNavigation, DrawerActions, createNavigationContainerRef, useNavigationState } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
 import SignInScreen from './screens/SignInScreen/SignInScreen';
 import CartScreen from './screens/CartScreen/CartScreen';
 import AbayaHomeDrawerNavigation from './AbayaHomeDrawerNavigation';
 import CategoriesScreen from './screens/CategoriesScreen/CategoriesScreen';
 import ReturnPolicyScreen from './screens/ReturnPolicyScreen/ReturnPolicyScreen';
 import NoProductsScreen from './screens/NoProductsScreen/NoProductsScreen';
 import ShoesScreen from './screens/ShoesScreen/ShoesScreen';
 import BagsScreen from './screens/BagsScreen/BagsScreen';
 import Address from './screens/Address/index';
 import Payment from './screens/Payment/index';
 import Review from './screens/Review/index';
 import OrderCompleted from './screens/OrderCompleted/index';
 import SearchScreen from './screens/SearchScreen/SearchScreen';
 import AboutUsScreen from './screens/AboutUsScreen/AboutUsScreen';
 import ProductDetailsScreen from './screens/ProductDetailsScreen/ProductDetailsScreen';
 import CategoryProductsScreen from './screens/CategoryProductsScreen/CategoryProductsScreen'
 import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
 import StripePaymentScreen from './screens/StripePaymentScreen/StripePaymentScreen';
 import CashAppPayment from './screens/CashAppPayment/CashAppPayment';
 import VenmoScreen from './screens/VenmoScreen/VenmoScreen';
//  import SplashScreen from './screens/SplashScreen/SplashScreen';
 
 const Stack = createStackNavigator();
 const HomeStack = createStackNavigator();
 const CategoryStack = createStackNavigator();
 const Drawer = createDrawerNavigator();
 const Tab = createBottomTabNavigator();
 
 const Upperdrawer = () => {
   return(
     <Drawer.Navigator>
       <Drawer.Screen name="contactus" component={ContactUsScreen}/>
     </Drawer.Navigator>
   )
 }
 
 
 const HomeComponent = () => {
   const navigation = useNavigation();
   
   return (
     <HomeStack.Navigator>
       <HomeStack.Screen options={{
         headerTitle: () => <Image
           resizeMode="contain"
           style={{ width: 135 }}
           source={require('./screens/HomeScreen/assets/logo.png')} />,
         headerTitleAlign: 'center',
         headerLeftContainerStyle: {
           marginLeft: 15
         },
         headerRightContainerStyle: {
           marginRight: 15
         },
         headerLeft: () => (
           <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
             <Image style={{ width: 21, height: 23, marginLeft: 25 }} source={require('./screens/HomeScreen/assets/dotIcon.png')} />
           </TouchableOpacity>
         ),
         headerRight: () => (
           <TouchableOpacity onPress={() => {navigation.navigate('search')}}>
             <Image style={{ width: 21, height: 23, marginRight: 25 }} source={require('./screens/HomeScreen/assets/Vectorsearch.png')} />
           </TouchableOpacity>),
         headerStyle: {
           height: 90
         },
 
       }}
         name="Home" component={AbayaHomeDrawerNavigation} />
         <HomeStack.Screen name="upperDrawer" component={Upperdrawer}/>
     </HomeStack.Navigator>
   )
 }
 
 const bottomTabNavigations = (navigator) => {
   return (
     <Tab.Navigator
       screenOptions={{
         tabBarStyle: {
           height: 70,
           justifyContent: 'center'
 
         },
       }}>
       <Tab.Screen options={{
         headerShown: false,
         tabBarShowLabel: false,
         tabBarIcon: () => <Image style={{ width: 32, height: 32 }} source={require('./assets/VectorhomeIcon.png')} />,
       }} name="AbayaHome" component={HomeComponent} />
       <Tab.Screen options={{
         headerShown: false,
         tabBarShowLabel: false,
         tabBarIcon: () => {
           return (
             <TouchableOpacity onPress={() => {
               navigator.navigation.reset({
                 index: 0,
                 routes: [{ name: 'auth', screen: 'SignIn' }]
               });
             }}>
               <Image style={{ width: 32, height: 32 }} source={require('./assets/registerationIcon.png')} />
             </TouchableOpacity>
           )
         },
       }} name="MySignUp" component={AuthNavigator} />
       <Tab.Screen options={{
         headerShown: false,
         tabBarShowLabel: false,
         tabBarIcon: () => {
           return(
             <TouchableOpacity onPress={() => {
               navigator.navigation.reset({
                 index: 0,
                 routes: [{ name: 'myCart', screen: 'Cart' }]
               });
             }}>
         <Image style={{ width: 32, height: 32 }} source={require('./assets/cart.png')} /> 
         </TouchableOpacity>
           )
       },
       }} name="mycart" component={CartNavigator} />
     </Tab.Navigator >
   )
 }
 
 const AuthNavigator = (navigator) => {
   const navigation = useNavigation();
   return (
     <Stack.Navigator>
       <Stack.Screen options={{ headerShown: true, 
       headerTitle:'signin',
       headerTitleAlign:'center',
       headerTitleStyle:{color:'#FFFFFF'},
       headerLeft:() => (
         <TouchableOpacity onPress={() => navigation.navigate('root')} style={{left:30}}>
         <Image style={{ width: 30, height: 19 }} source={require('./screens/AboutUsScreen/assets/backArrow.png')} />
         </TouchableOpacity>
       ) }} name="SignIn" component={SignInScreen} />
     </Stack.Navigator>
   )
 }
 
 const CartNavigator = (navigator) => {
   const navigation = useNavigation();
   return (
     <Stack.Navigator>
       <Stack.Screen options={{ headerShown: true, 
       headerTitleAlign:'center',
       headerTitleStyle:{
         color:'#FFFFFF'
       },
       headerLeft:() => (
         <TouchableOpacity onPress={() => navigation.navigate('root')} style={{left:30}}>
         <Image style={{ width: 30, height: 19 }} source={require('./screens/AboutUsScreen/assets/backArrow.png')} />
         </TouchableOpacity>
       ) }} name="Cart" component={CartScreen} />
     </Stack.Navigator>
   )
 }
 
 const CategoriesNavigator = () => {
   const navigation = useNavigation();
   return(
   <CategoryStack.Navigator>
     <CategoryStack.Screen options={{
           headerTitle:() => (
             <Text style={{fontSize:23, color:'#000000'}}>CATEGORIES</Text>
           ),
           headerTitleAlign:'center',
           headerStyle:{
             height:90
           },
           headerRight: () => (
             <TouchableOpacity onPress={() => {navigation.navigate('search')}}>
               <Image style={{ width: 21, height: 23, marginRight: 25 }} source={require('./screens/HomeScreen/assets/Vectorsearch.png')} />
             </TouchableOpacity>),
             headerRightContainerStyle: {
               marginRight: 10
             },
         }} name="mycategory" component={CategoriesScreen}/>
   </CategoryStack.Navigator>
   )
 }
 
 const App = () => {
   
   return (
     <NavigationContainer>
       <Stack.Navigator> 
         <Stack.Screen options={{ headerShown: false }} name="root" component={bottomTabNavigations} />
         <Stack.Screen options={{ headerShown: false }} name="auth" component={AuthNavigator} />
         <Stack.Screen options={{ headerShown: false }} name="myCart" component={CartNavigator} />
         <Stack.Screen name="AboutUs" component={AboutUsScreen}/>
         <Stack.Screen options={{headerShown:false}} name="Categories" component={CategoriesNavigator}/>
         <Stack.Screen name="NoProducts" options={{
           headerTitle: () => <Image
           resizeMode="contain"
           style={{ width: 135 }}
           source={require('./screens/HomeScreen/assets/logo.png')} />,
         headerTitleAlign: 'center',
         headerStyle:{
           height:90
         }
         }} component={NoProductsScreen}/>
         <Stack.Screen options={{
           headerTitle: () => <Image
           resizeMode="contain"
           style={{ width: 135 }}
           source={require('./screens/HomeScreen/assets/logo.png')} />,
         headerTitleAlign: 'center',
         headerStyle:{
           height:90
         }
         }} name="Shoes" component={ShoesScreen}/>
         <Stack.Screen options={{
           headerTitle: () => <Image
           resizeMode="contain"
           style={{ width: 135 }}
           source={require('./screens/HomeScreen/assets/logo.png')} />,
         headerTitleAlign: 'center',
         headerStyle:{
           height:90
         }
         }} name="Bags" component={BagsScreen}/>
         <Stack.Screen options={{
           headerTitle:() => ( <Text style={{fontSize:23, color:'#000000'}}>RETURN <Text style={{fontSize:23, color:'#ba942d'}}>POLICY</Text></Text>
           ),
           headerTitleAlign:'center',
           headerStyle:{
             height:90
           }
         }} name="ReturnPolicy" component={ReturnPolicyScreen}/>
         <Stack.Screen options={{headerTitleStyle:{color:'#FFFFFF'}}} name="address" component={Address}/>
         <Stack.Screen options={{headerTitleStyle:{color:'#FFFFFF'}}} name="payment" component={Payment}/>
         <Stack.Screen options={{headerTitleStyle:{color:'#FFFFFF'}}} name="review" component={Review}/>
         <Stack.Screen options={{headerTitleStyle:{color:'#FFFFFF'}}} name="order" component={OrderCompleted}/>
         <Stack.Screen options={{
           headerShown:false
         }} name="search" component={SearchScreen}/>
         <Stack.Screen options={{headerTitleStyle:{color:'#FFFFFF'}}} name="SignUp" component={SignUpScreen}/>
         <Stack.Screen options={{headerTitleStyle:{color:'#FFFFFF'}}} name="CategoryProducts" component={CategoryProductsScreen}/>
         <Stack.Screen options={{headerShown:false}} name="ProductDetails" component={ProductDetailsScreen}/>
         <Stack.Screen options={{headerShown:false}} name="Profile" component={ProfileScreen}/>
         <Stack.Screen options={{headerTitleStyle:{color:'#FFFFFF'}}} name="StripePayment" component={StripePaymentScreen}/>
         <Stack.Screen options={{headerTitleStyle:{color:'#FFFFFF'}}} name="CashApp" component={CashAppPayment}/>
         <Stack.Screen options={{headerTitleStyle:{color:'#FFFFFF'}}} name="Venmo" component={VenmoScreen}/>
         {/* <Stack.Screen options={{headerShown:false}} name="Splash" component={SplashScreen}/> */}
       </Stack.Navigator>
     </NavigationContainer>
   )
 }
 
 export default App;
 