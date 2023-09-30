import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Mensages extends Component {
render(){
    return (
        <View style={styles.container}>
             <Text>
                 tela de mensagens 02
             </Text>
         </View>
       );
     }
     
}
export default Mensages;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})