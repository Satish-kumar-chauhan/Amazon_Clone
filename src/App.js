import React from 'react';
import './style.css';
import './CSS/style.scss';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Home';
import Checkout from './Checkout';
import Alert from './Component/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function App() {
  const alertDetails = useSelector((state) => state.alertManager.alertDetails);
  return (
    <Router>
      <div className="home">
        <Header />
        {alertDetails && <Alert alert={alertDetails} />}
        <div className="main_Container">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
