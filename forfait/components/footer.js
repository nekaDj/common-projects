
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from '@rneui/themed';

export default Footer = ()=>{
    return(
        <View style={styles.footer}>
            
            <Icon
                name='home'
                size={30}
                color='#517fa4'
            />
            <Icon
                name='user'
                size={30}
                type='font-awesome'
                color='#517fa4'
            />
            <Icon
                name='handshake-o'
                size={30}
                type='font-awesome'
                color='#517fa4'
            />
        </View>
    )
}


const styles = StyleSheet.create({
    footer:{
      backgroundColor: 'white',
      height: 80,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 30,

    },
    title:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
  });