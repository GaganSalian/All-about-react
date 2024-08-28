import { logo_main,nav_cart } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";



const Header=()=>{
    const [btnNameReact,setbtnNameReact]=useState("login");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo_main}/>
            </div>
            <div className="nav-items">
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/About"><li>About-us</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                        
                        <li ><img src={nav_cart}></img></li>
                        <button className="login" onClick={()=>{
                           btnNameReact=== "login"? setbtnNameReact("logout") : setbtnNameReact("login");
                        }}>{btnNameReact}</button>
                    </ul>

            </div>
        </div>
    );
};

export default Header;