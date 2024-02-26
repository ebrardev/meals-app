import { View, Text,StyleSheet } from 'react-native';

function Subtitle({children}) {
    return (
        <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
        </View>
    )

}

export default Subtitle;


const styles = StyleSheet.create({

    subtitle: {
        color:'#06c2bf',
        fontWeight:'bold',
        fontSize:18,
        margin:4,
        padding:6,
     

        textAlign:'center'

    },
    subtitleContainer: {
        borderBottomColor:'#06c2bf',
        borderBottomWidth:2,
        padding:6,
        marginHorizontal:12,
        marginVertical:2,

    }
})