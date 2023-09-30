import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import Autor from './Autor';
import Comments from './Comments';
import AddComment from './AddComent';
import { connect } from 'react-redux';

class Post extends Component {
    render() {

        const { image, email, nickname, comments, name, id } = this.props;
        const addComent = {name} ? <AddComment postId={id}/> : null

        return (
            <View style={styles.container}>
                <Image source={image || require('../../assets/images/post17.jpg')} style={styles.image} />
                <Autor email={email || 'Nenhum email'} nickname={nickname || 'Nenhum nickname'} />
                <Comments comments={comments || []} />
                {addComent}
            </View>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return {
        name: user.name
    }
}

export default connect(mapStateToProps)(Post)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').height * 0.3, 
        paddingVertical: 20,
        marginVertical: 10
    }
});