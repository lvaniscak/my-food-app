import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './welcomepage/Home';
import Welcome from './welcomepage/Welcome';
import Login from './welcomepage/Login';
import Sign from './welcomepage/Sign';
import UserScreen from './Navbar/UserScreen';
import GetRecipe from'./Navbar/GetRecipe';
import ShopList from './Navbar/ShopList';
import Suplice from'./Navbar/Supplies';
import SaveFood from'./Navbar/SaveFood';


const ChangeNav=()=>{
    const WelcomeMenu=()=>{
        return(
            <Router>
                <Welcome />
                <Route>
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/login'element= {<Login />} />
                        <Route path='/sign' element={<Sign />} />
                    </Routes>
                </Route>
            </Router>
        )

    }

    const UserMenu =()=>{
        return(
            <Router>
                <UserScreen />
                <Route>
                    <Routes>
                        <Route path='./get-recipe' element={<GetRecipe/>} />
                        <Route path='./shop-list' element={<ShopList />} />
                        <Route path='./supplies' element={<Suplice />} />
                        <Route path='./save-food' element={<SaveFood />} />
                    </Routes>
                </Route>
            </Router>
        )
    }

    return(
      isLoggedIn ? UserMenu : WelcomeMenu
    );
}

export default ChangeNav;