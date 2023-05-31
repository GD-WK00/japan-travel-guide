import icon from "../images/globe-icon.png"

const Navbar = () => {
    return (
        <nav>
            <img src={icon} alt="icon.png" className="nav-icon" />
            <h1 className="nav-h1">Travel guide across the Japan</h1>
        </nav>
    );
}
 
export default Navbar;