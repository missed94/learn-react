import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './reset.css'
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App
                state={store.getState()}
            />
        </Provider>
    </BrowserRouter>,

    document.getElementById('root')
);



