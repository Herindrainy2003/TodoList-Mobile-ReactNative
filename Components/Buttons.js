import { Text, View , StyleSheet, Pressable} from "react-native"

export default function Bouttons({onPress}){
    return(
        <View>
            <Pressable onPress={onPress}>
                <Text style={styles.btn}> AJOUTER</Text>
            </Pressable>
        </View>
    )
}

const styles  = StyleSheet.create({
    btn : { 
        backgroundColor:'gray',
       fontSize: 26,
       textAlign: 'center'
    }
})