import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button , ScrollView, FlatList, TouchableOpacity} from 'react-native';
import packListData from '../data/packList';

export default function App() {
    const [packList, setPackList] = useState(packListData)

  const pressHandler = (id)=>{
    console.log(id)
  }

  return (
    <View style={styles.container}>
        <Text style={styles.packageText}>Mes services</Text>
        <Text style={styles.packageText}>Nos packages</Text>
        <FlatList 
        data={packList}
        renderItem={({item})=>{
          return(
            <TouchableOpacity onPress={()=>pressHandler(item.key)} >
                <Text style={styles.packList}>{item.title}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2F7',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
  packageText:{
    fontSize: 24,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  
  packList:{
    padding: 30,
    backgroundColor: "white",
    fontSize: 24,
    margin: 15,
    borderColor: "#FEF311",
    borderRadius: 4,
    borderWidth:0.5,
  },
});
