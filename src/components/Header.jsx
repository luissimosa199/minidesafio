import { NavLink } from "react-router-dom";

const Header = () => {
    return ( 
        <header>
        <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="data" >Data</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active-link' : ''} to="form" >Form</NavLink>
        </header>
     );
}
 
export default Header;