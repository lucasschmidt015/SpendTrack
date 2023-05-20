import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"

import "./Login.css"
import { dispatchLogin, handleDisableError } from "../../Store/Models/User/actions"

import BgImg from "../../Resources/BackgroundLogin.jpg"
import { BsChevronDown, BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { DiApple } from 'react-icons/di'
import { FcGoogle } from 'react-icons/fc'
import { IoMdFootball } from 'react-icons/io'
import { SiThingiverse } from 'react-icons/si'

export default function Login(){

    const dispatch = useDispatch();
    const Nav = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState('password');
    
    const [ userInfo ] = useSelector(state => state.user);

    const borderStyle = {
        border: `1px solid ${userInfo.hasAuthError ? 'rgb(255, 0, 0)' : 'rgb(230, 227, 227)' }`,
    }
    
    const request = (href) => {
        window.open(href, '_blank')
    }

    const handleSignIn = () => {
        if (email !== '' && password !== ''){
            dispatch(dispatchLogin(email, password));
        } else {
            toast.error("Fill in all the fields.");
            return
        }
    }

    const handleOnChangeActiveInput = () => {
        if (userInfo.hasAuthError)
            dispatch(handleDisableError());
    }

    return(
        <div className="loginbox">
            <div className="BackgroundImage">
                <img src={BgImg} alt=""/>
                <div className="first-line">
                   <h3>Spend Track Sinten</h3>
                   <div className="options">
                        <label>Pages<BsChevronDown/></label>
                        <label>Authentication<BsChevronDown/></label>
                        <label>Ecommerce<BsChevronDown/></label>
                        <label>Docs<BsChevronDown/></label>
                   </div>
                   <button>BUY NOW</button>
                </div>
                <div className="Mensagem-meio">
                    <h1>Welcome!</h1>
                    <p>Use these awesome forms to login or create new account in your project for free</p>
                </div>

                <div className="login-container">
                    <h2>Sign in</h2>
                    <div className="login-icons">
                        <FaFacebook/>
                        <DiApple/>
                        <FcGoogle/>
                    </div>
                    <div className="input-area">
                        <input type="text" 
                               placeholder="Email" 
                               style={borderStyle} 
                               value={email} 
                               onChange={(e) => setEmail(e.target.value)}
                               onFocus={handleOnChangeActiveInput}
                               />
                        <input type={passwordType}
                               placeholder="Password" 
                               style={borderStyle} 
                               value={password} 
                               onChange={(e) => setPassword(e.target.value)}
                               onFocus={handleOnChangeActiveInput}
                               />
                    </div>
                    <div className="remember-button">
                        <input id="switch" type="checkbox"  onClick={() => setPasswordType(passwordType === 'password' ? 'text' : 'password')}/> 
                        <label for="switch">Show password</label>
                    </div>
                    <div className="buttons-send">
                        <button onClick={handleSignIn}>SIGN IN</button>
                        <label>Or</label>
                        <button onClick={() => Nav('/signup')}>SIGN UP</button>
                    </div>
                </div>

            </div>
            <div className="rodape">
                <div className="rodape-firstline">
                    <p>Company</p>
                    <p>About Us</p>
                    <p>Team</p>
                    <p>Products</p>
                    <p>Blog</p>
                    <p>Pricing</p>
                </div>
                <div className="rodape-secondline">
                    <IoMdFootball/>
                    <BsTwitter/>
                    <BsInstagram/>
                    <SiThingiverse/>
                    <BsGithub onClick={() => request("https://github.com/lucasschmidt015/SpendTrack")}/>
                </div>
            </div>
        </div>
    );
}
                