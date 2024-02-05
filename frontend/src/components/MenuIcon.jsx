import PropTypes from 'prop-types'
import '../styles/components_styles/menuIcon.sass';

const MenuIcon = ({handleClickEvent}) => {
    return(
        <button id="menu-icon" onClick={(e)=>handleClickEvent(e)}>
            <div className="menu-icon__bar"/>
            <div className="menu-icon__bar"/>
            <div className="menu-icon__bar"/>
        </button>
    )
}

MenuIcon.propTypes = {
    handleClickEvent: PropTypes.func.isRequired
};

export default MenuIcon;