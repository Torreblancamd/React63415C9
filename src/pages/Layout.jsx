import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

function Layout(){

    return (
        <div>
            <NavBar/>
            <Outlet/>
            <footer>Pie de pagina</footer>
        </div>
    )
}

export default Layout;