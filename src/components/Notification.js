import React from 'react';
import './Notification.css'; // Подключаем стили

function Notification({ message, isVisible }) {
  return <div className={`notification ${isVisible ? 'visible' : ''}`}>{message}</div>;
}

export default Notification;
