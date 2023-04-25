import "./Login.css"
import BgImg from "../../Resources/BackgroundLogin.jpg"
import { BsChevronDown, BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { DiApple } from 'react-icons/di'
import { FcGoogle } from 'react-icons/fc'
import { IoMdFootball } from 'react-icons/io'
import { SiThingiverse } from 'react-icons/si'


import { useState } from "react"


export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


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
                        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="remember-button">
                        <input id="switch" type="checkbox"/> 
                        <label for="switch">Remember me</label>
                    </div>
                    <div className="buttons-send">
                        <button>SIGN IN</button>
                        <label>Or</label>
                        <button>SIGN IN</button>
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
                    <BsGithub/>
                </div>
            </div>
        </div>
    );
}
                