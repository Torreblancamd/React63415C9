import { Link } from "react-router-dom"


function Error(){

    return (

        <div>
            <h1>404</h1>
            <p>Pagina no encontrada</p>
            <Link to="/">Volver</Link>
            

        </div>
    )


}

export default Error;