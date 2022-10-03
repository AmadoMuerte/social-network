import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";

import './index.css';
import store from "./redux/redux-store";
import { Provider } from "./StoreContext";


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                        <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state);
});