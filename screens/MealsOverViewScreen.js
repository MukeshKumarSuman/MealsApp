import { useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";

export default function MealsOverViewScreen({route, navigation}) {
    // const route = useRoute();
    const catId = route.params.categoriId;
    const displayedMeals = MEALS.filter(mealItem => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });
    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.title
        });
    }, [catId, navigation]);

    return <MealsList data={displayedMeals}/>
}


