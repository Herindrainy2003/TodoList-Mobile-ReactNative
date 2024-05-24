import { useEffect, useState } from "react";
import { TextInput, Text, View, StyleSheet, Pressable } from "react-native";
import DisplayTask from "./DisplayTask";
import * as SecureStore from "expo-secure-store"


export default function Form() {


  const [task, setTask] = useState([
    {
      id: 1,
      nom: "Apprendre React Native",
    },
    {
      id: 2,
      nom: "Realiser le projet web",
    },
  ]);


  //lors de l'actualisation du page on recupere les donnes depuis le systeme en utilisant SecureStore.getItemAsync
  useEffect(()=>{
    const getData = async () => {
        try {
          const value = await SecureStore.getItemAsync('task');
          if (value) {
            setTask(value)
          }
        } catch (e) {
          console.error(e);
        }
      };
      getData();
    }, []);

  const [name, setName] = useState("");

  //Lors du clique du boutons
  const AddTask = async () => {
    try {
      const data = { id: task.length + 1, nom: name };

      const newData = [...task];
      newData.push(data);

      setTask(newData);
      setName(" ");

      await SecureStore.setItemAsync('task' , task) //pour ajouter task dans le storage du systeme android
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.TextStyle}>Entre Votre Taches</Text>
        <TextInput
          style={styles.inputText}
          value={name}
          onChangeText={(newTask) => setName(newTask)}
        />
      </View>
      <View>
        <Pressable onPress={AddTask}>
          <Text style={styles.btn}> AJOUTER</Text>
        </Pressable>
      </View>
      <DisplayTask task={task} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "white",
  },
  inputText: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 16,
  },
  TextStyle: {
    fontSize: 25,
  },
  btn: {
    backgroundColor: "gray",
    fontSize: 26,
    textAlign: "center",
  },
});
