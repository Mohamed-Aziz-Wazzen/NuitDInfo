import { useRef } from "react";
import {FaBars,FaTimes} from "react-icons/fa";
import "../Styles/main.css"
import Frame from "../Logo/Frame.png";
function Navbar(){
    
    const navRef = useRef();
    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <header>
        <img src={Frame} alt="logo" className="logo"/>
        <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/#">Article</a>
            <a href="/#">About us</a>
            <a href="/#">Contact</a>
            <button  className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button  className="nav-btn" onClick={showNavbar}>
            <FaBars/>
        </button>

        </header>
    );
}
export default Navbar;