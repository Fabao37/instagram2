import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class Register extends Component {
    state = {
        name:'',
        email:'',
        senha:''
    }

 render(){
    return (
        <View style={styles.container}>
            
            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setName(text)}
              value={this.name}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setEmail(text)}
              value={this.email}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="#aaaaaa"
              secureTextEntry
              placeholder="Senha"
              onChangeText={(text) => setSenha(text)}
              value={this.senha }
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
            <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Confirmar senha"
          onChangeText={(text) => setConfirmSenha(text)}
          value={this.confirmSenha}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
           
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonTitle}>Criar conta</Text>
            </TouchableOpacity>
            <View style={styles.footerView}>
              <Text style={styles.footerText}>
                Já tem uma conta? <Text style={styles.footerLink}>Login</Text>
              </Text>
            </View>
        </View>
      );
 }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop:'50%',
        width:'100%'
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        width:'90%'
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        width:'90%'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    }
})