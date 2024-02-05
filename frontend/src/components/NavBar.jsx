import { useEffect, useState } from 'react'
import logo from '../assets/logo_without_text.png'
import '../styles/components_styles/navbar.sass'
import MenuIcon from './MenuIcon'
import MenuPanel from './MenuPanel'
const NavBar = () => {
    const [showMenuPanel, setShowMenuPanel] = useState(false)
    
    function toggleShowMenuPanel(e){
        const menuIcon = document.getElementById('menu-icon')
        menuIcon.classList.toggle('close')
        const navbar = document.getElementById('navbar')
        if(menuIcon.classList.contains('close')){
            setShowMenuPanel(true)
            navbar.style.boxShadow = 'none'
            navbar.style.backgroundColor = 'white'
        }else{
            setShowMenuPanel(false)
            navbar.style.boxShadow = null
            navbar.style.backgroundColor = null
        }
    }
    return(
        <>
            <nav id="navbar">
                <div className="navbar__logo">
                    <img src={logo} alt="logo" />
                </div>
                <MenuIcon handleClickEvent={toggleShowMenuPanel}/>
            </nav>
            <MenuPanel show={showMenuPanel} toggleShowMenuPanel={toggleShowMenuPanel}/>
        </>
    )
}

export default NavBar;