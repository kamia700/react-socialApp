import { combineReducers, createStore } from "redux";

import profileReducer from './profile-reducer.js';
import dealogsReducer from './dialogs-reducer.js';
import sidebarReducer from './sidebar-reducer.js';
import usersReducer from  './users-reducer.js';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dealogsReducer,
  sideBar: sidebarReducer,
  usersPage: usersReducer
});

let store = createStore(reducers);

export default store;
