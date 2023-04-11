
import { StyleSheet, Text, View } from 'react-native';

export default Footer = ()=>{
    return(
        <View style={styles.footer}>
            <Text style={styles.title}>Footer</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    footer:{
      backgroundColor: 'white',
      height: 80,
    },
    title:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
  });