import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import closeIcon from '../close-icon.png';
import PropTypes from "prop-types";

import NotificationItemShape from "./NotificationItemShape";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.Notifications)}>
            <button
              style={{
                background: "transparent",
                border: "none",
                position: "absolute",
                right: 20,
              }}
              aria-label="close"
            >
              <img src={closeIcon} alt="close-icon" className={css(styles.notificationsbutton)} />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.notificationsul)}>
              {listNotifications.length === 0 && (
                <NotificationItem value="No new notification for now" />
              )}

              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={this.markAsRead}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
	menuItem: {
		fontFamily: 'Arial, Helvetica, sans-serif',
		textAlign: 'right',
		fontWeight: 'bold',
		padding: '5px',
		paddingRight: '20px'
	},

	notifications: {
		fontFamily: 'Arial, Helvetica, sans-serif',
		border: '2px dashed #e1354b',
		paddingRight: '20px 5px',
		margin: '5px',
		position: 'fixed',
		right: '1%',
		left: '65%'
	},

  notificationsbutton:{
  cursor: 'pointer',
  width: '20px',
  border: '2px dashed #e1354b',
  background: 'none',
  }, 
  
  notificationsul:{
		paddingTop: '15px',
		paddingLeft: '40px'
  }
});

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
