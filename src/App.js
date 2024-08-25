import './App.css';
import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClothingPage from './pages/ClothingPage';
import OfficePage from './pages/OfficePage';
import CheckoutPage from './pages/CheckoutPage';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Notification from './components/Notification';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TestPage from './pages/TestPage';

function App() {
  const [notifications, setNotifications] = useState([]);

  const showNotification = (message) => {
    const id = Date.now();
    setNotifications((prevNotifications) => [...prevNotifications, { id, message }]);

    setTimeout(() => {
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notification) => notification.id !== id),
      );
    }, 3000);
  };

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage showNotification={showNotification} />} />
            <Route
              path="/clothing"
              element={<ClothingPage showNotification={showNotification} />}
            />
            <Route path="/office" element={<OfficePage showNotification={showNotification} />} />
            <Route path="/cart" element={<Cart showNotification={showNotification} />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/test" element={<TestPage setNotifications={showNotification} />} />
          </Routes>
          <div className="notifications-container">
            {notifications.map((notification) => (
              <Notification key={notification.id} message={notification.message} />
            ))}
          </div>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
