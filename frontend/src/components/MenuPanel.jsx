import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './menuPanel.sass';

const MenuPanel = ({show, toggleShowMenuPanel}) => {
    function handleClickEvent(e){
        toggleShowMenuPanel()
    }
    return(
        <div className={`menu-panel ${show ? '' : 'hidden'}`}>
            <ul className="menu-panel__list">
                <li className="menu-panel__item">
                    <Link to="/" className="menu-panel__link" onClick={(e)=>{handleClickEvent(e)}}>Home</Link>
                </li>
                <li className="menu-panel__item">
                    <Link to="/" className="menu-panel__link" onClick={(e)=>{handleClickEvent(e)}}>About</Link>
                </li>
                <li className="menu-panel__item">
                    <Link to="/" className="menu-panel__link" onClick={(e)=>{handleClickEvent(e)}}>Projects</Link>
                </li>
                <li className="menu-panel__item">
                    <Link to="/" className="menu-panel__link" onClick={(e)=>{handleClickEvent(e)}}>Reserve</Link>
                </li>
                <li className="menu-panel__item">
                    <Link to="/contact-us" className="menu-panel__link" onClick={(e)=>{handleClickEvent(e)}}>Contact Us</Link>
                </li>
            </ul>
        </div>
    )
}

MenuPanel.propTypes = {
    show: PropTypes.bool.isRequired,
    toggleShowMenuPanel: PropTypes.func.isRequired
};

export default MenuPanel;
