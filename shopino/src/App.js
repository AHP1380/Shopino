import React,{ useEffect } from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Checkout from "./Components/Checkout/Checkout"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Components/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './Components/StateProvider/StateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>' , authUser);

      if ( authUser){
        //the user just logged in or the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Header/> <Home /> </> } />
          <Route path="/checkout" element={<><Header/> <Checkout /> </>} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
