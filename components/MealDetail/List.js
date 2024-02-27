// ? This component is used to display the list of ingredients and steps in the meal detail screen.
import { Text,View ,StyleSheet} from "react-native";

function List ({data}) {
    return  data.map((dataPoint) =>(
        <View style={styles.listItem} key={dataPoint}>
        <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
    ))
}

// * Styling the component
export default List;

const styles = StyleSheet.create({

    listItem :{
        borderRadius:8,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:12,
        backgroundColor:'#06c2bf',

    },
    itemText :{
        color:"black",
        textAlign:'center',
    }
})
//! End of List.js