import "./Login.css"
import BgImg from "../../Resources/BackgroundLogin.jpg"

export default function Login(){
    return(
        <div className="loginbox">
            <div className="BackgroundImage">
                <img src={BgImg} alt=""/>
            </div>
            <h1>Hello World</h1>
        </div>
    );
}