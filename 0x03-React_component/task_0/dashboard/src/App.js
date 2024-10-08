import React, { Component } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Login from './Login/Login';
import Notifications from './Notifications/Notifications';
import './App.css';
import CourseList from './CourseList/CourseList';
import { getLatestNotification } from './utils';
import PropTypes from 'prop-types';


const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown(event) {
    if (event.ctrlkey && event.key === 'h') {
      alert("Logging you out");
      this.props.logOut();
      // this.props.toggleDrawer();
    }
  }


  render() {
    const { isLoggedIn } = this.props;

    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <Header />
        </div>
        <div className="App-body">
          {!isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} />}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: true,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;