import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Login from './Login/Login';
import Notifications from './Notifications/Notifications';
import './App.css';
import CourseList from './CourseList/CourseList';

import PropTypes from 'prop-types';

function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
      </div>
      <div className="App-body">{!isLoggedIn ? <Login /> : <CourseList />}</div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.protoTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
