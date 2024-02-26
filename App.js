import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
    <StatusBar style="dark" />
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'#f4511e'
        },
        headerTintColor:'#fff',
        contentStyle:{
          backgroundColor:'#6b1d18'
        }
      }}
      >
        <Stack.Screen name="MealCategories" 
        component = {CategoryScreen}
        options={{
          title:'Meal Categories', 
     
        }}
         />
        <Stack.Screen name="MealsOverview" component = {MealsOverviewScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
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
