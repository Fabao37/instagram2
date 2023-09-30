import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Navigation from './src/components/Navigation'

  class App extends Component {
    render(){

    
      return(
        <View style={styles.container}>
          
         <Navigation/>
        
      
        </View>

    )
  } 
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
