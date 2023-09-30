import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux'; // Removi o import desnecessário de Connect
import { login } from '../store/actions/User';


class Login extends Component {
    state = {
        name: 'temporário',
        email: '',
        senha: '' 
    }

    login = () => {
        this.props.onLogin({ ...this.state });
        this.props.navigation.navigate('Feed');
    }

    createAccount = () => {
        this.props.navigation.navigate('Register')
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='email'
                    autoFocus={true}
                    keyboardType='email-address'
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />

                <TextInput
                    placeholder='senha'
                    secureTextEntry={true}
                    value={this.state.senha}
                    style={styles.input}
                    onChangeText={senha => this.setState({ senha })}
                />
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button}>
                        <Button title='logar' onPress={this.login} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Button title='criar conta' onPress={this.createAccount}/>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLogar: {
        marginTop: 60, 
    },
  
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingHorizontal: 10,
        borderRadius: 8
    },
    containerButton:{
        top:30
    },
    button:{
        bottom:20
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    };
}

export default connect(null, mapDispatchToProps)(Login);


