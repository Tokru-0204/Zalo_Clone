import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../components/login/Home';
import { Setting } from '../components/settings/Setting';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Messages } from '../components/messages/Messages';
import { Contacts } from '../components/contacts/Contacts';
import { Discovery } from '../components/discovery/Discovery';
import { Timeline } from '../components/timeline/Timeline';
import { Me } from '../components/me/Me';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAddressBook, faClock, faCommentDots, faUser } from '@fortawesome/free-regular-svg-icons';
import { faTableCells } from '@fortawesome/free-solid-svg-icons';
import ChatDetails from '../components/chat/ChatDetails';
import Login from '../components/login/Login';
import Register from '../components/login/Register';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName='Messages'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {

                    if (route.name === 'Messages') {
                        return <FontAwesomeIcon icon={faCommentDots} size={22} color={color} />;
                    } else if (route.name === 'Contacts') {
                        return <FontAwesomeIcon icon={faAddressBook} size={22} color={color} />;
                    } else if (route.name === 'Discovery') {
                        return <FontAwesomeIcon icon={faTableCells} size={22} color={color} />;
                    } else if (route.name === 'Timeline') {
                        return <FontAwesomeIcon icon={faClock} size={22} color={color} />;
                    } else if (route.name === 'Me') {
                        return <FontAwesomeIcon icon={faUser} size={22} color={color} />;
                    }
                },

                headerShown: false,
                tabBarStyle: { paddingBottom: 8, height: '8%' }
            })}
        >
            <Tab.Screen name="Messages" component={Messages} options={{ tabBarLabel: 'Tin nhắn', tabBarLabelStyle: { fontSize: 12 }, tabBarBadge: '3' }} />
            <Tab.Screen name="Contacts" component={Contacts} options={{ tabBarLabel: 'Danh bạ', tabBarLabelStyle: { fontSize: 12 } }} />
            <Tab.Screen name="Discovery" component={Discovery} options={{ tabBarLabel: 'Khám phá', tabBarLabelStyle: { fontSize: 12 } }} />
            <Tab.Screen name="Timeline" component={Timeline} options={{ tabBarLabel: 'Nhật ký', tabBarLabelStyle: { fontSize: 12 }, tabBarBadge: 'N' }} />
            <Tab.Screen name="Me" component={Me} options={{ tabBarLabel: 'Cá nhân', tabBarLabelStyle: { fontSize: 12 } }} />
        </Tab.Navigator>
    )
}

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name='Setting' component={Setting} />
                <Stack.Screen name='ChatDetails' component={ChatDetails} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default StackNavigator;
