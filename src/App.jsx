import './styles.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
;
import GetRecipe from './Navbar/GetRecipe';
import UserScreen from './Navbar/UserScreen';
import ShopList from './Navbar/ShopList';
import Supplies from './Navbar/Supplies';
import SaveFood from './Navbar/SaveFood';
import Home from'./welcomepage/Home';
import Sign from './welcomepage/Sign';
import Login from './welcomepage/Login';

function App() {
  return (
    <Router>
      <div>
        <UserScreen />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/getrecipe' element={<GetRecipe />} />
          <Route path='/shop-list' element={<ShopList />} />
          <Route path='/supplies' element={<Supplies />} />
          <Route path='/save-food' element={<SaveFood />} />
          <Route path='/sign' element={<Sign />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
