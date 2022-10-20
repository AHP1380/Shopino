import React from "react";
import "./Header.css";
import logo from  "../../Pictures/shopino-1.png" 
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import {useStateValue} from "../StateProvider/StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{basket, user},dispatch] = useStateValue();

  const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
  }

  return<>
    <div className="Header">
      <Link to="/">
        <img className="MainLogo" src={logo} />
      </Link>
      <div className="SearchBoxContainer">
        <input type="text" className="SearchBox"/>
        <SearchIcon className="SearchIcon" />
      </div>
      <div className="headerNav">
        <Link to={!user && "/login"} className="loginHeader">
          <div onClick={handleAuthentication} className="Options">
            <span className="option_no_1">
              سلام کاربر مهمان 
            </span>
            <span className="option_no_2">
            {user ? 'خروج' : 'ورود'}
            </span>
          </div>
        </Link>
        <div className="Options">
          <span className="option_no_1">
          مرجوعات و
          </span>
          <span className="option_no_2">
          سفارشات
          </span>
        </div>
        <Link to="/checkout">
          <div className="Options">
            <ShoppingBasketIcon className="BasketIcon"/>
            <span className="Count">
              {basket?.length}
            </span>
          </div>
        </Link>
        
      </div>
    </div>
    
  </> 
}

export default Header;
