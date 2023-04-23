import "./Login.css"
import BgImg from "../../Resources/BackgroundLogin.jpg"
import { BsChevronDown } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { DiApple } from 'react-icons/di'
import { FcGoogle } from 'react-icons/fc'


export default function Login(){
    return(
        <div className="loginbox">
            <div className="BackgroundImage">
                <img src={BgImg} alt=""/>
                <div className="first-line">
                   <h3>Spend Track Sinten</h3>
                   <div className="rodapes">
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
                        <input type="text" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className="remember-button">
                        <input id="switch" type="checkbox"/> 
                        <label for="switch">Remember me</label>
                    </div>
                </div>
            </div>
        </div>
    );
}
                