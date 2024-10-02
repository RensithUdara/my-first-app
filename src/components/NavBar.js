import "./NavBar.css";

import Logo from "./Logo";
import NavButton from "./NavButton";
import NavLinks from "./NavLinks";

function NavBar(){
    return <div className="navbar">
        <div className="logo-navlinks">
        <Logo/>
        <NavLinks/>
        </div>
        <NavButton/>
    </div>;
}
export default NavBar;