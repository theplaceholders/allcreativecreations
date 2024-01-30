import PropTypes from 'prop-types'
import '../styles/components_styles/menuPanel.sass';

const MenuPanel = ({show}) => {
    console.log(show)
    return(
        <div className={`menu-panel ${show ? '' : 'hidden'}`}>
            <ul className="menu-panel__list">
                <li className="menu-panel__item">
                    <a href="/" className="menu-panel__link">Home</a>
                </li>
                <li className="menu-panel__item">
                    <a href="/" className="menu-panel__link">About</a>
                </li>
                <li className="menu-panel__item">
                    <a href="/" className="menu-panel__link">Projects</a>
                </li>
                <li className="menu-panel__item">
                    <a href="/" className="menu-panel__link">Reserve</a>
                </li>
                <li className="menu-panel__item">
                    <a href="/" className="menu-panel__link">Contact Us</a>
                </li>
            </ul>
        </div>
    )
}

MenuPanel.propTypes = {
    show: PropTypes.bool.isRequired
};

export default MenuPanel;
