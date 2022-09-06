import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let postsData = [
    {description: 'hello', likesCount: 25, id: 0},
    {description: 'надеюсь сюда кто нибудь заходит...', likesCount: 99, id: 1},
    {description: 'О, это же моя стена,', likesCount: 38, id: 2},
]

let dialogsData = [
    {id: 1, name: 'Boris Smirnov'},
    {id: 2, name: 'Boris s'},
    {id: 3, name: 'Boris Smirnov'},
    {id: 4, name: 'Boris ddd'},
]

let messagesData = [
    {message: 'hello', id: 0},
    {message: 'how are you?', id: 1},
    {message: 'goodbye', id: 2},
]

root.render(
  <React.StrictMode>
    <App
        postsData={postsData}
        dialogsData={dialogsData}
        messagesData={messagesData}
    />
  </React.StrictMode>
);
