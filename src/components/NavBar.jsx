import { Link } from "react-router-dom";



function NavBar(){

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/galeria">Galeria</Link>
            <Link to="/productos">Productos</Link>
        </nav>
    )
}

export default NavBar