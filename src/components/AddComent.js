import React,{Component} from "react";
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback as TWF, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from "react-redux";
import { addComent } from "../store/actions/ActionPost";

class AddComent extends Component {
   state =  {
        comment: '',
        editMode: true,
    }

    handleAddComment = () => {
        this.props.onAddComment({
            postId: this.props.postId,
            comment: {
                nickname: this.props.name,
                comment: this.state.comment
            }
        })
        this.setState({comment: '', editMode: false})
    }

    render(){
        let commentArea = null
        if (this.state.editMode) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput placeholder="comentar..." value={this.state.comment}
                        onChangeText={comment => this.setState({comment})} 
                        onSubmitEditing={this.handleAddComment}
                    style={styles.input}/>

                    <TWF onPress={() => this.setState({editMode: false})}>
                        <Icon name="times" size={20} color='#555'/>
                    </TWF>

                </View>
            )
        } else {
            commentArea = (
                <TWF onPress={() => this.setState({editMode: true})}>
                    <View style={styles.container}>
                        <Icon name="comment-o" size={25} color='#555'/>
                        <Text style={styles.caption}>Adicione um comentário...</Text>
                    </View>

                </TWF>
            )
        }

        return(
            <View style={{flex:1}}>
                {commentArea}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
    },
    caption:{
        marginLeft:10,
        fontSize:12,
        color:'#ccc'
    },
    input:{
        width:'90%'
    }
})

const mapStateToProps = ({ user }) => {
    return {
        name: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddComment: payload => dispatch(addComent(payload))
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(AddComent)

//export default AddComent; v