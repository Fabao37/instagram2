import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Gravatar } from 'react-native-gravatar';
import { connect } from 'react-redux';
import { logout } from '../store/actions/User';

class Profile extends Component {
  logout = () => {
    this.props.onLogout();
    this.props.navigation.navigate('Login');
  };

  render() {
    const options = { email: this.props.email, secure: true };
    return (
      <View style={styles.container}>
        <Gravatar options={options} style={styles.avatar} />
        <Text style={styles.nickname}>{this.props.name}</Text>
        <Text style={styles.email}>{this.props.email}</Text>

        <TouchableOpacity onPress={this.logout} style={styles.button}>
          <Text style={styles.buttonText}>sair</Text>
        </TouchableOpacity>

   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 100,
  },
  nickname: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  email: {
    marginTop: 20,
    fontSize: 25,
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});

const mapStateToProps = ({ user }) => {
  return {
    name: user.name,
    email: user.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile); // Correção na exportação
