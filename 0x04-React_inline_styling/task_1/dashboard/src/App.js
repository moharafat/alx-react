import React, { Component } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Login from './Login/Login';
import Notifications from './Notifications/Notifications';
import CourseList from './CourseList/CourseList';
import { getLatestNotification } from './utils';
import PropTypes from 'prop-types';
import BodySection from './BodySection/BodySection';
import BodySectionWithMarginBottom from './BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';

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
    const { isLoggedIn, logOut } = this.props;

    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className={css(styles.App)}>
          <Header />
        </div>
         <div className={css(styles.AppBody)}>
          {!isLoggedIn ? (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          )}
        </div>
        <BodySection title="News from the School">
          <p>Text</p>
        </BodySection>
        <div className={css(styles.AppFooter)}>
          <Footer />
        </div>
      </>
    );
  }
}
const styles = StyleSheet.create({
  App: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    margin: 0,
    padding: 0
  },

  AppBody: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    margin: 0,
    padding: 0,
    height: '60vh'
  },

  AppFooter: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    margin: 0,
    padding: 0,
    height: '6vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '4px solid #e1354b'
  },
});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;