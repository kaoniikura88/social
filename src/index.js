import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
  {id: 1, name: 'zeliboba' },
  {id: 2, name: 'zhenuaria' },
  {id: 3, name: 'hyo ya' }
  ]

  let messagesData = [
      {id: 1, message: 'hey' },
      {id: 2, message: 'sup' },
      {id: 3, message: 'what is new' }
      ]

let postsData = [
        {id: 1, message: 'hi, how are you', likesCount: 10 },
        {id: 2, message: 'sit is my first post', likesCount: 12 },
        ] 

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData = {dialogsData} messagesData = {messagesData} postsData={postsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
