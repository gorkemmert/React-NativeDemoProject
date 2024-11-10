import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const BottomTabNavigator = ({ orderCount, setOrderCount, notCount, setNotCount }) => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
                let iconName;
                let iconSize = focused ? 33 : 20;

                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Order') {
                    iconName = focused ? 'cart' : 'cart-outline';
                } else if (route.name === 'Profile') {
                    iconName = focused ? 'person' : 'person-outline';
                }

                return <Ionicons name={iconName} size={iconSize} color={color} />;
            },
            tabBarActiveTintColor: '#800080',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
        })}
    >
        <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: '' }} 
        />
        <Tab.Screen 
            name="Order" 
            children={() => <OrderScreen setOrderCount={setOrderCount} />} 
            options={{
                title: '',
                tabBarBadge: orderCount > 0 ? orderCount : null, 
            }}
        />
        <Tab.Screen 
            name="Profile" 
            children={() => <ProfileScreen setNotCount={setNotCount} />} 
            options={{
                title: '',
                tabBarBadge: notCount > 0 ? notCount : null, 
            }}
        />
    </Tab.Navigator>
);

const AppNavigator = () => {
    const [orderCount, setOrderCount] = useState(0);
    const [notCount, setNotCount] = useState(0);
   
    useEffect(() => {
        setOrderCount(0); 
    }, []);
    useEffect(() => {
        setNotCount(0); 
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Main">
                    {() => <BottomTabNavigator orderCount={orderCount} setOrderCount={setOrderCount} notCount={notCount} setNotCount={setNotCount}/>}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
