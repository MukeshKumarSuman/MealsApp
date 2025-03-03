import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./drawer/WelcomeScreen";
import UserScreen from "./drawer/UserScreen";
import {Ionicons} from '@expo/vector-icons'

const Drawer = createDrawerNavigator();
export default function AppDrawerNavigation() {
    
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{
                 headerStyle: {backgroundColor: '#3c0a6b'},
                 headerTintColor: 'white',
                 drawerActiveBackgroundColor: '#f0e1ff',
                 drawerActiveTintColor: '#3c0a6b',
            }}>
                <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{
                    drawerLabel: 'Welcome Screen',
                    drawerIcon: ({color, size}) => (<Ionicons name='home' color={color} size={size}/>)
                }}/>
                <Drawer.Screen name="User" component={UserScreen} options={{
                    drawerLabel: 'Welcome Screen',
                    drawerIcon: ({color, size}) => (<Ionicons name='person' color={color} size={size}/>)
                }}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
