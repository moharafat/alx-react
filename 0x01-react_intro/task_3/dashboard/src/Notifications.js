import React from 'react';
import './Notifications.css';
import Icon from "./close-icon.png"
import { getLatestNotification } from './utils';

function Notifications() {
  return (
    <>
      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <button
          style={{
            backgroundColor: '#fff',
            marginTop: '-70px',
            border: 'none',
            float: 'right',
            right: '20px',
            opacity: '0.5',
          }} aria-label="Close">
            <img src={Icon} alt='close' />
        </button>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li data-priority="urgent"
            dangerouslySetInnerHTML={{
              __html: getLatestNotification(),
            }}
          ></li>
        </ul>
      </div>
    </>
  );
};

export default Notifications;