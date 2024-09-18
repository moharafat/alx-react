import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = React.memo(function NotificationItem({
  type,
  value,
  html,
  markAsRead,
  id,
}) {
  let listItem;

  if (value) {
    listItem = (
      <li data-notification-type={type} className={css(styles.DataType)} onClick={() => markAsRead(id)}>
        {value}
      </li>
    );
  } else {
    listItem = (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        className={css(styles.DataType)} onClick={() => markAsRead(id)}
      ></li>
    );
  }

  return listItem;
});



const styles = StyleSheet.create({
	red: {
		color: 'red'
	},

	blue: {
		color: 'blue'
	}
});


NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
  markAsRead: () => {},
  id: NaN,
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

export default NotificationItem;