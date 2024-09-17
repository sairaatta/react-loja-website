import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Accessories from './pages/Accessories';
import Products from './pages/Products';
import Appliances from './pages/Appliances';
import Clothes from './pages/Clothes';
import LoginPage from './pages/Login';
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/clothes' element={<Clothes />} />
            <Route path='/accessories' element={<Accessories />} />
            <Route path='/appliances' element={<Appliances />} />
            <Route path='/products' element={<Products />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/login' element={<LoginPage/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
