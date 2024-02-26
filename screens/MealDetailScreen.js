import { View ,Text,StyleSheet,Image,ScrollView} from "react-native";

import {MEALS} from '../data/dummy-data'
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

function MealDetailScreen({route}) {
    const mealId = route.params.mealId
  const selectedMeal =  MEALS.find((meal)=> meal.id === mealId)
    return (
        <ScrollView>
        <Image source={{uri: selectedMeal.imageUrl}}  style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
       <MealDetails 
        duration={selectedMeal.duration} 
        complexity={selectedMeal.complexity}
         affordability={selectedMeal.affordability}
         textStyle={styles.detailText}
         />
         <View  style={styles.outListContainer}>
         <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients} />
        
          <Subtitle > Steps</Subtitle>
           <List data={selectedMeal.steps} />
       
           </View>
         </View>
        
        </ScrollView>
    )
}

export default MealDetailScreen;
 
const styles = StyleSheet.create({
    image: {
        width:'100%',
        height:350,
    },
    title: {
        fontWeight:'bold',
        fontSize:24,
        textAlign:'center',
        margin:8,
        color:'white'
    },
    detailText : {
        color :"#06c2bf"
    },
    outListContainer :{
        alignItems:'center',
    },
    listContainer: {
        width:'80%',
    }
 
})