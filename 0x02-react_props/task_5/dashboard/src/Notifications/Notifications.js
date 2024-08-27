import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import {getLatestNotification} from '../utils';
import closeIcon from '../close-icon.png';
import PropTypes from "prop-types";

const Notifications = ({ displayDrawer }) => {
  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
            <button style={{
              float: 'right',
              marginTop: '-70px',
              backgroundColor: '#fff',
              border: 'none',
            }}
            aria-label='Close'>
              <img src={closeIcon} alt='close' />
          </button>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
          </ul>
        </div>
      )}
    </>
  );
};

Notifications.defaultProps = {
  displayDrawer: false,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};
export default Notifications;
