import React from 'react'
import { Provider } from 'react-redux'
import { registerRootComponent } from 'expo';
import storeConfig from './src/store/storeConfig';
import App from './App';

import axios from 'axios';
axios.defaults.baseURL = 'https://teste-4353f-default-rtdb.firebaseio.com/'

const store = storeConfig()

const Redux = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

registerRootComponent(Redux);

