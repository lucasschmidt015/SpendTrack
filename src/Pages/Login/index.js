import "./Login.css"
import BgImg from "../../Resources/BackgroundLogin.jpg"
import { BsChevronDown } from 'react-icons/bs';

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
            </div>
        </div>
    );
}
                