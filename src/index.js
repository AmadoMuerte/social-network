
import state, {subscribe} from "./redux/state";

import './index.css';

import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";
import {addPost, updateNewPostText} from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                />
            </BrowserRouter>

        </React.StrictMode>
    );
}

subscribe();

rerenderEntireTree(state);
