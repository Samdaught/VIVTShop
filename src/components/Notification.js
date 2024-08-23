import React from 'react';
import '../css/Notification.css';

function Notification({ message, isVisible }) {
  return <div className={`notification ${isVisible ? 'visible' : ''}`}>{message}</div>;
}

export default Notification;
