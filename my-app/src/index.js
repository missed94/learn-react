import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'normalize.css';
import './reset.css'
import './index.scss';
import SamuraiJSApp from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


ReactDOM.render(
    <SamuraiJSApp/>,
    document.getElementById('root')
);



