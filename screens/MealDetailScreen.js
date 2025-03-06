import { useRoute } from "@react-navigation/native";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorite";
// import { FavoritesContext } from "../store/context/favorite-context";

export default function MealDetailScreen({navigation}) {
    const route = useRoute();
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector( (state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find( meal => meal.id === mealId);
    // const mealIsfavorite = favoriteMealsCtx.ids.includes(mealId);
    const mealIsfavorite = favoriteMealIds.includes(mealId);
    function onPressButtonHandler() {
        if (mealIsfavorite) {
            // favoriteMealsCtx.removeFavorite(mealId);
            dispatch(removeFavorite({id: mealId}));
        } else {
            // favoriteMealsCtx.addFavorite(mealId);
            dispatch(addFavorite({id: mealId}));
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsfavorite ? 'star' : 'star-outline'}
                color='white' onPress={onPressButtonHandler}/>
        },
        });
    }, [navigation, onPressButtonHandler]);
    return (
        <ScrollView style={styles.rootConatiner}>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails textStyle={styles.detailText} duration={selectedMeal.duration} complexity={selectedMeal.complexity}
             affordability={selectedMeal.affordability}/>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List listItems={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List listItems={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootConatiner: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        margin: 8,
        color: 'white',
    },
    detailText: {
        color: 'white',
        fontSize: 14,
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
});