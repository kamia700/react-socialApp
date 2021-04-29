import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { renderEntireTree } from './render'
import store from './redux/state'

// renderEntireTree(state);

// оборачиваем render в функцию renderEntireTree для того, чтобы перерисовывать дерево при изменении в state
// export let renderEntireTree = () => {
//   ReactDOM.render(<App state={ state } addPost={ addPost } />, document.getElementById('root'));
// }

 // оборачиваем render в функцию renderEntireTree для того, чтобы перерисовывать дерево при изменении в state
let rerenderEntireTree = (state) => {
  ReactDOM.render(<App state={ state } 
    // добавляем bind чтобы связать метод addPost с объектом store, 
    // чтобы контекст вызова(this) в myPosts не изменился на props.
    // Это нужно если мы не вызываем объект, а передаем его в глубину
    // В результате this будет всегда равно store и не переопределиться
                      dispatch={ store.dispatch.bind(store) } 
                      // updateNewPostText={ store.updateNewPostText.bind(store) } 
                      />, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
