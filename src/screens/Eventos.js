import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Eventos() {
 return (
   <View>
        <Text style={styles.container}>
            tela de mensagens
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})