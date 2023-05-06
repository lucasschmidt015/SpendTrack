import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"

import './SignUp.css'
import BgImg from "../../Resources/BackgroundLogin.jpg"
import { BsChevronDown, BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'
import { IoMdFootball } from 'react-icons/io'
import { SiThingiverse } from 'react-icons/si'


export default function SignUp(){

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const Nav = useNavigate();

    function request(href){
        window.open(href, '_blank')
    }

    function handleSignUp(){
        if (name !== '' && email !== '' && password !== '' && confirmPassword !== ''){
            dispatch({
                type: 'HANDLE_SIGNUP',
                user: { name, email, password }
            })
            
        } else {
            toast.error("Fill in all the fields.");
        }
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

                <div className="login-container-signup">
                    <h2>Sign Up</h2>
                    
                    <div className="input-area-signup">
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <input type="password" placeholder="Confirm Your Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                    <div className="buttons-send-signup">
                        <button onClick={handleSignUp}>SIGN UP</button>
                        <label>Or</label>
                        <button onClick={() => Nav('/')}>SIGN IN</button>
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
                