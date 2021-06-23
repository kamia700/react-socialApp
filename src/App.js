import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import UsersContainer from './components/Users/UsersContainer'
import NewDialogsContainer from './components/Dialogs/DialogsContainer'
import Grammar from './components/Grammar/Grammar'
import Dictionary from './components/Dictionary/Dictionary'
import { Route } from 'react-router';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-content'>
          <Route path='/profile' render={ () => <Profile />} />
          <Route path='/dialogs' render={ () => <NewDialogsContainer />} />
          <Route path='/users' render={ () => <UsersContainer />} />

          <Route path='/grammar' render={ () => <Grammar />} />
          <Route path='/dictionary' render={ () => <Dictionary />} />
        </div>
      </div>
    );
}

export default App;