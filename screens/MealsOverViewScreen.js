import { useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

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

    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration, 
            complexity: item.complexity,
            affordability: item.affordability,
        }
        return (<MealItem {...mealItemProps}/>);
    }

    return(
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});


