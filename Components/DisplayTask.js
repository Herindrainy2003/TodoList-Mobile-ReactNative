import { View ,Text ,StyleSheet} from "react-native"

export default  function DisplayTask({task}) {
  return (
      <View style={styles.container}>
        {
            task.map((tasks , index) =>{
                return(
                    <View key={index}> 
                        <Text style={styles.textStyle}>{tasks.nom}</Text>
                    </View>
                )
            })
        }
      </View>
    
  )
}




const styles = StyleSheet.create({
    container : {
        marginTop : 40,
        borderWidth : 2,
        borderColor : 'red',
       padding: 20,
    },

    textStyle : {
        fontSize:22,
        color: "gray"
    }
})
