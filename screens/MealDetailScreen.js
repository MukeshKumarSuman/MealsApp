import { useRoute } from "@react-navigation/native";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

export default function MealDetailScreen({navigation}) {
    const route = useRoute();
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find( meal => meal.id === mealId);
    function onPressButtonHandler() {
        console.log('onPressButtonHandler');
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon='star' color='white' onPress={onPressButtonHandler}/>
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