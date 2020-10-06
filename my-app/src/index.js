import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './reset.css'
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "./StoreContext";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    state={state}
                  /*  dispatch={store.dispatch.bind(store)}
                    store={store}*/

                />
            </Provider>
        </BrowserRouter>
,
document.getElementById('root')
);
}

rerenderEntireTree(store.getState());


store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
});
