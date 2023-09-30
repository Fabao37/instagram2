import React, {Component } from 'react';
import { Text, View, StyleSheet, Image, Platform } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import logo from '../../assets/images/userProfile.png'
import { Gravatar } from 'react-native-gravatar'
import { connect } from 'react-redux';



class Header extends Component {

  render(){

    const { name, email } = this.props ;
    const gravatar = email || 'anonymous' ? (
      <Gravatar options={{ email: email, secure: true }} style={styles.avatar} />
    ) : null;

  
  return (
    <View style={styles.container} >
      <View style={styles.rowContainer}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.title}>Evento</Text>
        </View>

        <View style={styles.userContainer}>
          <Text style={styles.user}>{name}</Text>
          {gravatar}
        </View>
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 40, 
    padding: 10,
    borderBottomWidth:1,
    borderColor: 'gray',
    flexDirection:'row',
    justifyContent:'space-between'
    
 
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
   
  },
  image: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginRight: 10, 
  },
  title: {
    color: '#000',
    height: 30,
    fontSize: 20,
  },
  userContainer:{
    flexDirection:'row',
    alignItems:'center'
    

  },
  user:{
    fontSize:10,
    color:'#888',
    right:10
  },
  avatar:{
    width:25,
    height:25,
    borderRadius:12.5

  }

});


const mapStateToProps = ({ user }) => {
  return{
    email: user.email,
    name: user.name


  }
}

export default connect(mapStateToProps)(Header)


