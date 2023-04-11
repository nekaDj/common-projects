import { StyleSheet, Text, View } from 'react-native';

export default Header = ()=>{
    return(
        <View style={styles.headerHome}>
            <Text>Header</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    headerHome:{
        height: 120,
        backgroundColor: "red"
    },
  });