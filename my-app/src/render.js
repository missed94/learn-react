import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './reset.css'
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

//addPost('goodbye my friend');

export let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}




