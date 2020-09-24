
import App from './App';
import * as serviceWorker from './serviceWorker';
import {rerenderEntireThree} from "./render";
import state from "./redux/state";



rerenderEntireThree(state);
