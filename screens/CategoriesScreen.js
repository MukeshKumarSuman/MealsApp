import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";


export default function CategoriesScreen({navigation}) {

    function renderCategoryItem(itemData) {
        function pressHnadler(title) {
            navigation.navigate('MealsOverView', {
                categoriId: itemData.item.id,
                title: title,
            });
        }
    
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHnadler}/>;
    }

    return (
        <FlatList data={CATEGORIES} keyExtractor={item => item.id} renderItem={renderCategoryItem} numColumns={2}/>
    );
}
