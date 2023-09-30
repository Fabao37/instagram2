import { ADD_POST, ADD_COMMENT } from '../actions/ActionsTypes';


const initialState = {
    
  posts: [
    {
      id: Math.random(),
      nickname: 'fabio portela',
      email: 'portela.fabio@hotmail.com',
      image: require('../../../assets/images/post2.jpg'),
      comments: [
        {
          nickname: 'Jonh Sheldon',
          comment: 'obrigado',
        },
        {
          nickname: 'Ana Júlia',
          comment: 'Pintura linda!',
        },
      ],
    },
    {
      id: Math.random(),
      nickname: 'josefa',
      email: 'josefa@bol.com.br',
      image: require('../../../assets/images/post11.jpg'),
      comments: [],
    }, {
      id: Math.random(),
      nickname: 'josefa',
      email: 'josefa@bol.com.br',
      image: require('../../../assets/images/post17.jpg'),
      comments: [],
    },
  ],

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {  
        ...state,
        posts: state.posts.concat({
          ...action.payload,
        }),
      };
    
      case ADD_COMMENT:
        return {
          ...state,
          posts: state.posts.map((post) => {
            if (post.id === action.payload.postId) {
              return {
                ...post,
                comments: post.comments
                  ? [...post.comments, action.payload.comment]
                  : [action.payload.comment],
              };
            }
            return post;
          })
          
        }

      default:
      return state;
          
   
  }
}
export default reducer;