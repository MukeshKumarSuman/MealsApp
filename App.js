import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import IconButton from './components/IconButton';
// import FavoritesContextProvider from './store/context/favorite-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return(
    <Drawer.Navigator screenOptions={{
      headerStyle: {backgroundColor: '#351401'},
      headerTintColor: 'white',
      sceneStyle: {backgroundColor: '#3f2f25'},
      drawerContentStyle: {backgroundColor: '#3f2f25'},
      drawerActiveBackgroundColor: '#e4baa1',
      drawerActiveTintColor: '#3f2f25',
      drawerInactiveTintColor: 'white',
    }}>
      <Drawer.Screen name='MealsCategories' component={CategoriesScreen} options={{
           title: 'Meals Categories',
           drawerIcon: ({color, size}) => (<IconButton color={color} size={size} icon='list'/>),
          }}/>
      <Drawer.Screen name='FavoritesScreen' component={FavoritesScreen} options={{
           title: 'Favorites Screen',
           drawerIcon: ({color, size}) => (<IconButton color={color} size={size} icon='star'/>),
          }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
      {/* <FavoritesContextProvider> */}
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'},
          }}>
            <Stack.Screen name='DrawerScreen' component={DrawerNavigator} options={{
            title: 'Meals Categories',
            headerShown: false // Remove This screen header only
            }}/>
            <Stack.Screen name='MealsOverView' component={MealsOverViewScreen} 
              // options={({route, navigation})=> {
              //   // return an options object
              //   const catId = route.params.categoriId;
              //   return {
              //     title: catId
              //   }
              // }}
            />
            <Stack.Screen name='MealDetail' component={MealDetailScreen} options={{
              title: 'Meal Detail',
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

