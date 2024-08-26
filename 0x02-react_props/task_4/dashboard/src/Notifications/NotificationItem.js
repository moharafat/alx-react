import React from "react";

function NotificationItem({ type, value, html }) {
  let listItem;
  if(value) {
    listItem = <li data-priority={type}>{value}</li>;
  } else {
    listItem = (
      <li data-priority={type} dangerouslySetInnerHTML={html}></li>
    );
  }
  return listItem;
}
export default NotificationItem;
