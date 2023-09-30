
import { configureStore, combineReducers, compose, applyMiddleware } from '@reduxjs/toolkit';
import userReducer from './reduces/User'; 
import postsReducer from './reduces/ReducerPost'
import thunk from 'redux-thunk';

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
})

const storeConfig = () => {
    return configureStore({
        reducer: reducers,
        middleware: [thunk]
    });
}

export default storeConfig;
