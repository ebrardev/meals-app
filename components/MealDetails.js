
import { View, Text, StyleSheet } from 'react-native';
function MealDetails ({duration,complexity,affordability,style,textStyle}) {
return (
    <View style={[styles.details,style]}>
         <Text style={[styles.detail,textStyle]}>{duration}</Text>
            <Text style={[styles.detail,textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detail,textStyle]}>{affordability.toUpperCase()}</Text>
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