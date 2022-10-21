import React,{ useEffect } from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Checkout from "./Components/Checkout/Checkout"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Components/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './Components/StateProvider/StateProvider';
import Payment from './Components/Payment/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const promise = loadStripe('pk_test_51Jv1JHCEUfibInv72CmK3AZEbxHb1NJ3uOjM0Dp6kKesOg18cmvpMiuQPKIM37xty1fCynSjArIIKj0cATEJvC4Q00fNHMjKsI');


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
          <Route path='/payment' element=
          {<><Header/>
             <Elements stripe={promise} >
                <Payment /> 
             </Elements>
            </> } />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
