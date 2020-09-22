import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';


let myPosts = [
    {id:1, message:"Hi, how are you!", likes: "30"},
    {id:2, message:"it's my first post", likes: "20"}
]

let dialogs = [
    {id: 1, name: "Andrey"},
    {id: 2, name: "Oleg"},
    {id: 3, name: "Oxana"},
    {id: 4, name: "Lisa"},
];

let messages = [
    {id: 1, message: "Hello"},
    {id: 2, message: "How are you"},
    {id: 3, message: "What is your health"},
]

ReactDOM.render(
  <React.StrictMode>
    <App myPosts={myPosts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
