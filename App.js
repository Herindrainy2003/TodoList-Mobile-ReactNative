import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Form from './Components/Form';

export default function App() {

  

  return (
    <View style={styles.container}>
     <View>
        <Form />
     </View>
      {/**affichage des taches*/}
      
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
