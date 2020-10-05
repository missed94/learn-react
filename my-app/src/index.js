import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './reset.css'
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());


store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
});
