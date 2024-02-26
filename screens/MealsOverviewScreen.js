import { View,Text,StyleSheet,FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import {MEALS} from '../data/dummy-data'
import MealItem from "../components/MealItem";

function MealsOverviewScreen({route}) {
 const catId=  route.params.categoryId

 const displayedMeals = MEALS.filter((mealItem)=> {
    return mealItem.categoryIds.indexOf(catId) >= 0
 })

 function renderMealItem(itemData) {
    const item = itemData.item
    const mealItemProps ={
        title:itemData.item.title,
        imageUrl:itemData.item.imageUrl,
        duration:itemData.item.duration,
        complexity:itemData.item.complexity,
        affordability:itemData.item.affordability
    }
    return (
        <MealItem {...mealItemProps} />
    )

 }
 return  (
 <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} renderItem={renderMealItem } />
 </View>
 )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({  

    container:{
        flex:1,
        padding:16,
    }
})