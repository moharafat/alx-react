import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Login from './Login/Login';
import Notifications from './Notifications';
import './App.css';


function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
      </div>
      <div className="App-body">
        <Login />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
