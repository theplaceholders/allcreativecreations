import MenuIcon from "./MenuIcon"
import logo from '../assets/logo_without_text.png'
import '../styles/components_styles/navbar.sass'
const NavBar = () => {
    const handleClickEvent = (e) => {
        console.log("MenuIcon was clicked")
        e.currentTarget.classList.toggle("close")
        console.log(e.currentTarget)
    }
    return(
        <nav id="navbar">
            <MenuIcon handleClickEvent={handleClickEvent}/>
            <div className="navbar__logo">
                <img src={logo} alt="logo" />
            </div>
        </nav>
    )
}

export default NavBar;