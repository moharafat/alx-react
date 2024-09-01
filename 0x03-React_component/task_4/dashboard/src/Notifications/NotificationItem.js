import React, { Component } from "react";
import PropTypes from "prop-types";

class NotificationItem extends Component {
  render () {
  const { type, value, html, markAsRead, id } = this.props;
  
  let listItem;
  if(value) {
    listItem = <li data-priority={type} onClick={() => markAsRead(id)}>{value}</li>;
  } else {
    listItem = (
      <li data-priority={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>
    );
  }
  return listItem;
  }
}


NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
  markAsRead: () => {},
  id: 0,
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
