import { FlatList,Text } from "react-native";
import  {CATEGORIES}  from "../data/dummy-data"
import CategoryGridTitle from "../components/CategoryGridTitle";

function renderCategoryItem(itemData) {
    return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} />
}
function CategoryScreen() {
    return <FlatList data={CATEGORIES} keyExtractor={ (item) =>
     item.id} renderItem={renderCategoryItem} 
     numColumns={2}
     />
}
export default CategoryScreen;