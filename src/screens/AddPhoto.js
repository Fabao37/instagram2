import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, TextInput, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Importe a função corretamente
import { connect } from 'react-redux';
import { addPost } from '../store/actions/ActionPost';

class AddFoto extends Component {
  state = {
    image: null,
    comment: '',
  };

  handleImagePicker = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });
  
      if (!result.canceled) {
        this.setState({ image: result.assets[0].uri }, () => {
          Alert.alert('Imagem selecionada', this.state.comment);
        });
      }
      
    } catch (error) {
      console.error('Erro ao escolher uma imagem:', error);
    }
  };
  
  save = async () => {
    this.props.onAddPost({
      id: Math.random(),
      nickname: this.props.name,
      email: this.props.email,
      image: this.state.image,
      comment: [
        {
          nickname: this.props.name,
          comment: this.state.comment,
        },
      ],
    });

    this.setState({ image: null, comment: '' });
    this.props.navigation.navigate('Feed');
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Compartilhe sua imagem</Text>
          <View style={styles.imageContainer}>
            {this.state.image && <Image source={{ uri: this.state.image }} style={styles.image} />}
          </View>
          <View style={styles.corpo}>
            <TouchableOpacity onPress={this.handleImagePicker} style={styles.button}>
              <Text style={styles.textButton}>Escolha a foto</Text>
            </TouchableOpacity>
            <TextInput
              placeholder="Comentar na foto?"
              style={styles.input}
              value={this.state.comment}
              onChangeText={(comment) => this.setState({ comment })}
            />
            <TouchableOpacity onPress={this.save} style={styles.saveButton}>
              <Text style={styles.textButton}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  corpo: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 30 : 50,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '90%',
    height: Dimensions.get('window').width * 3 / 4,
    backgroundColor: 'gray',
    marginTop: 10,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 3 / 4,
    resizeMode: 'center',
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
  },
  textButton: {
    fontSize: 20,
    color: '#fff',
  },
  input: {
    marginTop: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 25,
    width: '80%',
  },
  saveButton: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
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
    onAddPost: (post) => dispatch(addPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFoto);

 


    
