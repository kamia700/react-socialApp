import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import Grammar from './components/Grammar/Grammar'
import Dictionary from './components/Dictionary/Dictionary'

import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

// import Footer from './components/Footer';

const App = (props) => {
  // debugger;
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar data={ props.state.sideBar } />
        <div className='app-content'>
          {/* <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/grammar' component={Grammar} />
          <Route path='/dictionary' component={Dictionary} /> */}

          {/* <Route path='/profile' render={ () => <Profile  posts={ props.state.profilePage.posts }/>} />
          <Route path='/dialogs' render={ () => <Dialogs dialogsData={ props.state.dialogsPage.dialogsData } 
                                                          messageData={ props.state.dialogsPage.messageData } />} /> 
                                                          
          или так: */}
          <Route path='/profile' render={ () => <Profile data={ props.state.profilePage } 
                                                        dispatch={ props.dispatch} 
                                                        // updateNewPostText={ props.updateNewPostText }
                                                        />} />
          <Route path='/dialogs' render={ () => <Dialogs data={ props.state.dialogsPage } />} />

          <Route path='/grammar' render={ () => <Grammar />} />
          <Route path='/dictionary' render={ () => <Dictionary />} />
        </div>
      </div>
    </BrowserRouter>
    );
}

export default App;