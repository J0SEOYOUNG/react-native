import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import ListScreen from './screens/ListScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import EditScreen from './screens/EditScreen';
import ViewScreen from './screens/ViewScreen';

const AddButton = () => null;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainScreen = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: '#424242', tabBarInactiveTintColor: '#9E9E9E', borderTopColor: '#BDBDBD', backgroundColor: '#FFFFFF' }}>
            <Tab.Screen 
                name="List" 
                component={ListScreen} 
                options={{ tabBarIcon: ({color,size}) => <Icon name="list" size={size} color={color} /> }}
            />
            <Tab.Screen 
                name="AddButton" 
                component={AddButton}
                options={{ tabBarIcon: () => <Icon name="add-circle" size={36} color="#DA5746" /> }}
                listeners={({navigation}) => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.navigate('Edit');
                    },
                })}
            /> 
            <Tab.Screen 
                name="Bookmark" 
                component={BookmarkScreen}
                options={{ tabBarIcon: ({color, size}) => <Icon name="heart" size={size} color={color} /> }}
            />
    </Tab.Navigator>
    )
}

const Navigator = () => {
    return (
        <NavigationContainer mode="modal">
            <Stack.Navigator screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators. forVerticalIOS }}>
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Edit" component={EditScreen} />
                <Stack.Screen name="View" component={ViewScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator
