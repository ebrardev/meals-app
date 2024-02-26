
import { View, Text, StyleSheet } from 'react-native';
function MealDetails ({duration,complexity,affordability}) {
return (
    <View style={styles.details}>
         <Text style={styles.detail}>{duration}</Text>
            <Text style={styles.detail}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detail}>{affordability.toUpperCase()}</Text>
         </View>
)
}

export default MealDetails;
const styles = StyleSheet.create({
    details: {
        flexDirection:'row',
        alignItems:'center',
        padding:8,
        justifyContent:"center"

    },
    detail : {
        marginHorizontal:4,
    },  

})