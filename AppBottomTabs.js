import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./drawer/WelcomeScreen";
import UserScreen from "./drawer/UserScreen";
import {Ionicons} from '@expo/vector-icons'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
export default function AppBottomTabs() {
    
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                 headerStyle: {backgroundColor: '#3c0a6b'},
                 headerTintColor: 'white',
                 tabBarBadgeStyle: {
                    color: 'black',
                    backgroundColor: 'yellow',
                  },
            }}>
                <Tab.Screen name="Welcome" component={WelcomeScreen} options={{
                    title: 'Welcome Screen',
                    tabBarIcon: ({color, size}) => (<Ionicons name='home' color={color} size={size}/>),
                    tabBarBadge: 2
                }}/>
                <Tab.Screen name="User" component={UserScreen} options={{
                    title: 'User Screen',
                    tabBarIcon: ({color, size}) => (<Ionicons name='person' color={color} size={size}/>),
                    tabBarBadge: 'My',
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
