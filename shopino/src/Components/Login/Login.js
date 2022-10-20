import React, { useState } from 'react'
import "./Login.css"
import Logo from "../../Pictures/shopino-1.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

function Login() {

    const history = useNavigate ()

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const signIn = e => {
    e.preventDefault();

    //some fancy firebase login
    auth.signInWithEmailAndPassword(email, password)
    .then(auth => {
        history("/");
    })
    .catch(error => alert(error.message))
}

const register = e => {
    e.preventDefault();

    // Do some fancy firebase register
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {

        //it successfully created a new user with email and password
        console.log(auth);
        if(auth) {
            history('/');
        }
    })
    .catch(error => alert(error.message))
}


  return (
    <div className='Login'>
        <Link to="/">
            <img src ={Logo} className="logoLogin"/>
        </Link>
        <div className="login_container">
                <h1>ثبت نام</h1>
                <form>
                   
                    <h5>
                        ایمیل
                    </h5>
                    <input type="text" value={email} 
                           onChange={e => setEmail(e.target.value)} 
                           className="inp-style"
                    />

                    <h5>
                        گذرواژه
                    </h5>
                    <input type="password" value={password} 
                           onChange={e => setPassword(e.target.value)} 
                           className="inp-style" 
                    />

                    <button type="submit"
                    className="login-signin-button"
                    onClick={signIn}>
                        ثبت نام
                    </button>
                </form>

                <p className="condition">
                    با ادامه دادن این مرحله شما تایید می کنید که با شرایط شاپینو موافق هستید.
                </p>

                
            </div>
                <div className="login_bottom_container">
                    <h2 className="h2-style">
                        <span className="sapn-h2-style">
                            حساب ندارید؟
                        </span>
                    </h2>
                
                    <button 
                    className="login_register_button"
                    onClick={register}>
                        حساب خود را در شاپینو ایجاد کنید.
                    </button>
                </div>
                <div className="footer-pos" >
                    {/* <Footer /> */}
                    <div className="links-row">
                        <Link>
                                <p className="link-style">
                                    شرایط استفاده
                                </p>
                        </Link>
                        <Link>
                                <p className="link-style">
                                    نکات امنیتی
                                </p>
                        </Link>
                        <Link>
                                <p className="link-style help-pos">
                                    کمک
                                </p>
                        </Link>
                    </div>
                   
                   <p className="link-style-2">
                        © ۱۳۹۹-۱۴۰۱ شاپینو
                   </p>

                </div>
                
    </div>
    
  )
}

export default Login


