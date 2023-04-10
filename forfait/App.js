import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button , ScrollView, FlatList} from 'react-native';
import myPackListData from './data/myPackList';
import myHistoryData from './data/myHistory';

export default function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [myPackList, setMyPackList] = useState(myPackListData)
  const [myHistory, setMyHistory] = useState(myHistoryData)
 

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <View style={styles.body}>
        <Text>Body</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
      <TextInput 
        style={styles.input}
        placeholder='email'
        onChange={(val)=>setEmail(val)}></TextInput>
      <Button title="LOGIN"/>
      <TextInput 
        style={styles.input}
        placeholder='password'
        secureTextEntry
        onChange={(val)=>setPassword(val)}></TextInput>
      <Button title="LOGIN"/> */}
      {/* <FlatList 
        data={myHistory}
        renderItem={({item})=>{
          return(
            <View >
                <Text style={styles.myHistory}>{item.title}</Text>
            </View>
          )
        }}
      /> */}
      <FlatList 
        numColumns={2}
        data={myHistory}
        renderItem={({item})=>{
          return(
            <View >
                <Text style={styles.myHistory}>{item.title}</Text>
            </View>
          )
        }}
      />
        {/* {myHistory.map((item)=>{
          return(
            <View key={item.key}>
                <Text style={styles.myHistory}>{item.title}</Text>
            </View>
          )
        })}   */}
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
  header:{

  },
  footer:{
    backgroundColor: 'white',
  },
  body:{
    backgroundColor: '#F1F1F1',
  },
  input:{
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
    borderRadius: 4
  },
  myPackList:{
    padding: 30,
    backgroundColor: "white",
    fontSize: 24,
    margin: 15,
    borderColor: "#FEF311",
    borderRadius: 4,
    borderWidth:0.5,
  },
  myHistory:{
    padding: 30,
    backgroundColor: "white",
    fontSize: 24,
    margin: 15,
    borderColor: "#FEF311",
    borderRadius: 4,
    borderWidth:0.5,
  },
});
