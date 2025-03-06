import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { useSelector } from "react-redux";

export default function FavoritesScreen() {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector( (state) => state.favoriteMeals.ids);
    console.log('FavoritesScreen', favoriteMealIds);
    const favoriteMeals = MEALS.filter( meal => favoriteMealIds.includes(meal.id));
    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>You have no favorite meals yet!</Text>
            </View>
        );
    }
    return <MealsList data={favoriteMeals}/>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
});

