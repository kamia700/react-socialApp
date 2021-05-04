import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import Grammar from './components/Grammar/Grammar'
import Dictionary from './components/Dictionary/Dictionary'

import { Route } from 'react-router';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar data={ props.state.sideBar } />
        <div className='app-content'>
          <Route path='/profile' render={ () => <Profile data={ props.state.profilePage } 
                                                        dispatch={ props.dispatch} 
                                                        />} />
          <Route path='/dialogs' render={ () => <Dialogs store={ props.store } />} />

          <Route path='/grammar' render={ () => <Grammar />} />
          <Route path='/dictionary' render={ () => <Dictionary />} />
        </div>
      </div>
    );
}

export default App;